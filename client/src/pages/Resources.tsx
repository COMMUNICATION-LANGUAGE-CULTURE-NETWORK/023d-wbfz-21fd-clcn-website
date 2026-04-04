/* =============================================================
   CLCN Resources Page — Contact-gated downloads
   Org chart (external), Collaboration Framework, Strategic Plan, Branding Deck
   ============================================================= */
import { useState } from "react";
import { Download, FileText, Users, BookOpen, Palette } from "lucide-react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactGateModal from "@/components/ContactGateModal";

interface Resource {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  fileLabel: string;
  colour: string;
  available: boolean;
}

const resources: Resource[] = [
  {
    id: "org-chart",
    icon: Users,
    title: "CLCN Organisational Chart",
    description:
      "The official CLCN Organisational Structure chart (external version), showing the Board of Directors, Managing Director, Advisory Board, and all operational divisions including Activity, External Communication, and Management.",
    fileLabel: "PDF — Organisational Chart (External)",
    colour: "#D82F27",
    available: true,
  },
  {
    id: "collaboration",
    icon: BookOpen,
    title: "Collaboration Framework",
    description:
      "The CLCN Collaboration Framework outlines how CLCN partners with businesses, educational institutions, community organisations, and government bodies to create meaningful opportunities for students and skilled migrants.",
    fileLabel: "PDF — Collaboration Framework",
    colour: "#009FE6",
    available: true
  },
  {
    id: "strategic-plan",
    icon: FileText,
    title: "Strategic Plan for Government",
    description:
      "CLCN's strategic plan outlining our vision, mission, objectives, and approach to government engagement and policy advocacy for international students and skilled migrants in Australia.",
    fileLabel: "PDF — Strategic Plan for Government",
    colour: "#FC5328",
    available: true,
  },
  /*{
    id: "branding-deck",
    icon: Palette,
    title: "Branding Deck",
    description:
      "CLCN's official branding deck including brand guidelines, logo files, colour palette, typography specifications, and usage guidelines for media and partner use.",
    fileLabel: "PPTX — Branding Deck",
    colour: "#D82F27",
    available: true,
  }, */
];

export default function Resources() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [hasSubmittedDetails, setHasSubmittedDetails] = useState(false);

  function handleDownloadClick(resource: Resource) {
    if (!resource.available) {
      alert("This resource is not yet available for download. Please check back soon or contact us at info@clcn.com.au");
      return;
    }
    setSelectedResource(resource);
    if (hasSubmittedDetails) {
      // Directly download without modal
      triggerDownload(resource);
    } else {
      setModalOpen(true);
    }
  }

  function triggerDownload(resource: Resource) {
    const downloadMap: Record<string, { url: string; filename: string }> = {
      "org-chart": {
        url: "../../public/resource-files/CLCN_Organisational_Chart_External_2026_20260309.png",
        filename: "CLCN_Organisational_Chart_External.jpg",
      },
      "strategic-plan": {
        url: "../../public/resource-files/CLCN_Strategic_Plan_2026_Final.pdf",
        filename: "CLCN_Strategic_Plan_2026.pdf",
      },
      /*"branding-deck": {
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323954928/YLKhHPkbCFTCjqMy.pptx",
        filename: "CLCN_Branding_Deck_2026.pptx",
      }, */
      "collaboration": {
        url: "../../public/resource-files/CLCN_Collaboration_Framework_2026.pdf",
        filename: "CLCN_Collaboration_Framework_2026.pdf",
      }
    };
    const dl = resource.id ? downloadMap[resource.id] : null;
    if (dl) {
      const link = document.createElement("a");
      link.href = dl.url;
      link.download = dl.filename;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  function handleFormSubmit(data: { name: string; email: string; phone: string }) {
    // Send email via API
    axios.post('/api/contact', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      interest: "Resource Download",
      subject: "Resource Download",
      message: selectedResource ? `Downloaded resource: ${selectedResource.title}` : "",
    }).then(() => {
      // Trigger download after email is sent
      if (selectedResource) {
        triggerDownload(selectedResource);
      }
      setHasSubmittedDetails(true);
    }).catch((error) => {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page header */}
        <section className="bg-[#D82F27] py-16">
          <div className="container">
            <h1
              className="text-white font-black mb-4"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Resources
            </h1>
            <p className="text-red-100 max-w-2xl">
              Download official CLCN documents, frameworks, and media materials. To access these resources, you will be asked to provide your contact details.
            </p>
          </div>
        </section>

        {/* Resources grid */}
        <section id="downloads" className="bg-white py-16">
          <div className="container">
            <div className="mb-8">
              <h2
                className="heading-accent text-[#1A1A1A] font-black"
                style={{ fontFamily: "Arial, sans-serif", fontSize: "2rem" }}
              >
                Official CLCN Resources
              </h2>
              <p className="text-gray-500 text-sm mt-4 max-w-2xl">
                All downloads require you to provide your name, email address, and phone number. This helps us understand who is accessing our resources and allows us to follow up with relevant opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  id={resource.id}
                  className="program-card"
                  style={{ borderTopColor: resource.colour }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: resource.available ? resource.colour : "#e0ddd9" }}
                    >
                      <resource.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3
                          className="font-black text-[#1A1A1A] text-lg leading-tight"
                          style={{ fontFamily: "Arial, sans-serif" }}
                        >
                          {resource.title}
                        </h3>
                        {!resource.available && (
                          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full whitespace-nowrap font-semibold">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs text-gray-400 font-mono">{resource.fileLabel}</span>
                        <button
                          onClick={() => handleDownloadClick(resource)}
                          className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wide px-4 py-2 rounded-sm transition-colors ${
                            resource.available
                              ? "bg-[#D82F27] text-white hover:bg-[#b82520]"
                              : "bg-gray-100 text-gray-400 cursor-not-allowed"
                          }`}
                          style={{ fontFamily: "Arial, sans-serif" }}
                        >
                          <Download size={14} />
                          {resource.available ? "Download" : "Coming Soon"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          
          </div>
        </section>


      </main>
      <Footer />

      {/* Contact Gate Modal */}
      <ContactGateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        documentTitle={selectedResource?.title || ""}
        documentDescription={selectedResource?.description}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}
