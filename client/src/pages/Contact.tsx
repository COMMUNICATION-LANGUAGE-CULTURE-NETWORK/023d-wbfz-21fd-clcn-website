/* =============================================================
   CLCN Contact Page
   ============================================================= */
import { useState } from "react";
import axios from "axios";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSearchParams } from "wouter";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const ref = searchParams.get('ref');

  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: ref == 'clp' ? "CLP Enquiry" : "General Enquiry", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("/api/contact", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        interest: form.subject,
        message: form.message,
      });
      setSubmitted(true);
    } catch (err) {
      setError("Failed to send message. Please try again or email info@clcn.com.au directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#D82F27] py-16" id="contact">
          <div className="container">            <h1
              className="text-white font-black mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Contact Us
            </h1>
            <p className="text-red-100 max-w-xl">
              We'd love to hear from you. Whether you have a question about our programs, want to volunteer, or are interested in collaborating with CLCN — reach out.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact info */}
              <div>                <h2
                  className="heading-accent text-[#1A1A1A] font-black mb-6"
                  style={{ fontSize: "1.75rem" }}
                >
                  Reach Out to CLCN
                </h2>
                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#D82F27] rounded-sm flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-[#1A1A1A] text-sm mb-0.5">Email</div>
                      <a href="mailto:info@clcn.com.au" className="text-[#D82F27] hover:underline text-sm">info@clcn.com.au</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#009FE6] rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-[#1A1A1A] text-sm mb-0.5">Location</div>
                      <p className="text-gray-600 text-sm">Australia</p>
                      <p className="text-gray-400 text-xs">283 Gouger St, Adelaide SA, Australia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#FC5328] rounded-sm flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-[#1A1A1A] text-sm mb-0.5">Phone</div>
                      <p className="text-gray-400 text-xs">[Phone number to be provided by CLCN team]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div>                <h2
                  className="heading-accent text-[#1A1A1A] font-black mb-6"
                  style={{ fontSize: "1.75rem" }}
                >
                  Get in Touch
                </h2>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="font-black text-[#1A1A1A] text-xl mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Thank you for reaching out. Our team will get back to you at <strong>{form.email}</strong> within 2–3 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-[#1A1A1A] mb-1.5">
                          Full Name <span className="text-[#D82F27]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-[#D82F27]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#1A1A1A] mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="Your phone number"
                          className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-[#D82F27]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#1A1A1A] mb-1.5">
                        Email Address <span className="text-[#D82F27]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Your email address"
                        className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-[#D82F27]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#1A1A1A] mb-1.5">
                        Subject
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-[#D82F27] bg-white"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Programs & Events">Programs & Events</option>
                        <option value="Volunteering">Volunteering</option>
                        <option value="Collaboration & Sponsorship">Collaboration & Sponsorship</option>
                        <option value="Sponsorship">Sponsorship</option>
                        <option value="Media Enquiry">Media Enquiry</option>
                        <option value="CLP Enquiry">CLP Enquiry</option> 
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#1A1A1A] mb-1.5">
                        Message <span className="text-[#D82F27]">*</span>
                      </label>
                      <textarea
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="How can we help you?"
                        rows={5}
                        className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-[#D82F27] resize-none"
                      />
                    </div>
                    <button type="submit" className="btn-clcn-primary w-full justify-center" disabled={loading}>
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                    {error && (
                      <p className="text-red-600 text-sm mt-2">{error}</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
