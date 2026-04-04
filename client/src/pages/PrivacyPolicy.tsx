/* CLCN Privacy Policy Page */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#D82F27] py-12">
          <div className="container">
            <h1 className="text-white font-black text-3xl" style={{ fontFamily: "Arial, sans-serif" }}>
              Privacy Policy
            </h1>
            <p className="text-red-200 text-sm mt-2">Last updated: February 2026</p>
          </div>
        </section>
        <section className="bg-white py-14">
          <div className="container max-w-3xl prose prose-sm">
            <p className="text-gray-600 leading-relaxed mb-4">
              CLCN (Communication Language &amp; Culture Network) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information in accordance with the Australian Privacy Act 1988 and the Australian Privacy Principles.
            </p>
            <h2 className="font-black text-[#1A1A1A] text-xl mt-8 mb-3" style={{ fontFamily: "Arial, sans-serif" }}>
              Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect personal information including your name, email address, and phone number when you download resources from our website, register for events, volunteer with us, or contact us. We only collect information that is necessary for the purposes described in this policy.
            </p>
            <h2 className="font-black text-[#1A1A1A] text-xl mt-8 mb-3" style={{ fontFamily: "Arial, sans-serif" }}>
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your information is used to: communicate with you about CLCN programs and events; process your requests for resources or volunteer applications; send you newsletters and updates (if you have subscribed); and improve our services and programs.
            </p>
            <h2 className="font-black text-[#1A1A1A] text-xl mt-8 mb-3" style={{ fontFamily: "Arial, sans-serif" }}>
              Disclosure of Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              CLCN does not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners and service providers who assist us in operating our website and programs, subject to confidentiality agreements.
            </p>
            <h2 className="font-black text-[#1A1A1A] text-xl mt-8 mb-3" style={{ fontFamily: "Arial, sans-serif" }}>
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For privacy-related enquiries, please contact us at{" "}
              <a href="mailto:info@clcn.com.au" className="text-[#D82F27] hover:underline">
                info@clcn.com.au
              </a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
