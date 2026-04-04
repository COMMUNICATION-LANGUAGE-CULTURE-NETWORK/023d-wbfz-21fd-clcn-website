/* =============================================================
   CLCN Opportunities Page - Volunteer, Membership, Sponsorship, Donate
   
   HOW TO EDIT:
   - Hero image: Change HERO_IMG URL at top of file
   - Volunteer section: Update text in the #volunteer section
   - Corporate Membership: Update text in the #membership section
   - Sponsorship: Update text in the #sponsorship section
   - Donate: Update text in the #donate section
   
   VOCABULARY NOTE: CLCN does not use the word partner.
   Use: volunteer, participant, collaborator, sponsor, donor instead.
   
   Typography: Poppins (headings) | Calibri (body)
   Brand colours: Red #D82F27 | Blue #009FE6 | Orange #FC5328
   ============================================================= */
import { useEffect, useState } from "react";
import { ArrowRight, Heart, Users, Star, Gift } from "lucide-react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/DSC00091_f63fd9c3.JPG";

interface EOIFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

function EOIForm({ type }: { type: string }) {
  const [form, setForm] = useState<EOIFormData>({ name: "", email: "", phone: "", interest: type, message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/contact', form);
      setSubmitted(true);
    } catch (err) {
      setError('Failed to send message. Please try again or contact us directly at info@clcn.com.au');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-sm p-6 text-center">
        <div className="text-green-600 font-bold text-lg mb-2">
          Thank you for your interest!
        </div>
        <p className="text-green-700 text-sm">
          We've received your expression of interest. Our team will be in touch at <strong>{form.email}</strong> shortly.
        </p>
      </div>
    );
  }

  return (
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
            Phone Number <span className="text-[#D82F27]">*</span>
          </label>
          <input
            type="tel"
            required
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
          Message (Optional)
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us more about your interest..."
          rows={3}
          className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-[#D82F27] resize-none"
        />
      </div>
      <p className="text-gray-400 text-xs">
        Your details will be directed to <span className="text-[#D82F27]">info@clcn.com.au</span>. We respect your privacy.
      </p>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-sm p-3 text-red-700 text-sm">
          {error}
        </div>
      )}
      <button 
        type="submit" 
        className="btn-clcn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Submit Expression of Interest'}
        <ArrowRight size={16} />
      </button>
    </form>
  );
}

export default function Opportunities() {
  const [donationEmail, setDonationEmail] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [donationSubmitted, setDonationSubmitted] = useState(false);
  const [donationError, setDonationError] = useState<string | null>(null);
  const [donationLoading, setDonationLoading] = useState(false);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  async function handleDonateSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDonationError(null);

    if (!donationEmail || !donationAmount) {
      setDonationError("Please enter your email address and donation amount.");
      return;
    }

    const amountValue = parseFloat(donationAmount.replace(/[^0-9.]/g, ""));
    if (Number.isNaN(amountValue) || amountValue <= 0) {
      setDonationError("Please enter a valid donation amount.");
      return;
    }

    setDonationLoading(true);

    try {
      await axios.post("/api/contact", {
        name: "",
        email: donationEmail,
        phone: "",
        interest: "Donate",
        subject: "Donate",
        message: `Donation amount: $${amountValue.toFixed(2)}`,
      });
      setDonationSubmitted(true);
    } catch (err) {
      setDonationError("Failed to submit donation interest. Please try again or email info@clcn.com.au directly.");
    } finally {
      setDonationLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-64 overflow-hidden">
          <img src={HERO_IMG} alt="Opportunities" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 flex items-center">
            <div className="container">              <h1
                className="text-white font-black"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Opportunities
              </h1>
            </div>
          </div>
        </section>

        {/* Quick nav */}
        <section className="bg-[#FAF8F5] py-4 border-b border-gray-200">
          <div className="container">
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Volunteer with Us", href: "#volunteer" },
                { label: "Corporate Membership", href: "#membership" },
                { label: "Sponsor CLCN", href: "#sponsorship" },
                { label: "Donate", href: "#donate" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/70 hover:text-white text-sm font-bold uppercase tracking-wide transition-colors no-underline"
                 
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer */}
        <section id="volunteer" className="bg-white py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#D82F27] rounded-sm flex items-center justify-center">
                    <Heart size={18} className="text-white" />
                  </div>
                </div>
                <h2
                  className="heading-accent text-[#1A1A1A] font-black mb-4"
                  style={{ fontSize: "1.75rem" }}
                >
                  Volunteer with CLCN
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  CLCN is run entirely by passionate volunteers committed to student success. Volunteering with CLCN is not just about giving back — it's an opportunity to develop your own professional skills, build your network, and contribute to a meaningful cause.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Whether you're interested in program delivery, marketing, events management, or organisational support — there's a role for you at CLCN.
                </p>
                <EOIForm type="Volunteer" />
              </div>
              <div>
                <div className="bg-[#F9F7F5] p-6 rounded-sm border border-gray-200 mb-6">
                  <h3 className="font-black text-[#1A1A1A] text-lg mb-3">
                    Why Volunteer with CLCN?
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Develop real professional skills in a live organisational context",
                      "Build your network across industries and cultures",
                      "Contribute to meaningful social impact",
                      "Access the Global Talent Incubator (GTI) pathway",
                      "Be part of a dynamic, inclusive community",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#D82F27] rounded-full flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Membership (formerly Partner & Collaborate) */}
        <section id="membership" className="bg-[#F9F7F5] py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#009FE6] rounded-sm flex items-center justify-center">
                    <Users size={18} className="text-white" />
                  </div>
                </div>
                <h2
                  className="heading-accent text-[#1A1A1A] font-black mb-4"
                  style={{ fontSize: "1.75rem" }}
                >
                  Corporate Membership
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  CLCN offers corporate membership for organisations that share our values of inclusion, collaboration, and community. Corporate members gain access to CLCN programs, events, and the broader CLCN ecosystem as a strategic collaborator in workforce development and social cohesion.
                </p>
                <p className="text-gray-500 text-sm italic mb-6">
                  [Corporate membership details, tiers, and benefits to be provided by CLCN team]
                </p>
                <EOIForm type="Corporate Membership" />
              </div>
              <div>
                <div className="bg-white p-6 rounded-sm border border-gray-200">
                  <h3 className="font-black text-[#1A1A1A] text-lg mb-3">
                    Corporate Membership Benefits
                  </h3>
                  <p className="text-gray-500 text-sm italic mb-4">
                    [Corporate membership benefits and tiers to be provided by CLCN team]
                  </p>
                  <div className="space-y-3">
                    {[
                      { title: "Access to CLCN Programs", desc: "Participate in Social Cohesion, Employability, and GTI programs." },
                      { title: "Community & Events", desc: "Join CLCN events, networking initiatives, and annual celebrations." },
                      { title: "Professional Development", desc: "Access structured development pathways within the CLCN ecosystem." },
                      { title: "Values-Aligned Community", desc: "Connect with a diverse, inclusive community committed to growth." },
                    ].map((item) => (
                      <div key={item.title} className="border-l-2 border-[#009FE6] pl-3">
                        <div className="font-bold text-sm text-[#1A1A1A]">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsorship */}
        <section id="sponsorship" className="bg-white py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#FC5328] rounded-sm flex items-center justify-center">
                    <Star size={18} className="text-white" />
                  </div>
                </div>
                <h2
                  className="heading-accent text-[#1A1A1A] font-black mb-4"
                  style={{ fontSize: "1.75rem" }}
                >
                  Sponsor
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sponsoring us is an opportunity to align your brand with a trusted, dynamic, and accessible organisation that is making a real difference in the lives of international students and skilled migrants in Australia.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For sponsorship packages and information, please contact us using the form below or download our Sponsorship Branding Kit from the Resources page.
                </p>
                <EOIForm type="Sponsorship" />
              </div>
              <div>
                <div className="bg-[#F9F7F5] p-6 rounded-sm border border-gray-200">
                  <h3 className="font-black text-[#1A1A1A] text-lg mb-3">
                    Sponsorship Benefits
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Brand visibility across CLCN events and communications",
                      "Access to CLCN's diverse talent network",
                      "Recognition in CLCN publications and social media",
                      "Opportunity to present at CLCN events",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#FC5328] rounded-full flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donate */}
        <section id="donate" className="bg-[#D82F27] py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-sm flex items-center justify-center">
                    <Gift size={18} className="text-white" />
                  </div>
                  <span className="text-red-100 text-xs font-bold uppercase tracking-widest">Donate</span>
                </div>
                <h2
                  className="text-white font-black mb-4"
                  style={{ fontSize: "1.75rem" }}
                >
                  Donate
                </h2>
                <p className="text-red-100 leading-relaxed mb-4">
                  Your donation directly supports CLCN's programs and activities, helping more students and skilled migrants build the skills and connections they need to thrive in Australia.
                </p>
                <p className="text-red-200 text-sm italic mb-6">
                  Please share your donation interest and preferred amount below, and our team will follow up with the next steps.
                </p>
                {donationSubmitted ? (
                  <div className="bg-white/10 border border-white/20 rounded-sm p-6 text-white">
                    <div className="font-bold text-lg mb-2">Thank you!</div>
                    <p className="text-sm text-red-100">
                      We have received your donation interest of <strong>${donationAmount}</strong>. Our team will contact you at <strong>{donationEmail}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleDonateSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-red-50 mb-1.5">
                        Email Address <span className="text-[#FFD1CC]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={donationEmail}
                        onChange={(e) => setDonationEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-3 py-2.5 text-sm border border-white/30 bg-white/10 text-white rounded-sm focus:outline-none focus:border-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-red-50 mb-1.5">
                        Donation Amount <span className="text-[#FFD1CC]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        placeholder="$100"
                        className="w-full px-3 py-2.5 text-sm border border-white/30 bg-white/10 text-white rounded-sm focus:outline-none focus:border-white"
                      />
                    </div>
                    {donationError && (
                      <div className="bg-red-100/20 border border-red-200 text-red-100 rounded-sm p-3 text-sm">
                        {donationError}
                      </div>
                    )}
                    <button
                      type="submit"
                      className="bg-white text-[#D82F27] font-bold text-sm uppercase tracking-wide px-6 py-3 rounded-sm hover:bg-red-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={donationLoading}
                    >
                      {donationLoading ? "Sending..." : "Express Interest"}
                    </button>
                  </form>
                )}
              </div>
              <div className="bg-white/10 rounded-sm p-6">
                <h3 className="text-white font-black text-lg mb-3">
                  Your Donation Makes a Difference
                </h3>
                <ul className="space-y-3">
                  {[
                    "Fund program delivery for students and skilled migrants",
                    "Support event hosting and community activities",
                    "Enable the development of new programs and resources",
                    "Help CLCN maintain its 100% volunteer-run model",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-red-100">
                      <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
