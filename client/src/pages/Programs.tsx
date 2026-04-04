/* =============================================================
   CLCN Programs Page - Employability, Social Cohesion portfolios
   
   HOW TO EDIT:
   - Hero image: Change HERO_IMG URL at top of file
   - Program sections: Each program has its own section with an id
   - To update a program: Find its section by id and edit text
   - To add event links: Add links within program descriptions
   
   Typography: Poppins (headings) | Calibri (body)
   Brand colours: Red #D82F27 | Blue #009FE6 | Orange #FC5328
   ============================================================= */
import { Link } from "wouter";
import { useState } from "react";
import { ArrowRight, Heart, Briefcase, Music, MapPin, Mic, Calendar, Podcast, Users, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Photo albums for each portfolio */
const socialCohesionPhotos = [
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/mmexport1694852299014_a6af8fb6.jpg", caption: "CLCN community members at a social cohesion event" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/DSC00086_595816d0.JPG", caption: "BBQ team building — bringing the community together" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/DSC00091_f63fd9c3.JPG", caption: "Outdoor community gathering" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/DSC00080_b765a354.JPG", caption: "CLCN volunteers at a community event" },
];

const employabilityPhotos = [
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/PXL_20240309_005619513.MP_d4965c13.jpg", caption: "Professional networking and boardroom engagement" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/Copy_of__DSC5355_018d6003.jpg", caption: "CLCN employability event — group photo" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/DSC01566_39a00f2a.JPG", caption: "CLCN volunteers representing the organisation" },
];

const gtiPhotos = [
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/PXL_20240309_005619513.MP_d4965c13.jpg", caption: "GTI boardroom session — professional development" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/DSC01490_a52f658b.JPG", caption: "CLCN volunteers at an outdoor event" },
];

function PhotoAlbum({ photos, title }: { photos: { src: string; caption: string }[]; title: string }) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <Camera size={16} className="text-[#D82F27]" />
        <h4 className="font-bold text-sm text-[#1A1A1A] uppercase tracking-wider">
          {title}
        </h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightboxIdx(i)}
            className="relative group overflow-hidden rounded-sm aspect-[4/3] cursor-pointer"
          >
            <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">View</span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightboxIdx(null)}>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx(null); }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X size={28} />
          </button>
          {photos.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx - 1 + photos.length) % photos.length); }}
                className="absolute left-4 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIdx((lightboxIdx + 1) % photos.length); }}
                className="absolute right-4 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight size={36} />
              </button>
            </>
          )}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={photos[lightboxIdx].src} alt={photos[lightboxIdx].caption} className="max-w-full max-h-[75vh] object-contain rounded-sm" />
            <p className="text-white text-sm mt-3 text-center">{photos[lightboxIdx].caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const PROGRAMS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/DSC01566_39a00f2a.JPG";

const COMMUNITY_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/mmexport1694852299014_a6af8fb6.jpg";

const socialCohesionPrograms = [
  {
    id: "art-culture",
    icon: Music,
    title: "Art & Culture Club",
    subtitle: "Wellbeing through Artistic Creativity, Expression, and Cultural Exchange",
    description:
      "The Art & Culture Club provides a welcoming platform for participants to enhance wellbeing through creative expression and cultural exploration. The program supports participants to increase positive emotions through artistic and cultural activities, experience deep engagement and flow through creativity, express identity authentically in a safe and inclusive environment, and build meaningful relationships across cultures.",
    outcomes: ["Positive Emotion", "Engagement", "Relationships", "Meaning"],
  },
  {
    id: "welfare",
    icon: Heart,
    title: "Welfare, Wellbeing & Social Club",
    subtitle: "Belonging, Connection, and Everyday Wellbeing",
    description:
      "The Welfare, Wellbeing & Social Club focuses on social connection optimisation, belonging, and everyday wellbeing by encouraging consistent participation in community-based wellbeing activities within a safe and inclusive environment.",
    outcomes: ["Relationships", "Positive Emotion", "Physical Activity", "Meaning"],
    subPrograms: [
      {
        title: "Australia, Home Away From Home Podcast",
        description:
          "Designed for people who are planning to study, live, or migrate to Australia, as well as those who are new to Australia or supporting family members already here. Delivered in multilingual format.",
      },
      {
        title: "Sunday Morning Walks",
        description:
          "Sunday Morning Walks operate weekly (every Sunday, 9:30 a.m.–11:30 a.m.), starting and finishing at the CLCN office. Different routes and locations are planned each week, encouraging participants to explore the local city and surrounding communities. Register: https://events.humanitix.com/clcn-sunday-walks-the-sunday-stroll-society-where-steps-spark-stories-j67crycg",
      },
    ],
  },
  {
    id: "navigate-thrive",
    icon: MapPin,
    title: "Navigate & Thrive Program",
    subtitle: "Safety, Understanding, and Confidence in Australia",
    description:
      "The Navigate & Thrive Program supports participants to understand their rights and entitlements and to confidently navigate Australia's legal, social, safety, and health systems, enabling them to make informed decisions and live with greater confidence in their environment.",
    outcomes: ["Meaning", "Positive Emotion", "Accomplishment", "Engagement"],
  },
  {
    id: "annual-events",
    icon: Calendar,
    title: "Annual Events",
    subtitle: "Inclusion, Collaboration, and Community",
    description:
      "The Annual Events program represents CLCN's flagship expression of social cohesion, bringing together the full breadth of the CLCN ecosystem — students, graduates, skilled migrants, volunteers, sponsors, and government representatives.",
    outcomes: ["Meaning", "Accomplishment", "Relationships", "Positive Emotion"],
    subPrograms: [
      {
        title: "Annual General Meeting (AGM)",
        description:
          "Brings together board members, advisory board members, volunteers, sponsors, and government representatives as both a governance milestone and a shared community occasion.",
      },
      {
        title: "Annual Welcome Party",
        description:
          "A warm, inclusive celebration designed for invited tertiary students (international and domestic) and the CLCN community. Serves as a key introduction to CLCN.",
      },
    ],
  },
];

const employabilityPrograms = [
  {
    id: "networking",
    icon: Users,
    title: "CLCN N+1 Networking Initiative",
    subtitle: "Quality attracts quality.",
    description:
      "The N+1 Networking Initiative supports participants to build, sustain, and grow professional relationships in authentic, low-pressure environments. Rather than focusing on immediate recruitment outcomes, the initiative creates space for relationship-first engagement.",
    outcomes: ["Professional Confidence", "Network Building", "Social Capital", "Visibility"],
  },
  {
    id: "employment-forum",
    icon: Briefcase,
    title: "Employment Forum",
    subtitle: "Distilled wisdom is adaptable.",
    description:
      "A structured employer engagement platform that brings together businesses, corporates, and organisations with tertiary international and domestic students, graduates, early-career professionals, and skilled migrants. The forum operates as a featured career engagement event, similar to a focused Career Mini-Expo.",
    outcomes: ["Employer Engagement", "Career Pathway Insight", "Professional Presence", "Confidence"],
  },
  {
    id: "public-speaking-emp",
    icon: Mic,
    title: "Workplace Communication & Public Speaking Club",
    subtitle: "CLCN develops context carriers.",
    description:
      "The Workplace Communication & Public Speaking Club strengthens participants' ability to communicate clearly, confidently, and appropriately in professional settings. The program builds awareness of Australian workplace communication styles, expectations, and professional norms.",
    outcomes: ["Communication Skills", "Leadership Presence", "Professional Identity", "Confidence"],
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page header */}
        <section className="relative h-64 overflow-hidden">
          <img src={PROGRAMS_IMG} alt="CLCN Programs" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <h1
                className="text-white font-black"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Programs
              </h1>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-14">
          <div className="container max-w-3xl">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              The CLCN Activity team delivers CLCN's core programs through three integrated portfolios that support tertiary international and domestic students, graduates, skilled migrants, and early-career professionals from both culturally diverse and local backgrounds.
            </p>
            <div className="pull-quote">
              Knowledge → Application → Experience → Supported Responsibility → Repeatable Capability → Mastery
            </div>
          </div>
        </section>

        {/* Social Cohesion Portfolio */}
        <section id="social-cohesion" className="bg-[#F9F7F5] py-16">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-10 items-start mb-12">
              <div className="lg:w-1/2">
                <h2
                  className="heading-accent text-[#1A1A1A] font-black mb-4"
                  style={{ fontSize: "2rem" }}
                >
                  Social Cohesion Portfolio
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Building Wellbeing, Resilience, and Social Cohesion. The Social Cohesion Portfolio supports people aged 18 and above — including tertiary international and domestic students, graduates, skilled migrants, young professionals, and expats — to increase resilience, wellbeing, and social cohesion.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The portfolio is grounded in the PERMA+ wellbeing framework, incorporating Positive Emotion, Engagement, Relationships, Meaning, and Accomplishment, alongside Physical Activity, Nutrition, and Sleep.
                </p>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={COMMUNITY_IMG}
                  alt="Social Cohesion"
                  className="w-full h-56 object-cover rounded-sm shadow"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {socialCohesionPrograms.map((prog) => (
                <div key={prog.id} id={prog.id} className="program-card">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-[#D82F27] rounded-sm flex items-center justify-center flex-shrink-0">
                      <prog.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <h3
                        className="font-black text-[#1A1A1A] text-base leading-tight"
                       
                      >
                        {prog.title}
                      </h3>
                      <p className="text-[#D82F27] text-xs font-semibold italic">{prog.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{prog.description}</p>
                  {prog.subPrograms && (
                    <div className="space-y-2 mb-3">
                      {prog.subPrograms.map((sub, idx) => {
                        // Generate anchor IDs for sub-programs
                        let subId = "";
                        if (prog.id === "annual-events") {
                          subId = idx === 0 ? "agm" : "welcome-party";
                        } else if (prog.id === "welfare") {
                          subId = idx === 0 ? "podcast" : "sunday-walks";
                        }
                        return (
                          <div key={sub.title} id={subId} className="bg-[#F9F7F5] p-3 rounded-sm border-l-2 border-[#D82F27]">
                            <div className="font-bold text-xs text-[#1A1A1A] mb-1">
                              {sub.title}
                            </div>
                            <p className="text-gray-500 text-xs leading-relaxed">{sub.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {prog.outcomes.map((o) => (
                      <span
                        key={o}
                        className="text-xs px-2 py-0.5 rounded-full border border-[#D82F27] text-[#D82F27] font-semibold"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <PhotoAlbum photos={socialCohesionPhotos} title="Social Cohesion Gallery" />
          </div>
        </section>

        {/* Employability Portfolio */}
        <section id="employability" className="bg-white py-16">
          <div className="container">
            <div className="mb-10">
              <h2
                className="heading-accent text-[#1A1A1A] font-black mb-4"
                style={{ fontSize: "2rem" }}
              >
                Employability Portfolio
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl">
                Confidence, Networks, and Career Navigation. The Employability Portfolio focuses on the human infrastructure of employability — communication, relationships, networks, and confidence — rather than treating careers as a purely transactional outcome. CLCN develops professionals who can operate, lead, and take responsibility in complex human systems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {employabilityPrograms.map((prog) => (
                <div key={prog.id} id={prog.id} className="program-card blue-accent">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-[#009FE6] rounded-sm flex items-center justify-center flex-shrink-0">
                      <prog.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <h3
                        className="font-black text-[#1A1A1A] text-sm leading-tight"
                       
                      >
                        {prog.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#009FE6] text-xs font-bold italic mb-2">{prog.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{prog.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.outcomes.map((o) => (
                      <span
                        key={o}
                        className="text-xs px-2 py-0.5 rounded-full border border-[#009FE6] text-[#009FE6] font-semibold"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <PhotoAlbum photos={employabilityPhotos} title="Employability Gallery" />
          </div>
        </section>

        {/* GTI CTA */}
        <section className="bg-[#D82F27] py-14">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2
                className="text-white font-black text-2xl"
               
              >
                Global Talent Incubator (GTI)
              </h2>
              <p className="text-red-100 mt-2 max-w-xl">
                CLCN's advanced development portfolio for professionals-in-formation progressing toward CLCN Graduate status.
              </p>
            </div>
            <Link href="/global-talent-incubator" className="btn-clcn-primary whitespace-nowrap">
              Learn About GTI
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
