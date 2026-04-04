/* CLCN Terms of Use Page */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-[#D82F27] py-12">
          <div className="container">
            <h1 className="text-white font-black text-3xl" style={{ fontFamily: "Arial, sans-serif" }}>
              Terms of Use
            </h1>
            <p className="text-red-200 text-sm mt-2">Last updated: February 2026</p>
          </div>
        </section>
        <section className="bg-white py-14">
          <div className="container max-w-3xl">
            <p className="text-gray-600 leading-relaxed mb-4">
              By accessing and using the CLCN website (clcn.com.au), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website.
            </p>
            <h2 className="font-black text-[#1A1A1A] text-xl mt-8 mb-3" style={{ fontFamily: "Arial, sans-serif" }}>
              Use of Content
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All content on this website, including text, images, logos, and documents, is the property of CLCN and is protected by Australian copyright law. You may not reproduce, distribute, or use any content without prior written permission from CLCN.
            </p>
            <h2 className="font-black text-[#1A1A1A] text-xl mt-8 mb-3" style={{ fontFamily: "Arial, sans-serif" }}>
              Downloaded Resources
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Resources downloaded from this website are for personal, non-commercial use only. You may not redistribute, sell, or use downloaded resources for commercial purposes without written permission from CLCN.
            </p>
            <h2 className="font-black text-[#1A1A1A] text-xl mt-8 mb-3" style={{ fontFamily: "Arial, sans-serif" }}>
              Disclaimer
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              CLCN provides this website and its content on an "as is" basis. We make no warranties, expressed or implied, regarding the accuracy, completeness, or suitability of the information on this website.
            </p>
            <h2 className="font-black text-[#1A1A1A] text-xl mt-8 mb-3" style={{ fontFamily: "Arial, sans-serif" }}>
              Contact
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these terms, please contact{" "}
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
