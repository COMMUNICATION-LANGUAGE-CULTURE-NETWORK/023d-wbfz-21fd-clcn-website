/* =============================================================
   CLCN Footer — Red + White + Cream colour scheme
   ACNC logo next to CLCN logo, values in footer, office address
   Social: Facebook, Instagram, YouTube, WeChat (with QR modal), LinkedIn, RedNote
   ============================================================= */
import { Link, useLocation } from "wouter";
import { Mail, MapPin, ExternalLink, Phone, X } from "lucide-react";
import { useState, type MouseEvent } from "react";

import ACNC_LOGO from '../../public/resource-files/ACNC-Registered-Charity-Logo_RGB.png';
import CLCN_LOGO from '../../public/resource-files/CLCN Primary Logo.png';

const WECHAT_QR_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/CLCNWeChatSubscriptionAccount50cm_d62f30c1.jpg";

/* ── Social media icon SVGs ── */
function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function YouTubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function WeChatIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-3.74 3.504c.537 0 .972.44.972.982a.976.976 0 01-.972.983.976.976 0 01-.972-.983c0-.542.435-.982.972-.982zm4.971 0c.537 0 .972.44.972.982a.976.976 0 01-.972.983.976.976 0 01-.972-.983c0-.542.434-.982.972-.982z"/>
    </svg>
  );
}

function RedNoteIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0"/>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 6.5h-1.75v1.25H15v1.25h-1.25v3.75c0 .69-.56 1.25-1.25 1.25H9.25A1.25 1.25 0 018 14.5v-5c0-.69.56-1.25 1.25-1.25h2.5V7h1.25v1.25H15V8.5zm-3.75 1.25H9.5v4.5h2.25V9.75z"/>
    </svg>
  );
}

/* WeChat QR Modal Component */
function WeChatQRModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Scan to Follow CLCN on WeChat</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mb-4">
          <img
            src={WECHAT_QR_URL}
            alt="CLCN WeChat QR Code"
            className="w-64 h-64 object-contain"
          />
        </div>
        
        <p className="text-center text-sm text-gray-600">
          Use your phone's camera or WeChat app to scan this QR code and follow our official account.
        </p>
      </div>
    </div>
  );
}

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/clcnau", Icon: FacebookIcon, external: true },
  { label: "Instagram", href: "https://www.instagram.com/clcnsa/", Icon: InstagramIcon, external: true },
  { label: "YouTube", href: "https://www.youtube.com/@CLCN529/", Icon: YouTubeIcon, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/groups/14303771/", Icon: LinkedInIcon, external: true },
  { label: "WeChat", href: "#", Icon: WeChatIcon, external: false, isWeChat: true },
  { label: "RedNote", href: "https://www.xiaohongshu.com/user/profile/5c70ffa90000000011020ed8", Icon: RedNoteIcon, external: true },
];

export default function Footer() {
  const [location] = useLocation();
  const [weChatModalOpen, setWeChatModalOpen] = useState(false);

  const handleFooterLinkClick = (href: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    const [path, hash] = href.split("#");
    if (path === "/opportunities" && location === "/opportunities" && hash) {
      event.preventDefault();
      const target = document.getElementById(hash);
      if (target) {
        window.history.replaceState(null, "", `#${hash}`);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer style={{ backgroundColor: "#FAF8F5", color: "#333" }}>
      <WeChatQRModal isOpen={weChatModalOpen} onClose={() => setWeChatModalOpen(false)} />

      {/* Main footer */}
      <div className="container py-14" style={{ borderBottom: "1px solid #e0ddd9" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column — CLCN logo + ACNC logo side by side */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-5">
              <img
                src={CLCN_LOGO}
                alt="CLCN — Communication Language & Culture Network"
                style={{ height: "40px", width: "auto", objectFit: "contain" }}
              />
              <div style={{ width: "1px", height: "36px", backgroundColor: "#ddd" }} />          
              <img
                src={ACNC_LOGO}
                alt="ACNC Registered Charity"
                style={{ height: "36px", width: "auto", objectFit: "contain" }}
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              CLCN is an ACNC-registered not-for-profit organisation operating as human capability infrastructure within local, national, and global talent systems.
            </p>
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
              <Mail size={14} className="text-[#D82F27] flex-shrink-0" />
              <a href="mailto:info@clcn.com.au" className="hover:text-[#D82F27] transition-colors">
                info@clcn.com.au
              </a>
            </div>
            <div className="flex items-start gap-2 text-gray-600 text-sm mb-2">
              <MapPin size={14} className="text-[#D82F27] flex-shrink-0 mt-0.5" />
              <span>283 Gouger St, Adelaide SA, Australia</span>
            </div>

           
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold text-sm uppercase tracking-wider mb-5 pb-2"
              style={{ color: "#333", borderBottom: "2px solid #D82F27" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Programs", href: "/programs" },
                { label: "Global Talent Incubator", href: "/global-talent-incubator" },
                { label: "Events", href: "/events" },
                { label: "Opportunities", href: "/opportunities" },
                { label: "Impact", href: "/impact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-[#D82F27] transition-colors no-underline flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 bg-[#D82F27] rounded-full flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4
              className="font-bold text-sm uppercase tracking-wider mb-5 pb-2"
              style={{ color: "#333", borderBottom: "2px solid #D82F27" }}
            >
              Get Involved
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Volunteer with Us", href: "/opportunities#volunteer" },
                { label: "Corporate Membership", href: "/opportunities#membership" },
                { label: "Sponsorship", href: "/opportunities#sponsorship" },
                { label: "Donate", href: "/opportunities#donate" },
                { label: "CLP", href: "/career-launch-program" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(event: MouseEvent<HTMLAnchorElement>) => handleFooterLinkClick(link.href, event)}
                    className="text-gray-600 text-sm hover:text-[#D82F27] transition-colors no-underline flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 bg-[#009FE6] rounded-full flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Social */}
          <div>
            <h4
              className="font-bold text-sm uppercase tracking-wider mb-5 pb-2"
              style={{ color: "#333", borderBottom: "2px solid #D82F27" }}
            >
              Resources
            </h4>
            <ul className="space-y-2.5 mb-8">
              {[
                { label: "Resources", href: "/resources" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-[#D82F27] transition-colors no-underline flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 bg-[#D82F27] rounded-full flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media Icons */}
            <h4
              className="font-bold text-sm uppercase tracking-wider mb-5 pb-2"
              style={{ color: "#333", borderBottom: "2px solid #D82F27" }}
            >
              Follow Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.Icon;
                
                if (social.isWeChat) {
                  return (
                    <button
                      key={social.label}
                      onClick={() => setWeChatModalOpen(true)}
                      className="text-gray-600 hover:text-[#D82F27] transition-colors cursor-pointer"
                      title={social.label}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </button>
                  );
                }

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    className="text-gray-600 hover:text-[#D82F27] transition-colors"
                    title={social.label}
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>&copy; 2026 CLCN. All rights reserved. ABN 90 645 606 631</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-[#D82F27] transition-colors no-underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-[#D82F27] transition-colors no-underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Subscribe Form Component ── */
function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement email subscription logic
    setTimeout(() => {
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-4 py-2 rounded text-sm text-gray-800 flex-1 min-w-0"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2 bg-white text-clcn-red font-bold rounded text-sm hover:bg-gray-100 transition-colors disabled:opacity-50"
      >
        {loading ? "..." : "Subscribe"}
      </button>
    </form>
  );
}
