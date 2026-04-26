import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import https from "https";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Proxy /tools/SG/* to the signature generator service
  if (process.env.SIGNATURE_GENERATOR_URL) {
    const sgHost = new URL(process.env.SIGNATURE_GENERATOR_URL).host;
    app.use("/tools/SG", (req, res) => {
      if (req.originalUrl === "/tools/SG") return res.redirect(301, "/tools/SG/");
      const upstream = `https://${sgHost}${req.url}`;
      https.get(upstream, { headers: { host: sgHost } }, (proxyRes) => {
        res.writeHead(proxyRes.statusCode ?? 200, proxyRes.headers);
        proxyRes.pipe(res);
      }).on("error", () => res.sendStatus(502));
    });
  }

  // API route for form submissions
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, interest, message, subject } = req.body;

      const mailSubject = subject
        ? subject
        : `CLCN ${interest} Expression of Interest${name ? ` - ${name}` : ''}`;

      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: mailSubject,
        html: `
          <h2>New ${interest} Expression of Interest</h2>
          <p><strong>Name:</strong> ${name || 'N/A'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Interest:</strong> ${interest}</p>
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
        `,
      };

      await transporter.sendMail(mailOptions);

      res.json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.NODE_ENV === "production" ? (process.env.PORT || 3000) : 3001;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
