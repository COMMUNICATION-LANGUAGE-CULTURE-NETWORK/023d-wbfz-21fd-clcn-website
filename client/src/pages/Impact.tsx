/* =============================================================
   CLCN Impact Page - News, Event Highlights, Volunteer Stories,
   Chairmans Message
   
   HOW TO EDIT:
   - Hero image: Change HERO_IMG URL at top of file
   - Stats bar: Edit the stats array (value + label pairs)
   - Impact sections: Edit impactSections array (title, placeholder text)
   - Chairmans Message: Update content in the chairmans-message section
   - CTA: Update call-to-action text and button links
   
   Typography: Poppins (headings) | Calibri (body)
   Brand colours: Red #D82F27 | Blue #009FE6 | Orange #FC5328
   ============================================================= */
import { Link } from "wouter";
import { Newspaper, Play, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/DSC00086_595816d0.JPG";

const impactSections = [
  {
    id: "highlights",
    icon: Play,
    title: "Event Highlights",
    colour: "#FC5328",
    placeholder: "Recaps, photos, and videos from CLCN events will be featured here. Follow us on social media for real-time event coverage.",
  },
  {
    id: "volunteer-stories",
    icon: Users,
    title: "Volunteer & Employment Stories",
    colour: "#D82F27",
    placeholder: "Testimonials and stories from CLCN volunteers, participants, and alumni will be shared here. These stories reflect the real impact of CLCN programs on people's lives and careers.",
  },
];

export default function Impact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative h-64 overflow-hidden">
          <img src={HERO_IMG} alt="CLCN Impact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <h1
                className="text-white font-black"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Impact
              </h1>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#D82F27] py-10">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "300+", label: "Events Hosted" },
                { value: "2018", label: "Founded" },
                { value: "10,000+", label: "Participants" },
                { value: "100+", label: "Active Volunteers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-white font-black text-3xl mb-1"
                   
                  >
                    {stat.value}
                  </div>
                  <div className="text-red-100 text-sm font-semibold uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact sections */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {/* FILL OUT WITH PHOTOS LATER
               impactSections.map((section) => (
                <div key={section.id} id={section.id} className="program-card" style={{ borderTopColor: section.colour }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: section.colour }}
                    >
                      <section.icon size={18} className="text-white" />
                    </div>
                    <h2
                      className="font-black text-[#1A1A1A] text-xl"
                     
                    >
                      {section.title}
                    </h2>
                  </div>
                  <div className="bg-[#F9F7F5] rounded-sm p-6 text-center">
                    <p className="text-gray-500 text-sm italic leading-relaxed">{section.placeholder}</p>
                    <p className="text-gray-400 text-xs mt-3">
                      [Content to be provided by CLCN team]
                    </p>
                  </div>
                </div>
              )) */}
            </div>
          </div>
        </section>

        {/* Chairman's Message */}
        <section id="chairmans-message" className="bg-[#F9F7F5] py-16">
          <div className="container max-w-3xl">
            <h2
              className="heading-accent text-[#1A1A1A] font-black mb-6"
              style={{ fontSize: "2rem" }}
            >
              Chairman's Message
            </h2>
            <div className="bg-white rounded-sm border border-gray-200 p-8">
              <div className="mb-6">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/chairmans_message_photo_2a7ad156.jpeg"
                  alt="William Li, Chairperson and Managing Director, CLCN at the Australian National University"
                  className="w-full h-auto rounded-sm mb-6 shadow-sm"
                />
                <p className="text-gray-700 font-semibold text-lg mb-4">
                  Why CLCN Exists: Supporting the Next Generation of Global Talent
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  By <strong>William Li, Chairperson and Managing Director, CLCN</strong>
                </p>
              </div>
              
              <div className="prose prose-sm max-w-none text-gray-700 space-y-4 leading-relaxed">
                <p>
                  <strong>Why does Communication Language & Culture Network (CLCN) exist?</strong>
                </p>
                <p>
                  <strong>Because employability is not built in isolation.</strong>
                </p>
                <p>
                  For many international students and culturally diverse young people, capability is never the problem. They arrive in Australia with qualifications, motivation, and ambition.
                </p>
                <p>
                  What they often lack is something less visible but just as critical. Confidence in communication. Understanding of workplace culture. Access to safe environments where they can practise, make mistakes, and grow.
                </p>
                <p>
                  <strong>That is why CLCN exists.</strong>
                </p>
                <p>
                  Over the years, I have seen a recurring pattern. Students complete their degrees and achieve strong academic results, yet still feel unprepared to participate confidently in professional environments. They hesitate to speak up, struggle to articulate their strengths, or feel unsure when navigating unfamiliar cultural expectations.
                </p>
                <p>
                  These challenges are not individual failures. They are structural gaps.
                </p>
                <p>
                  <strong>Employability is often reduced to a single question. Did someone get a job?</strong>
                </p>
                <p>
                  In reality, employability is much broader.
                </p>
                <p>
                  It includes communication, teamwork, adaptability, self-confidence, and the ability to represent oneself clearly and professionally. These capabilities are rarely taught explicitly, yet they shape long-term career outcomes.
                </p>
                <p>
                  They are developed through practice, feedback, and participation. Most importantly, they grow in environments that are safe, supportive, and culturally aware.
                </p>
                <p>
                  <strong>That is the role CLCN was created to play!</strong>
                </p>
                <p>
                  At its core, CLCN is a talent incubator. We focus on building systems that allow people to grow gradually, with confidence and support.
                </p>
                <p>
                  As a 100% volunteer-run, Australian Charities and Not-for-profits Commission-registered not-for-profit, our community is built on shared ownership and mutual growth.
                </p>
                <p>
                  <strong>CLCN exists to create the conditions where people can become their most confident and capable selves, together!</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#D82F27] py-14">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2
                className="text-white font-black text-2xl mb-2"
               
              >
                Be Part of Our Story
              </h2>
              <p className="text-gray-300">
                Join CLCN as a volunteer, participant, or sponsor and help us create more impact.
              </p>
            </div>
            <Link href="/opportunities" className="btn-clcn-primary whitespace-nowrap">
              Get Involved
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
