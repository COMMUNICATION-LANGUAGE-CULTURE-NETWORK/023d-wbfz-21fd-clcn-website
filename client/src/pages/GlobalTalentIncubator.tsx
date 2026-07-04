/* =============================================================
   CLCN Global Talent Incubator (GTI) Page
   
   HOW TO EDIT:
   - Hero image: Change HERO_IMG URL at top of file
   - GTI description: Update text paragraphs in the main content section
   - Journey steps: Edit the journey steps array (title, description)
   - Career Launch Program: Update CLP section content
   
   Typography: Poppins (headings) | Calibri (body)
   Brand colours: Red #D82F27 | Blue #009FE6 | Orange #FC5328
   ============================================================= */
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { navigate } from "wouter/use-browser-location";

const GTI_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/PXL_20240309_005619513.MP_d4965c13.jpg";

const clpOutcomes = [
  "Apply workplace communication and professional behaviours in real contexts",
  "Operate within team structures, deadlines, and accountability frameworks",
  "Develop judgement, prioritisation, and reliability under real conditions",
  "Build confidence through responsibility and contribution, not observation",
  "Translate skills into repeatable professional capability and mastery through sustained application",
];

const journey = [
  { step: "1", label: "Knowledge", desc: "Foundation learning and orientation" },
  { step: "2", label: "Application", desc: "Applying skills in real contexts" },
  { step: "3", label: "Experience", desc: "Live organisational immersion" },
  { step: "4", label: "Supported Responsibility", desc: "Ownership within live operational structures, with structured guidance and mentoring" },
  { step: "5", label: "Repeatable Capability", desc: "Consistent professional delivery" },
  { step: "6", label: "Mastery", desc: "CLCN Graduate status" },
];

export default function GlobalTalentIncubator() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-72 overflow-hidden">
          <img src={GTI_IMG} alt="Global Talent Incubator" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 flex items-center">
            <div className="container">              <h1
                className="text-white font-black"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Global Talent Incubator
              </h1>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>                <h2
                  className="heading-accent text-[#1A1A1A] font-black mb-5"
                  style={{ fontSize: "2rem" }}
                >
                  Practical Mastery within Living Organisational Contexts
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Global Talent Incubator (GTI) is CLCN's advanced development portfolio, operating within CLCN's activity programs and teams as a living organisational context.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>GTI is not a separate environment.</strong> It is embedded within CLCN's Activity programs, operations, and delivery structures, where responsibility, collaboration, judgement, and outcomes are real.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This portfolio is designed for participants who are interviewed, selected, and intentionally cultivated as professionals-in-formation, progressing toward CLCN Graduate status. GTI enables individuals to move beyond participation and exposure into applied responsibility and professional mastery.
                </p>
                <div className="pull-quote">
                  Human skills that cannot be simulated or abstracted from real organisational life.
                </div>
              </div>
              <div>                <h2
                  className="heading-accent text-[#1A1A1A] font-black mb-5"
                  style={{ fontSize: "2rem" }}
                >
                  From Knowledge to Mastery
                </h2>
                <div className="space-y-3">
                  {journey.map((step, i) => (
                    <div key={step.step} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-sm flex items-center justify-center font-black text-white flex-shrink-0"
                        style={{
                          backgroundColor: i === journey.length - 1 ? "#D82F27" : "#FC5328",
                        }}
                      >
                        {step.step}
                      </div>
                      <div>
                        <div className="font-bold text-[#1A1A1A] text-sm">
                          {step.label}
                        </div>
                        <div className="text-gray-500 text-xs">{step.desc}</div>
                      </div>
                      {i < journey.length - 1 && (
                        <ArrowRight size={14} className="text-gray-300 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLP */}
        <section id="clp" className="bg-[#F9F7F5] py-16" style={{ scrollMarginTop: '100px' }}>
          <div className="container">
            <div className="max-w-3xl mx-auto">              <h2
                className="heading-accent text-[#1A1A1A] font-black mb-5"
                style={{ fontSize: "2rem" }}
              >
                Career Launch Program (CLP)
              </h2>
              <p
                className="text-[#FC5328] font-bold italic text-lg mb-4"
               
              >
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Career Launch Program (CLP) is the core program of the Global Talent Incubator, providing a controlled immersion into CLCN's living organisational environments, operations, expectations, and accountability.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                CLP compresses long-form professional development into a structured, real-world experience of professional standards of delivery, communication and responsibility. Participants are placed within CLCN activities and functions, contributing to tangible outcomes while being supported by structured guidance, human-centred mentoring, coaching, and reflective practice.
              </p>
              <h3
                className="font-black text-[#1A1A1A] text-lg mb-4"
               
              >
                Through CLP, participants:
              </h3>
              <div className="space-y-3">
                {clpOutcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#D82F27] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 text-sm leading-relaxed">{outcome}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mt-6">
                Human-skills training and organisational immersion are integrated components of CLP, providing first-hand exposure to Australian workplace culture, cross-cultural collaboration, and professional expectations.
              </p>

              <button type="button" className="btn-clcn-primary disabled:opacity-50 disabled:cursor-not-allowed mt-6" onClick={() => navigate('/career-launch-program')}>
                See more<ArrowRight size={16} />
              </button>

            </div>
          </div>
        </section>

        {/* Apply CTA */}
        <section className="bg-[#D82F27] py-14">
          <div className="container text-center">
            <h2
              className="text-white font-black text-2xl mb-4"
             
            >
              Ready to Apply for GTI?
            </h2>
            <p className="text-red-100 mb-6 max-w-xl mx-auto">
              GTI participants are interviewed and selected. If you're ready to move beyond participation into applied professional mastery, express your interest today.
            </p>
            <Link href="/opportunities#volunteer" className="bg-white text-[#D82F27] font-bold text-sm uppercase tracking-wide px-8 py-3 rounded-sm hover:bg-red-50 transition-colors no-underline inline-flex items-center gap-2">
              Express Interest
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
