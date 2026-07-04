/* =============================================================
   CLCN CLP Landing Page
   
   HOW TO EDIT:
   - Hero section: Update heading text, subtitle, and closing date
   - Hero image: Change HERO_IMG URL at top of file
   - Demo images: Replace placeholder images with final assets
   - Typography: Poppins (headings) | Calibri (body)
   - Brand colours: Red #D82F27 | Blue #009FE6 | Orange #FC5328
   ============================================================= */
import React, { useState } from "react";
import { Link } from "wouter";
import { 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Clock, 
  Briefcase, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/Copy_of__DSC5355_018d6003.jpg";
const WORKSHOP_IMG = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80";
const TEAM_IMG = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80";

const programStructure = [
  { icon: Calendar, label: "Duration", value: "13 weeks" },
  { icon: Clock, label: "Contact hours", value: "120 structured contact hours (plus approx. 30 additional hours)" },
  { icon: Briefcase, label: "Weekly commitment", value: "Approximately 10 to 12 hours per week (1 full delivery day)" },
  { icon: MapPin, label: "Location", value: "Adelaide, South Australia" },
];

const faqs = [
  {
    q: "Do I need prior work experience to apply?",
    a: "No. CLP is designed specifically for people who are building their professional track record. Prior experience is not a requirement. Mindset, maturity, and readiness are what matter."
  },
  {
    q: "Is CLP only for international students?",
    a: "No. CLP is open to domestic students, international students, recent graduates, skilled migrants, and young professionals already in the workforce. What all participants share is not their background but their readiness to grow in a professional environment."
  },
  {
    q: "What is the weekly time commitment?",
    a: "Approximately 10 to 12 hours per week across the 13 weeks. The program is structured to be compatible with part-time work or study where scheduling allows."
  },
  {
    q: "How does the selection process work?",
    a: "Applications are reviewed by the CLCN team. Shortlisted applicants are invited to an interview. You will be notified of the outcome before the program start date of 16 July 2026."
  },
  {
    q: "When will I find out if I have been selected?",
    a: "All applicants will be notified before 16 July 2026. Shortlisted applicants will receive an interview invitation within two weeks of the application close date."
  },
  {
    q: "Can I apply if I am already employed?",
    a: "Yes. CLP has been designed with a weekly schedule that can accommodate participants who are working part-time. If you are working full-time, we encourage you to consider whether the 10 to 12 hour weekly commitment is manageable alongside your current role before applying."
  },
  {
    q: "Will there be scholarships available?",
    a: "CLCN is actively developing a scholarship pathway for CLP. If scholarships become available before the application close date, they will be announced on this page and across CLCN's channels."
  },
  {
    q: "What happens if I have questions before applying?",
    a: "Contact the CLCN team directly at info@clcn.com.au. We are happy to answer questions before you apply."
  }
];

const rotations = [
  {
    num: "01",
    color: "#D82F27",
    title: "Activity Team",
    desc: "You work inside CLCN's event and program delivery team. You contribute to planning, coordination, and delivery of real activities, including events with real audiences and real logistics. You develop project management, teamwork, and the ability to deliver under pressure with others."
  },
  {
    num: "02",
    color: "#009FE6",
    title: "Marketing",
    desc: "You work inside CLCN's marketing and content team. You create content that actually gets published, contribute to campaigns that reach real audiences, and develop the ability to communicate professionally across digital platforms. You learn what it takes to produce work to a professional standard, not an academic one."
  },
  {
    num: "03",
    color: "#FC5328",
    title: "People and Culture",
    desc: "You experience the organisation from the inside. You contribute to how CLCN selects, supports, and develops its people. You take part in real interviews, real assessments, and real decisions about team composition. You develop the professional judgement that comes from seeing how organisations actually run, not how textbooks say they should."
  },
  {
    num: "04",
    color: "#D82F27",
    title: "Stakeholder Engagement",
    desc: "You work on CLCN's external relationships. You reach out to potential corporate members, contribute to formal communications, and represent CLCN in professional contexts. You develop the confidence and capability to navigate professional relationships with organisations that are not your own."
  }
];

export default function CareerLaunchProgram() {
  const [activeRotation, setActiveRotation] = useState(0);

  const nextRotation = () => {
    setActiveRotation((prev) => (prev + 1) % rotations.length);
  };

  const prevRotation = () => {
    setActiveRotation((prev) => (prev - 1 + rotations.length) % rotations.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        
        {/* Section 1 — Hero */}
        <section className="relative min-h-[75vh] flex items-center py-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
          <div className="relative container py-10 z-10">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-[#D82F27] bg-[#D82F27]/10 border border-[#D82F27]/30 px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider">
                  Applications for CLP Cohort 1 are now open. Closes 8 July 2026.
                </span>
              </div>

              <h1
                className="text-white font-black mb-4 leading-tight tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Career Launch Program
              </h1>
              
              <h2 className="text-gray-200 text-2xl md:text-3xl font-bold mb-6">
                Pre-employment professional incubation by CLCN
              </h2>

              <p className="text-gray-200 text-xl leading-relaxed mb-10 max-w-2xl font-light">
                A 13-week professional incubation program helping graduates, skilled migrants, international students and early-career professionals build evidence, confidence and demonstrated capability before entering or advancing in the workforce.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link 
                  href="/contact?ref=clp" 
                  className="px-8 py-4 rounded-sm text-white font-bold tracking-wide uppercase transition-colors duration-200 text-sm shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: "#D82F27" }}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — What CLP Is */}
        <section className="bg-white py-20">
          <div className="container max-w-5xl">
            <div className="max-w-3xl mb-12">
              <h2 className="heading-accent text-[#1A1A1A] font-bold mb-8" style={{ fontSize: "2rem" }}>
                What is CLP?
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p className="mb-6 font-medium text-gray-800 text-xl border-l-4 border-[#009FE6] pl-4">
                  The gap between education and employment is not only a skills gap. For many people, it is an evidence gap and an identity gap: they have capability, but not yet the language, local context or professional proof to show what they can do.
                </p>
                <p className="mb-6">
                  CLP is a 13-week pre-employment professional incubation program delivered inside CLCN, a real operating organisation. Participants contribute to real teams, real projects and real stakeholder outcomes while building the evidence, clarity and confidence to demonstrate who they are professionally.
                </p>
                <p>
                  Most development programs give you knowledge and some structured practice, then release you into a job market that expects experience you have not yet had the chance to build. CLP closes that gap by ensuring the knowledge and credentials you already hold finally have the professional foundation to stand on.
                </p>
              </div>
            </div>

            {/* The CLP Difference Comparison Table */}
            <div className="mt-12 overflow-hidden rounded-sm shadow-sm border border-gray-200">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr>
                    <th className="py-5 px-6 bg-gray-50 font-bold text-gray-700 border-b w-1/2">Traditional Pathways</th>
                    <th className="py-5 px-6 bg-[#D82F27] font-bold text-white border-b w-1/2">Career Launch Program</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-5 px-6 text-gray-600">University delivers <span className="font-semibold">qualifications</span></td>
                    <td className="py-5 px-6 font-bold text-[#1A1A1A] bg-red-50/30">CLP delivers demonstrated capability</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-6 text-gray-600">Most programs help you <span className="font-semibold">meet people</span></td>
                    <td className="py-5 px-6 font-bold text-[#1A1A1A] bg-red-50/30">CLP builds genuine professional relationships</td>
                  </tr>
                  <tr>
                    <td className="py-5 px-6 text-gray-600">Most programs let you graduate with <span className="font-semibold">potential</span></td>
                    <td className="py-5 px-6 font-bold text-[#1A1A1A] bg-red-50/30">CLP lets you graduate with evidence</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3 — Who CLP Is For */}
        <section className="bg-[#F9F7F5] py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="heading-accent text-[#1A1A1A] font-bold inline-block" style={{ fontSize: "2rem" }}>
                This is for you, if you recognise yourself here
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-12">
              {/* Group 1 */}
              <div className="bg-white p-8 rounded-sm shadow-sm border-t-4" style={{ borderColor: "#009FE6" }}>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Those Entering the Job Market</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#009FE6] shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">Domestic students approaching graduation who need a professional track record before they enter a market that asks for experience they have not yet had the chance to gain.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#009FE6] shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">International students who are technically prepared for their field but find that Australian workplace culture, professional norms, and local networks are things no curriculum taught them.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#009FE6] shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">Skilled migrants whose overseas experience and qualifications are real but do not yet translate in a new professional context, and who need the environment to demonstrate what they already know.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#009FE6] shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">Recent graduates who are qualified, sending applications, and finding that the market consistently asks for something that formal study alone could not provide.</span>
                  </li>
                </ul>
              </div>

              {/* Group 2 */}
              <div className="bg-white p-8 rounded-sm shadow-sm border-t-4" style={{ borderColor: "#FC5328" }}>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Those Already in the Workforce</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#FC5328] shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">Young professionals who are employed and contributing but are not growing at the pace they need, and who want the cross-functional exposure, soft skills development, and broader professional capability that their current role does not provide.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[#FC5328] shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">Professionals planning a career change who need exposure to different organisational functions, a new professional network, and a formal track record in the direction they are moving toward.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center bg-white p-6 border-l-4 border-[#D82F27] shadow-sm">
              <p className="text-lg text-gray-700 font-medium italic">
                Whether you are entering the job market or building within it, CLP provides the professional environment, the real contribution, and the formation that takes you further.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — What You Actually Do (Carousel Implementation) */}
        <section className="bg-white py-20">
          <div className="container">
            <div className="max-w-3xl mb-12">
              <h2 className="heading-accent text-[#1A1A1A] font-bold mb-6" style={{ fontSize: "2rem" }}>
                What you will do inside CLP
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                CLP is structured across four rotations over 13 weeks. Each rotation places you inside a different area of CLCN's operations, giving you a different set of responsibilities, a different team, and a different set of challenges. The work is real. The contribution matters. And the experience compounds across all four.
              </p>
            </div>

            <div className="relative mb-10 overflow-hidden bg-gray-50 border border-gray-100 rounded-sm">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeRotation * 100}%)` }}
              >
                {rotations.map((rot, idx) => (
                  <div key={idx} className="w-full flex-shrink-0">
                    <div className="p-8 md:p-16 flex flex-col items-center justify-center text-center min-h-[350px]">
                      <div 
                        className="font-black text-6xl md:text-8xl mb-6 opacity-20" 
                        style={{ color: rot.color }}
                      >
                        {rot.num}
                      </div>
                      <h3 className="font-bold text-2xl md:text-3xl mb-4 text-[#1A1A1A]">
                        {rot.title}
                      </h3>
                      <p className="text-gray-600 md:text-lg leading-relaxed max-w-3xl mx-auto">
                        {rot.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevRotation}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-gray-700 hover:text-[#D82F27] hover:bg-gray-50 transition-all z-10"
                aria-label="Previous rotation"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextRotation}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-gray-700 hover:text-[#D82F27] hover:bg-gray-50 transition-all z-10"
                aria-label="Next rotation"
              >
                <ChevronRight size={24} />
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                {rotations.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveRotation(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeRotation === idx ? 'bg-[#D82F27]' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="bg-[#1A1A1A] text-white p-6 rounded-sm flex items-start gap-4">
              <CheckCircle className="text-green-400 shrink-0 mt-1" size={24} />
              <p className="text-sm md:text-base leading-relaxed">
                <span className="font-bold">Note:</span> CLP delivers 120 structured contact hours across the 13 weeks. Participants also gain access to approximately 30 additional hours of events, networking opportunities, and reflection sessions — giving those who want to go further even more from their time with CLCN.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 — Program Structure at a Glance */}
        <section className="bg-[#F9F7F5] py-20">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <img src={WORKSHOP_IMG} alt="CLP Workshop" className="w-full h-[400px] object-cover rounded-sm shadow-lg" />
              </div>
              <div className="lg:w-1/2">
                <h2 className="heading-accent text-[#1A1A1A] font-bold mb-8" style={{ fontSize: "2rem" }}>
                  Program structure
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-y-8 gap-x-6 mb-8">
                  {programStructure.map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2 text-[#D82F27]">
                        <item.icon size={20} />
                        <span className="font-bold text-[#1A1A1A]">{item.label}</span>
                      </div>
                      <span className="text-gray-600 text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Format:</span>
                    <span className="text-gray-600 text-sm">In-person and online sessions, scheduled across the week</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Selection process:</span>
                    <span className="text-gray-600 text-sm">Written application followed by an interview</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Cohort 1 start date:</span>
                    <span className="text-gray-600 text-sm font-bold">16 July 2026</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Applications close:</span>
                    <span className="text-[#D82F27] text-sm font-bold">8 July 2026</span>
                  </div>
                  {/*<div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Program fee:</span>
                    <span className="text-gray-600 text-sm">[Insert fee] — a committed investment in your professional formation</span>
                  </div>*/}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 — What You Walk Away With */}
        <section className="bg-white py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-accent text-[#1A1A1A] font-bold mb-6 inline-block" style={{ fontSize: "2rem" }}>
                What completion delivers
              </h2>
              <p className="text-gray-600 text-lg">
                CLP participants who complete the program receive four things that go with them into every professional context beyond CLCN.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="p-6 border-l-4 border-[#009FE6] bg-gray-50">
                <h3 className="font-bold text-lg mb-3">Professional Identity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A clear, grounded, evidence-based sense of who you are professionally, and clearer language to explain who you are and where you are going.
                </p>
              </div>
              <div className="p-6 border-l-4 border-[#FC5328] bg-gray-50">
                <h3 className="font-bold text-lg mb-3">Portfolio</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A portfolio of real, credited work produced during CLP, including content, projects, and deliverables that you created and that carry your name.
                </p>
              </div>
              <div className="p-6 border-l-4 border-[#D82F27] bg-gray-50">
                <h3 className="font-bold text-lg mb-3">Track Record</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A professional track record in the Australian context, including real referees who can speak to your capability, contribution, and conduct from direct experience.
                </p>
              </div>
              <div className="p-6 border-l-4 border-[#009FE6] bg-gray-50">
                <h3 className="font-bold text-lg mb-3">Ecosystem Access</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Integration into CLCN's employer community. This includes ongoing access to networking initiatives, the Employment Forum, and invitation-only corporate member events.
                </p>
              </div>
            </div>

            <div className="bg-[#D82F27]/10 border border-[#D82F27]/20 rounded-sm p-8 text-center flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div>
                <h4 className="text-xl font-bold text-[#1A1A1A] mb-2" style={{ textAlign: 'left' }}>Ready to apply?</h4>
                <p className="text-gray-700">Applications for CLP Cohort 1 close 8 July 2026.</p>
              </div>
              <Link href="/contact?ref=clp" className="px-8 py-3 rounded-sm text-white font-bold uppercase transition-colors duration-200 shadow-md flex-shrink-0" style={{ backgroundColor: "#D82F27" }}>
                Apply Now
              </Link>
            </div>
          </div>
        </section>

        {/* Section 7 — Selection Criteria */}
        <section className="bg-[#F9F7F5] py-20">
          <div className="container">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
              <div className="lg:w-1/3">
                <img src={TEAM_IMG} alt="CLCN Team" className="w-full h-[500px] object-cover rounded-sm shadow-lg sticky top-8" />
              </div>
              <div className="lg:w-2/3">
                <h2 className="heading-accent text-[#1A1A1A] font-bold mb-6" style={{ fontSize: "2rem" }}>
                  How participants are selected
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  CLP participants are selected, not enrolled. The program works because everyone in it is ready to contribute, committed to growing, and prepared to be held to professional standards from day one. The selection process exists not to restrict access but to ensure that every participant enters CLP ready to benefit fully and to contribute genuinely to the team around them.
                </p>

                <h3 className="text-xl font-bold mb-6">Applications are assessed across six criteria:</h3>
                <div className="space-y-4 mb-10">
                  <div className="bg-white p-5 rounded-sm shadow-sm flex items-start gap-4">
                    <CheckCircle className="text-[#009FE6] shrink-0 mt-0.5" size={20} />
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">Growth mindset</span>
                      <span className="text-gray-600 text-sm block">the openness to develop, be challenged, and improve</span>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-sm shadow-sm flex items-start gap-4">
                    <CheckCircle className="text-[#009FE6] shrink-0 mt-0.5" size={20} />
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">Maturity</span>
                      <span className="text-gray-600 text-sm block">the ability to navigate professional environments with self-awareness and responsibility</span>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-sm shadow-sm flex items-start gap-4">
                    <CheckCircle className="text-[#009FE6] shrink-0 mt-0.5" size={20} />
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">Integrity</span>
                      <span className="text-gray-600 text-sm block">consistency between what you say and what you do</span>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-sm shadow-sm flex items-start gap-4">
                    <CheckCircle className="text-[#009FE6] shrink-0 mt-0.5" size={20} />
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">Consistency</span>
                      <span className="text-gray-600 text-sm block">reliability in showing up and following through</span>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-sm shadow-sm flex items-start gap-4">
                    <CheckCircle className="text-[#009FE6] shrink-0 mt-0.5" size={20} />
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">Effective communication</span>
                      <span className="text-gray-600 text-sm block">the ability to express yourself clearly and listen actively across cultural and professional contexts</span>
                    </div>
                  </div>
                  <div className="bg-white p-5 rounded-sm shadow-sm flex items-start gap-4">
                    <CheckCircle className="text-[#009FE6] shrink-0 mt-0.5" size={20} />
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">Ability to deliver</span>
                      <span className="text-gray-600 text-sm block">the demonstrated willingness and capacity to complete what you commit to</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1A1A1A] text-white p-6 rounded-sm border-l-4 border-[#FC5328]">
                  <p className="text-sm md:text-base leading-relaxed">
                    Selection is not based on duration in Australia, employment status, or country of origin. It is based on mindset, character, and readiness. If you recognise yourself in the six criteria above, this program was built for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 — The Track Record */}
        <section className="bg-white py-20">
          <div className="container max-w-4xl text-center">
            <h2 className="heading-accent text-[#1A1A1A] font-bold mb-8 inline-block" style={{ fontSize: "2rem" }}>
              What the evidence shows
            </h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed text-left">
              <p className="mb-6">
                CLCN's approach to professional formation has been tested and refined through years of sustained delivery. Across the organisation, volunteers engage in real work across different functional areas — the same formation model that CLP is built on. The results speak for themselves.
              </p>
              
              <div className="my-10 p-8 bg-gray-50 border border-gray-100 rounded-sm text-center shadow-sm">
                <div className="text-5xl font-black text-[#D82F27] mb-2">~90%</div>
                <div className="text-xl font-bold text-gray-900 mb-4">Conversion Rate</div>
                <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                  Of CLCN's active volunteers who are actively seeking employment, approximately 50 individuals, more than 40 have secured full-time roles relevant to their field within 8 months of active involvement — from July 2025 to date.
                </p>
              </div>

              <p className="mb-6">
                That is a conversion rate of close to 90%. Not through luck or volume, but through the same structured, immersive, contribution-based environment that CLP delivers in a 13-week program.
              </p>
              <p>
                CLP is the structured, condensed version of that formation model. Designed to deliver in 13 weeks what the volunteer community builds over a longer arc. CLP graduates will enter the job market with the same professional foundation, the same demonstrated capability, and the same track record that has consistently converted formation into employment for those who have come before them.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9 — Frequently Asked Questions */}
        <section className="bg-[#F9F7F5] py-20">
          <div className="container max-w-3xl">
            <h2 className="heading-accent text-[#1A1A1A] font-bold mb-10 text-center" style={{ fontSize: "2rem" }}>
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-sm shadow-sm border border-gray-100">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-semibold text-gray-900">
                    {faq.q}
                    <span className="transition group-open:rotate-180">
                      <ChevronDown size={20} className="text-gray-400" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10 — Final Application CTA */}
        <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#D82F27" }}>
          <div className="absolute inset-0 dot-grid-bg opacity-20" />
          <div className="relative container text-center max-w-3xl">
            <h2 className="text-white font-bold mb-6" style={{ fontSize: "2.5rem" }}>
              Applications for CLP Cohort 1 are now open.
            </h2>
            <p className="text-red-100 text-lg mx-auto mb-10">
              This is the professional formation environment most people never get access to. 13 weeks. Real contribution. Real outcomes. If you recognise yourself in what this program offers, the next step is an application.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-sm inline-block border border-white/20 mb-8">
              <p className="text-white font-semibold text-lg">
                Applications close 8 July 2026. Cohort 1 begins 16 July 2026.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/contact?ref=clp" 
                className="px-10 py-4 rounded-sm text-[#D82F27] bg-white font-black tracking-wide uppercase transition-transform hover:-translate-y-1 duration-200 text-lg shadow-xl"
              >
                Apply Now
              </Link>
            </div>
            
            <p className="text-white/80 mt-10 text-sm font-medium">
              Have a question first? Email us at <a href="mailto:info@clcn.com.au" className="underline hover:text-white transition-colors">info@clcn.com.au</a>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}