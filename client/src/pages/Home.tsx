/* =============================================================
   CLCN Home Page - Main landing page
   
   HOW TO EDIT:
   - Hero section: Update heading text and subtitle around line ~20
   - Hero image: Change HERO_IMG URL at top of file
   - Statistics: Edit the stats array (value + label pairs)
   - Programs section: Edit program cards (title, description, href)
   - Testimonials: Edit the testimonials array (quote, name, role)
   - CTA section: Update call-to-action text and button links
   
   Typography: Poppins (headings) | Calibri (body)
   Brand colours: Red #D82F27 | Blue #009FE6 | Orange #FC5328
   ============================================================= */
import { Link } from "wouter";
import { ArrowRight, Users, Calendar, Globe, UserCheck, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PROGRAMS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/DSC01566_39a00f2a.JPG";

const GTI_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/PXL_20240309_005619513.MP_d4965c13.jpg";

const COMMUNITY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/mmexport1694852299014_a6af8fb6.jpg";

const stats = [
  { icon: Calendar, value: "300+", label: "Events Hosted" },
  { icon: Users, value: "10,000+", label: "Participants Reached" },
  { icon: Heart, value: "100+", label: "Active Volunteers" },
];

const programs = [
  {
    title: "Employability Portfolio",
    description:
      "Developing applied capability within professional contexts — communication, relationships, networks, and confidence — through the CLCN N+1 Networking Initiative, CLCN Employment Forum, and Workplace Communication & Public Speaking Club.",
    href: "/programs#employability",
    accent: "#009FE6",
  },
  {
    title: "Global Talent Incubator Portfolio",
    description:
      "CLCN's advanced execution layer. Practical mastery within living organisational contexts through the Career Launch Program.",
    href: "/global-talent-incubator",
    accent: "#FC5328",
  },
  {
    title: "Social Cohesion Portfolio",
    description:
      "Stabilising belonging, wellbeing, and cultural integration through Art & Culture Club, Navigate & Thrive Program, Welfare, Wellbeing & Social Club, and Annual Events.",
    href: "/programs#social-cohesion",
    accent: "#D82F27",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[65vh] md:min-h-[75vh] flex items-center py-0 md:py-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/resource-files/CLCN_HOME_HERO.JPG')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          <div className="relative container py-10 z-10">
            <div className="max-w-3xl">
              {/* Eyebrow Label */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gray-300 text-xs font-normal uppercase tracking-wider">
                  Volunteer Led Multicultural Community Since 2018
                </span>
                <div className="w-25 h-[2px] bg-[#D82F27]" />
              </div>

              {/* Main Heading */}
              <h1
                className="text-white font-black mb-6 leading-tight tracking-tight"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 500
                }}
              >
                CLCN - <span >Where <span className="text-[#E30B0F]">potential</span> becomes <span className="text-[#E30B0F]">capability</span></span>
              </h1>

              {/* Description */}
              <p className="text-gray-200 text-xl leading-relaxed mb-10 max-w-2xl font-light">
                Building career-ready global talent through real-world experience, supported responsibility, and meaningful connections in Australia.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-10 mb-8">
                <Link 
                  href="/programs" 
                  className="px-8 py-3 rounded-md text-white font-bold tracking-wide uppercase transition-colors duration-200 text-sm"
                  style={{ backgroundColor: "#D82F27" }}
                >
                  Explore Programs
                </Link>
                <Link 
                  href="/opportunities#volunteer" 
                  className="px-8 py-3 rounded-md text-white font-bold tracking-wide uppercase border-2 border-white bg-black/40 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-200 text-sm"
                >
                  Join the Community
                </Link>
              </div>

              {/* Integrated Bottom Stats Layout */}
              <div className="flex flex-wrap gap-12 sm:gap-16 pt-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col min-w-[120px]" style={{alignItems: 'center'}}>
                    <stat.icon size={36} className="text-[#D82F27] mb-3 stroke-[1.5]" />
                    <div className="text-white font-extrabold text-3xl sm:text-4xl leading-none tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote strip — changed from golden to red/white */}
        <section className="bg-[#D82F27]">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p
                className="text-white font-semibold text-lg italic"
              >
                "The holistic optimisation of the human being is our North Star — our origin, our essence, and our destination."
              </p>
              <Link href="/about" className="btn-clcn-outline whitespace-nowrap" style={{ color: "white", borderColor: "white" }}>
                About CLCN
              </Link>
            </div>
          </div>
        </section>

        {/* Programs Overview — removed "Our Programs" label */}
        <section className="bg-white py-20">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-14 items-start">
              {/* Left: text */}
              <div className="lg:w-5/12">

                <p className="text-gray-600 leading-relaxed mb-8">
                  Explore our three integrated portfolios — Employability, Social Cohesion, and the Global Talent Incubator — designed to support students, graduates, skilled migrants, and early-career professionals in building career-ready and life-ready capabilities.
                </p>
                <Link href="/programs" className="btn-clcn-primary">
                  View All Programs
                  <ArrowRight size={16} />
                </Link>
              </div>
              {/* Right: program cards — alphabetical order */}
              <div className="lg:w-7/12 grid gap-5">
                {programs.map((prog) => (
                  <Link key={prog.href} href={prog.href} className="no-underline">
                    <div
                      className="program-card"
                      style={{ borderTopColor: prog.accent }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3
                            className="font-bold text-[#1A1A1A] text-lg mb-2"
                          >
                            {prog.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {prog.description}
                          </p>
                        </div>
                        <ArrowRight
                          size={20}
                          className="flex-shrink-0 mt-1"
                          style={{ color: prog.accent }}
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Programs image section */}
        <section className="relative h-80 overflow-hidden">
          <img
            src={PROGRAMS_IMG}
            alt="CLCN workshop and programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 container pb-8">
            <p className="text-white text-sm font-semibold uppercase tracking-wide">
              CLCN Programs in Action
            </p>
          </div>
        </section>

        {/* GTI Feature — removed "Featured Portfolio" label */}
        <section className="bg-[#F9F7F5] py-20">
          <div className="container">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="lg:w-1/2">
                <img
                  src={GTI_IMG}
                  alt="Global Talent Incubator"
                  className="w-full h-80 object-cover rounded-sm shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2
                  className="heading-accent text-[#1A1A1A] font-bold mb-4"
                  style={{ fontSize: "2rem" }}
                >
                  Global Talent Incubator
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Global Talent Incubator (GTI) is CLCN's advanced development portfolio, operating within CLCN's activity programs and teams as a living organisational context.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  GTI is not a separate environment. It is embedded within CLCN's Activity programs, operations, and delivery structures, where responsibility, collaboration, judgement, and outcomes are real.
                </p>

                <Link href="/global-talent-incubator" className="btn-clcn-primary">
                  Learn About GTI
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Social Cohesion / Community — removed label */}
        <section className="bg-white py-20">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <img
                  src={COMMUNITY_IMG}
                  alt="CLCN community activities"
                  className="w-full h-80 object-cover rounded-sm shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2
                  className="heading-accent text-[#1A1A1A] font-bold mb-4"
                  style={{ fontSize: "2rem" }}
                >
                  Social Cohesion Portfolio
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Social Cohesion Portfolio establishes the relational, psychological, and wellbeing foundations required for stable capability formation. It embeds structured belonging, interpersonal safety, and both mental and physical wellbeing within a values-aligned community environment.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  From Sunday Morning Walks and Art & Culture Club to the Navigate & Thrive Program, we create structured, repeatable, and inclusive programs that strengthen resilience and foster community connection.
                </p>
                <Link href="/programs#social-cohesion" className="btn-clcn-blue">
                  Explore Social Cohesion
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-[#F9F7F5] py-20">
          <div className="container">
            <div className="text-center mb-12">              <h2 className="heading-accent text-[#1A1A1A] font-bold inline-block" style={{ fontSize: "2rem" }}>
                Testimonials
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "I was impressed by the level of professionalism and efficiency in the organisation as well as the reach CLCN evidently has with students and local businesses. The dedication and unwavering commitment of the CLCN team under the leadership of William Li shines through to provide a platform that promotes the existing cohesion and collaboration between China and South Australia.",
                  name: "Matt Grant",
                  title: "Associate Director, Economic Development & Tourism, City of Adelaide",
                  accent: "#D82F27",
                },
                {
                  quote: "I had an amazing experience interning at CLCN. The team was incredibly welcoming and supportive, and I learned so much during my time there. I felt like my input was valued, and my contributions helped to shape the final event proposals. Overall, my internship at CLCN was an incredibly positive experience that will undoubtedly benefit me as I move forward in my career.",
                  name: "Helen Nip",
                  title: "Graduate, University of South Australia",
                  accent: "#009FE6",
                },
                {
                  quote: "During my placement I felt respected and treated fairly. The project manager & IT manager both showed me a lot of techniques and skills that I can use in future roles. I would recommend CLCN as a place to apply for an internship or a placement, as they are supportive and hard-working.",
                  name: "Isaac Sherry",
                  title: "Bachelor of Information Technology, Flinders University",
                  accent: "#FC5328",
                },
                {
                  quote: "I was invited to the public speaking group in late 2022. I was unsure if I should go at first, but after some convincing, I did. Since attending the group, I have secured a job as a salesman and am thriving in my new position. It is thanks to the public speaking group that I was able to attain the necessary skills.",
                  name: "Sean O'Mahoney",
                  title: "Bachelor of Urban and Regional Planning, Sales Assistant",
                  accent: "#D82F27",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-sm border-l-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ borderLeftColor: t.accent }}
                >
                  <svg className="w-8 h-8 mb-4 opacity-20" fill="currentColor" viewBox="0 0 24 24" style={{ color: t.accent }}>
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-[#1A1A1A] text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{t.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Opportunities CTA */}
        <section
          className="relative py-20 overflow-hidden"
          style={{ backgroundColor: "#D82F27" }}
        >
          <div className="absolute inset-0 dot-grid-bg opacity-20" />
          <div className="relative container text-center">
            <h2
              className="text-white font-bold mb-6"
              style={{ fontSize: "2.5rem" }}
            >
              Be Part of Our Story
            </h2>
            <p className="text-red-100 text-lg max-w-2xl mx-auto mb-10">
              Whether you want to volunteer, collaborate with us, sponsor our programs, or simply attend an event — there's a place for you at CLCN.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/opportunities#volunteer" className="btn-clcn-primary">
                Volunteer with Us
              </Link>
              <Link href="/opportunities#membership" className="btn-clcn-outline" style={{ color: "white", borderColor: "white" }}>
                Corporate Membership
              </Link>
              <Link href="/opportunities#sponsorship" className="btn-clcn-blue">
                Sponsorship
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}