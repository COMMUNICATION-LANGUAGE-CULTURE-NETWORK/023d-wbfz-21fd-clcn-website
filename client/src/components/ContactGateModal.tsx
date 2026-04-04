/* =============================================================
   CLCN ContactGateModal — Collect contact details before download
   Name, Phone, Email required; submits to info@clcn.com.au
   ============================================================= */
import { useState } from "react";
import { X, Download, CheckCircle } from "lucide-react";

interface ContactGateModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentTitle: string;
  documentDescription?: string;
  onSubmit: (data: { name: string; email: string; phone: string }) => void;
}

export default function ContactGateModal({
  isOpen,
  onClose,
  documentTitle,
  documentDescription,
  onSubmit,
}: ContactGateModalProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your full name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email address.";
    if (!form.phone.trim()) errs.phone = "Please enter your phone number.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    onSubmit(form);
  }

  function handleClose() {
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "" });
    setErrors({});
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div className="bg-white w-full max-w-md rounded-sm shadow-2xl relative">
        {/* Header */}
        <div className="bg-clcn-red px-6 py-5">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-3">
            <Download size={20} className="text-white flex-shrink-0" />
            <div>
              <h3
                className="text-white font-black text-lg leading-tight"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Download Resource
              </h3>
              <p className="text-red-100 text-sm">{documentTitle}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {submitted ? (
            <div className="text-center py-4">
              <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
              <h4
                className="text-[#1A1A1A] font-black text-lg mb-2"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Thank You!
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Your download is ready. We've also noted your contact details — our team may reach out to you about CLCN programs and opportunities.
              </p>
              <button
                onClick={handleClose}
                className="btn-clcn-primary w-full justify-center"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-600 text-sm mb-5">
                To access this resource, please provide your contact details below.
                {documentDescription && (
                  <span className="block mt-1 text-gray-500 italic">{documentDescription}</span>
                )}
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-bold text-[#1A1A1A] mb-1.5"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    Full Name <span className="text-[#D82F27]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your full name"
                    className={`w-full px-3 py-2.5 text-sm border rounded-sm focus:outline-none focus:border-[#D82F27] transition-colors ${
                      errors.name ? "border-red-400 bg-red-50" : "border-gray-300"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label
                    className="block text-sm font-bold text-[#1A1A1A] mb-1.5"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    Email Address <span className="text-[#D82F27]">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter your email address"
                    className={`w-full px-3 py-2.5 text-sm border rounded-sm focus:outline-none focus:border-[#D82F27] transition-colors ${
                      errors.email ? "border-red-400 bg-red-50" : "border-gray-300"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label
                    className="block text-sm font-bold text-[#1A1A1A] mb-1.5"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    Phone Number <span className="text-[#D82F27]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className={`w-full px-3 py-2.5 text-sm border rounded-sm focus:outline-none focus:border-[#D82F27] transition-colors ${
                      errors.phone ? "border-red-400 bg-red-50" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <p className="text-gray-400 text-xs">
                  By submitting, you agree that CLCN may contact you about programs and opportunities. Your details will be sent to{" "}
                  <span className="text-[#D82F27]">info@clcn.com.au</span>.
                </p>
                <button type="submit" className="btn-clcn-primary w-full justify-center">
                  <Download size={15} />
                  Submit &amp; Download
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
