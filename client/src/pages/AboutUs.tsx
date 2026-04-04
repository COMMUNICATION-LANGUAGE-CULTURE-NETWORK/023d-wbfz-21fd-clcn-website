/* =============================================================
   CLCN About Us Page - Identity, Mission, Vision, Values, Team
   
   HOW TO EDIT:
   - What is CLCN: Update description paragraphs
   - Mission and Vision: Edit text in the respective cards
   - Values: Edit the values array (Inclusion, Collaboration, Community)
   - Team members: Edit the teamMembers object at the top of the file
     Each member: { name, title, photo (CDN URL), bio (array of paragraphs) }
     Categories: boardOfDirectors, advisoryBoard, consultingCommittee
   - To add a new team member: Add an entry to the appropriate array
   - To update a photo: Replace the CDN URL string
   
   TEAM HIERARCHY (per CLCN Glossary):
   - Board of Directors: Governance oversight
   - Advisory Board: Strategic advisors
   - Consulting Committee: Specialist consultants
   
   Typography: Poppins (headings) | Calibri (body)
   Brand colours: Red #D82F27 | Blue #009FE6 | Orange #FC5328
   ============================================================= */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Team Data ─────────────────────────────────────────────── */
const boardOfDirectors = [
  {
    name: "William Li",
    title: "Chairperson & Managing Director",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/WilliamLiBio_8430025a.jpg",
    featured: true,
    bio: [
      "William Li is the Founder, Chairperson and Managing Director of the Communication, Language & Culture Network (CLCN), an ACNC-registered, volunteer-run not-for-profit that develops life-ready and career-ready individuals across a diverse and emerging talent ecosystem. Through CLCN, a global talent incubator, he bridges education, employability development, community integration and real-world industry, supporting participants to build applied capability, professional responsibility and mastery to contribute meaningfully to an increasingly global talent market.",
      "William is also the President of the Australia–China Young Professionals Initiative (ACYPI) South Australia — one of ACYPI's nine chapters across Australia and China — for the 2026–2028 term. In this role, he leads the South Australian chapter's mission to connect and empower early- to mid-career professionals engaged in Australia–China relations, strengthening people-to-people ties through purposeful networking, collaboration and professional development.",
      "Beyond CLCN and ACYPI, William is the Managing Director of K Plus Human Resources and formerly served as a Director of Stanic Australia, a global anti-counterfeit technology provider. He contributes to national sector insights as an Advisory Board Member of the International Student Wellbeing Network (ISWN) and as a Field Research Consultant with the Cultural & Indigenous Research Centre Australia (CIRCA).",
      "Working at the intersection of business, industry, education and community, William advances intercultural understanding and champions inclusive leadership within Australia's increasingly diverse and globally connected workforce.",
    ],
  },
  {
    name: "Edmund Ng",
    title: "Board Member",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/EdmundNG_e9786d97.jpg",
    featured: false,
    bio: [
      "Edmund Ng is an Australian Chinese lobbyist and Australia/New Zealand Skincare/Healthcare products export specialist in connecting people and export businesses in China, Hong Kong SAR and Macau. Currently Edmund represents Birks Chemists Pharmacy Group and Priceline Churchill Centre Pharmacy for the Chinese market services.",
      "Edmund has been involved in various international projects such as the Giant Panda Australia Delivery Program and Guang Zhou Jiangnan Fruit and Vegetable Wholesale Market Co. Ltd. He is currently a Justice of The Peace in South Australia, a member of the Royal Justice of the Peace Association, and a Member of the Overseas Chinese International Culture Exchange Promotion Association, China.",
    ],
  },
  {
    name: "Get Sen Ngo",
    title: "Board Member",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/GetSenNgo_c9432a1c.jpg",
    featured: false,
    bio: [
      "Get Sen came to Australia from Malaysia in 1970 and graduated from Adelaide University with a B.Sc (Hons) and MBA. Get Sen is experienced in strategic planning, finance and implementation matters with respect to business development and operation, with the ability to communicate and build trust and credibility with management and employees at all levels.",
      "In addition to business activities, Get Sen has been involved in executive committees of industry, community and charity organisations. Get Sen has over 30 years of executive experience in corporate and industry organisations and has negotiated and finalised MOUs, agreements, contracts and funding with major corporations in Australia and overseas.",
    ],
  },
];

const advisoryBoard = [
  {
    name: "Jimmy Gao",
    title: "Strategic Advisor",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/JimmyGao_32f67339.jpg",
    featured: false,
    bio: [
      "Jimmy Gao is a corporate banking professional with over 15 years of experience in financial services, specialising in the Healthcare, Retirement Living, and Aged Care sectors. He currently serves as Associate Director, Corporate Health SA at National Australian Bank (NAB), a role he has held since January 2021, leading business development and client acquisition across the South Australian healthcare market.",
      "Prior to NAB, Jimmy held progressive roles at Bendigo and Adelaide Bank, including Business Development Manager for Retirement Living & Aged Care SA/NT and Business Banking Manager. He also served as Analyst/Account Manager in Corporate Health SA/NT at Commonwealth Bank, with earlier career roles in aged care financial services at Aged & Community Services SA/NT, Alzheimer's Australia SA, and CanDo4Kids.",
      "Jimmy holds a Master of Accounting & Finance from the University of Adelaide and a Bachelor of Accounting & Finance from Wuhan University. He holds ASIC RG146 accreditation in Financial Planning. Jimmy brings deep expertise in strategic planning, healthcare sector relationship management, and financial analysis to CLCN's Advisory Board.",
    ],
  },
  {
    name: "Dr. Evelyn Yap OAM",
    title: "Strategic Advisor",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/EvelynYap_dc353c1a.jpg",
    featured: true,
    bio: [
      "Dr. Evelyn Yap, OAM, OSJ, brings over 30 years of distinguished medical expertise and community leadership to her role as CLCN Advisory Board Member. A highly regarded Partner at Benson Radiology, she also holds senior positions at The Queen Elizabeth Hospital and BreastScreen SA. She is a Fellow of RANZCR and Fellow of the Australasian Association of Nuclear Medicine Specialists.",
      "Passionate about community service and the arts, Dr. Yap serves as a Trustee of the Adelaide Festival Centre Trust, a Board Member of the Women and Children Hospital Foundation, a Board Member of the Australian Migrant Resource Centre, President of the Australia Malaysia Business Council SA, and Chair of the Council of Migrant and Refugee Women.",
      "Recognized for her exceptional contributions, she was awarded the Medal of the Order of Australia in 2023 for her outstanding service to medicine, multiculturalism, and the community and inducted as an Officer of the Order of St John in 2025.",
    ],
  },
];

const consultingCommittee = [
  {
    name: "Janice Lee-Fu",
    title: "Advisor, Consulting Committee",
    photo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/janiceheadshot_5d13018d.jpg",
    featured: true,
    bio: [
      "Janice Lee-Fu is a senior marketing and commercial executive with a proven track record of leading transformational growth across B2C and B2B product-led lifecycle businesses.",
      "Holding leadership positions in FMCG, Consumer Goods, Health and Wellness and Not-for-Profit (retail and e-commerce), Janice brings deep expertise in commercial marketing, innovation, and organisational change. Janice has successfully led business strategy, transformation, and portfolio growth programs, including M&A integration, market entry, and customer experience innovation in Private Equity and Founder-led business'.",
      "She currently leads a Fractional advisory, where she partners with business' to scale growth through agile innovation, strategic planning, and marketing capability uplift. Janice also teaches at Monash Business School, where she coaches future leaders on marketing strategy and insights, Not-For-Profit Marketing, Agile Innovation, and Business coaching (Marketing Internship).",
    ],
  },
];

/* ── Expandable Bio Component ──────────────────────────────── */
function PersonCard({
  person,
  accentColor = "#D82F27",
}: {
  person: (typeof boardOfDirectors)[0];
  accentColor?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasBio = person.bio.length > 0;
  const hasPhoto = person.photo !== "";

  if (person.featured && hasBio) {
    return (
      <div className="bg-white rounded-sm border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-48 flex-shrink-0">
            {hasPhoto ? (
              <img
                src={person.photo}
                alt={person.name}
                className="w-full h-56 sm:h-full object-cover object-top"
              />
            ) : null}
          </div>
          <div className="p-6 flex-1">
            <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">{person.name}</h4>
            <p className="text-sm font-medium mb-4" style={{ color: accentColor }}>
              {person.title}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">{person.bio[0]}</p>
            {person.bio.length > 1 && (
              <>
                {expanded && (
                  <div className="mt-3 space-y-3">
                    {person.bio.slice(1).map((para, i) => (
                      <p key={i} className="text-gray-600 text-sm leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-3 text-sm font-semibold inline-flex items-center gap-1 transition-colors"
                  style={{ color: accentColor }}
                >
                  {expanded ? "Show Less" : "Read More"}
                  <ArrowRight
                    size={14}
                    className="transition-transform"
                    style={{ transform: expanded ? "rotate(-90deg)" : "rotate(90deg)" }}
                  />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Compact card for non-featured members
  return (
    <div className="text-center group">
      <div className="w-32 h-32 mx-auto mb-4 rounded-sm overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300">
        {hasPhoto ? (
          <img
            src={person.photo}
            alt={person.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: "#F5F1EB" }}
          >
            <span className="text-gray-400 text-xs font-medium">Photo<br />Coming Soon</span>
          </div>
        )}
      </div>
      <h4 className="font-bold text-[#1A1A1A] text-sm mb-0.5">{person.name}</h4>
      <p className="text-gray-500 text-xs">{person.title}</p>
      {hasBio && person.bio.length > 0 && (
        <p className="text-gray-500 text-xs mt-2 leading-relaxed max-w-xs mx-auto">{person.bio[0]}</p>
      )}
    </div>
  );
}

/* ── Page Component ────────────────────────────────────────── */
export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* Page header */}
        <section className="bg-[#D82F27] py-16">
          <div className="container">
            <h1 className="text-white font-bold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              About CLCN
            </h1>
            <p className="text-red-100 max-w-2xl text-lg">
              Communication Language &amp; Culture Network — an ACNC-registered not-for-profit operating as human capability infrastructure within local, national, and global talent systems.
            </p>
          </div>
        </section>

        {/* Identity Snapshot */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                  <h2 className="heading-accent text-[#1A1A1A] font-bold mb-6" style={{ fontSize: "2rem" }}>
                  What is CLCN?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  CLCN is an ACNC-registered Australian not-for-profit organisation operating as a human capability infrastructure model within local, national, and global talent systems.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  CLCN occupies a structurally unassigned developmental layer between formal education and sustained professional contribution. Education systems confer qualifications and technical knowledge. Industry requires applied maturity, responsibility, and professional identity. The developmental bridge between these stages remains largely unstructured across existing mandates. CLCN addresses this systemic gap.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in South Australia in 2018, CLCN operates as a psychologically safe, values-aligned, multicultural community environment in which applied capability, accountability, and professional identity are intentionally developed through structured exposure to responsibility and contribution.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  CLCN functions as enduring infrastructure. Participants are embedded within a defined developmental progression that cultivates life readiness, career readiness, and sustained contribution capacity. Employment outcomes emerge as a natural outcome of integrated human capability formation.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-[#D82F27] text-white p-8 rounded-sm">
                  <div className="text-red-100 text-xs font-bold uppercase tracking-widest mb-6">Est. 2018</div>
                  {/* Key Facts */}
                  <div className="space-y-3">
                    {[
                      "South Australia",
                      "ABN 90 645 606 631",
                      "3 Integrated Portfolios",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-red-100">
                        <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-[#F9F7F5] py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-sm border border-gray-200">
                <h2 className="heading-accent text-[#1A1A1A] font-bold mb-5" style={{ fontSize: "1.5rem" }}>
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  CLCN's mission is to form mature, life-ready and career-ready individuals — grounded in inclusion, collaboration, and community — through the structured development of applied capability, responsibility, and contribution, bridging the structural gap between education, professional identity formation, community integration, and industry within local, national, and global talent systems.
                </p>
              </div>
              <div className="bg-white p-8 rounded-sm border border-gray-200">
                <h2 className="heading-accent text-[#1A1A1A] font-bold mb-5" style={{ fontSize: "1.5rem" }}>
                  Our Vision
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  CLCN envisions a trusted, community-embedded human capability infrastructure that strengthens local, national, and global talent systems — where individuals develop mature personal and professional identity and applied capability, and where employers engage with confidence within a high-trust, high-quality ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="values" className="bg-white py-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="heading-accent text-[#1A1A1A] font-bold inline-block" style={{ fontSize: "2rem" }}>
                Our Values
              </h2>
              <p className="text-gray-500 mt-4 text-sm">
                These founding values have shaped CLCN since the beginning.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  value: "Inclusion",
                  id: "value-inclusion",
                  colour: "#D82F27",
                  description:
                    "We welcome everyone who shares our mission — regardless of culture, race, gender, religion, age, language, or background. Many of our long-term volunteers have been with us since 2018, joined by others who align with our values and purpose.",
                },
                {
                  value: "Collaboration",
                  id: "value-collaboration",
                  colour: "#009FE6",
                  description:
                    "We believe in co-creating value and building lasting impact — not just forming transactional relationships. At CLCN, we take pride in creating something meaningful from nothing, together as a team.",
                },
                {
                  value: "Community",
                  id: "value-community",
                  colour: "#FC5328",
                  description:
                    "To us, community means continuous value creation and exchange. Imagine a group of 52 professionals — each week, one shares their insights. By year's end, each person has shared once but gained knowledge 51 times. This is the essence of the CLCN community and the foundation of every program we run.",
                },
              ].map((item) => (
                <div
                  key={item.value}
                  id={item.id}
                  className="program-card"
                  style={{ borderTopColor: item.colour }}
                >
                  <div className="font-bold text-xl mb-3" style={{ color: item.colour }}>
                    {item.value}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Structural Gaps */}
        <section className="bg-[#F9F7F5] py-16">
          <div className="container">
            <h2 className="heading-accent text-[#1A1A1A] font-bold mb-4" style={{ fontSize: "2rem" }}>
              The Structural Gap We Address
            </h2>
            <div className="max-w-3xl">
              <p className="text-gray-600 leading-relaxed mb-5">
                CLCN exists because structural gaps persist between education, industry participation, identity formation, and sustained societal contribution within local, national, and global contexts. These gaps are not the result of individual deficiency — they arise from systemic design limitations across education systems, labour markets, community integration structures, and cross-sector governance mandates.
              </p>
              <p className="text-gray-600 leading-relaxed">
                No single institution currently owns the integrated formation of applied capability, mature professional identity, and long-term sustainability within a values-aligned developmental environment. CLCN is designed to occupy this structurally unassigned developmental layer — bridging the gap between formal education and sustained professional contribution.
              </p>
            </div>
          </div>
        </section>

        {/* ── Leadership & Governance ──────────────────────── */}
        <section className="bg-white py-16">
          <div className="container">

            <h2 className="heading-accent text-[#1A1A1A] font-bold mb-4" style={{ fontSize: "2rem" }}>
              Leadership &amp; Governance
            </h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              CLCN is governed by a Board of Directors and Managing Director, supported by an Advisory Board and Consulting Committee. Our leadership team brings together expertise across community development, business, education, health, and multicultural engagement.
            </p>

            {/* Board of Directors */}
            <div className="mb-14">
              <h3 className="font-bold text-[#D82F27] text-sm uppercase tracking-widest mb-8 pb-2" style={{ borderBottom: "2px solid #D82F27" }}>
                Board of Directors
              </h3>

              {/* William Li — Featured */}
              <div className="mb-8">
                <PersonCard person={boardOfDirectors[0]} accentColor="#D82F27" />
              </div>

              {/* Edmund Ng & Get Sen Ngo */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {boardOfDirectors.slice(1).map((person, i) => (
                  <PersonCard key={i} person={person} accentColor="#D82F27" />
                ))}
              </div>
            </div>

            {/* Advisory Board */}
            <div className="mb-14">
              <h3 className="font-bold text-[#009FE6] text-sm uppercase tracking-widest mb-8 pb-2" style={{ borderBottom: "2px solid #009FE6" }}>
                Advisory Board
              </h3>

              <div className="space-y-6">
                {advisoryBoard.map((person, i) => (
                  <PersonCard key={i} person={person} accentColor="#009FE6" />
                ))}
              </div>
            </div>

            {/* Consulting Committee */}
            <div className="mb-10">
              <h3 className="font-bold text-[#FC5328] text-sm uppercase tracking-widest mb-8 pb-2" style={{ borderBottom: "2px solid #FC5328" }}>
                Consulting Committee
              </h3>

              <div className="space-y-6">
                {consultingCommittee.filter(p => p.featured).map((person, i) => (
                  <PersonCard key={i} person={person} accentColor="#FC5328" />
                ))}
              </div>

              {/* Non-featured members */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                {consultingCommittee.filter(p => !p.featured).map((person, i) => (
                  <PersonCard key={i} person={person} accentColor="#FC5328" />
                ))}
              </div>
            </div>

            {/* Org chart download CTA */}
            <div className="bg-[#FAF8F5] rounded-sm p-6 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-600 text-sm">
                Download the full CLCN Organisational Chart (External Version) from our Resources page.
              </p>
              <Link href="/resources#org-chart" className="btn-clcn-primary whitespace-nowrap">
                Download Org Chart
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#D82F27] py-14">
          <div className="container text-center">
            <h2 className="text-white font-bold text-2xl mb-4">
              Ready to Join the CLCN Community?
            </h2>
            <p className="text-red-100 mb-6 max-w-xl mx-auto">
              Explore our programs, volunteer opportunities, and upcoming events.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/programs" className="btn-clcn-outline" style={{ color: "white", borderColor: "white" }}>
                Our Programs
              </Link>
              <Link href="/opportunities" className="bg-white text-[#D82F27] font-semibold text-sm uppercase tracking-wide px-6 py-3 rounded-sm hover:bg-red-50 transition-colors no-underline">
                Get Involved
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
