/* =============================================================
   CLCN Events Page - Upcoming events, past events, signature events
   
   HOW TO EDIT:
   - Hero image: Change HERO_IMG URL at top of file
   - Upcoming events: Edit the upcomingEvents array
     Each event: { title, date, time, location, description, image, href }
   - Past events: Edit the pastEvents array (same format)
   - Signature events: Edit the signatureEvents array
   
   Typography: Poppins (headings) | Calibri (body)
   Brand colours: Red #D82F27 | Blue #009FE6 | Orange #FC5328
   ============================================================= */
import { useState } from "react";
import { Link } from "wouter";
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EVENTS_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663323954928/MQjgZLsG6Jz5ukKXctHem3/DSC01490_a52f658b.JPG";

interface CLCNEvent {
  date: string;        // ISO date string YYYY-MM-DD
  title: string;
  time?: string;
  day: string;
  venue?: string;
  notes?: string;
  category: string;
  colour: string;
  registrationUrl?: string;  // External ticketing/registration link
}

const events: CLCNEvent[] = [
  { date: "2026-02-07", title: "Australia, Home Away From Home Podcast", time: "", day: "Saturday", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-02-21", title: "Team Building — New Year Celebration: Dumpling Making / Switch / Movie", time: "15:00–21:00", day: "Saturday", venue: "CLCN Office", category: "Social Cohesion", colour: "#009FE6" },
  { date: "2026-02-22", title: "CLCN In-House Training", time: "15:00–17:00", day: "Saturday", category: "Internal", colour: "#6B7280" },
  { date: "2026-02-24", title: "Navigate & Thrive Program #15", time: "17:30–20:00", day: "Tuesday", category: "Social Cohesion", colour: "#D82F27" },
  { date: "2026-02-26", title: "Workplace Communication & Public Speaking Club", time: "17:30–20:30", day: "Thursday", venue: "MWB", category: "Employability", colour: "#D82F27", registrationUrl: "https://events.humanitix.com/clcn-workplace-communication-and-public-speaking-club-46-public-speaking-persuasion-basics-influence-ethically" },
  { date: "2026-03-01", title: "Art and Culture Club — Postcard Making Workshop at Scape", time: "14:00–16:00", day: "Sunday", venue: "Switch", category: "Social Cohesion", colour: "#FC5328" },
  { date: "2026-03-07", title: "In-House Training — Manager/Team Leaders: Meeting Management", time: "15:00–17:00", day: "Saturday", venue: "CLCN Office", category: "Internal", colour: "#6B7280" },
  { date: "2026-03-11", title: "Workplace Communication & Public Speaking Club", time: "17:30–20:30", day: "Wednesday", venue: "Switch", category: "Employability", colour: "#D82F27" },
  { date: "2026-03-24", title: "Navigate & Thrive Program #16", time: "17:30–20:00", day: "Tuesday", category: "Social Cohesion", colour: "#D82F27" },
  { date: "2026-03-26", title: "Employment Forum 1", time: "17:30–20:00", day: "Thursday", category: "Employability", colour: "#D82F27" },
  { date: "2026-03-28", title: "CLCN In-House Training", time: "15:00–17:00", day: "Saturday", category: "Internal", colour: "#6B7280" },
  { date: "2026-04-01", title: "Workplace Communication & Public Speaking Club", time: "17:30–20:30", day: "Wednesday", venue: "MWB", category: "Employability", colour: "#D82F27" },
  { date: "2026-04-08", title: "N+1 Networking Initiative 1", time: "17:30–20:30", day: "Wednesday", category: "Employability", colour: "#D82F27" },
  { date: "2026-04-18", title: "CLCN In-House Training", time: "15:00–17:00", day: "Saturday", category: "Internal", colour: "#6B7280" },
  { date: "2026-04-18", title: "Team Building — Social Dinner", time: "17:30–20:00", day: "Saturday", venue: "TBC", category: "Social Cohesion", colour: "#009FE6" },
  { date: "2026-04-21", title: "Navigate & Thrive Program #17", time: "17:30–20:00", day: "Tuesday", category: "Social Cohesion", colour: "#D82F27" },
  { date: "2026-04-22", title: "Workplace Communication & Public Speaking Club", time: "17:30–20:30", day: "Wednesday", venue: "MWB", category: "Employability", colour: "#D82F27" },
  { date: "2026-04-24", title: "Art and Culture Club — Picnic to Glenelg Beach", time: "17:30–20:30", day: "Friday", category: "Social Cohesion", colour: "#FC5328" },
  { date: "2026-05-02", title: "Art and Culture Club — Picnic at Botanic Gardens", time: "17:30–20:30", day: "Saturday", category: "Social Cohesion", colour: "#FC5328" },
  { date: "2026-05-13", title: "Workplace Communication & Public Speaking Club", time: "17:30–20:30", day: "Wednesday", venue: "Switch", category: "Employability", colour: "#D82F27" },
  { date: "2026-05-16", title: "CLCN In-House Training", time: "15:00–17:00", day: "Saturday", category: "Internal", colour: "#6B7280" },
  { date: "2026-05-19", title: "Navigate & Thrive Program #18", time: "17:30–20:00", day: "Tuesday", category: "Social Cohesion", colour: "#D82F27" },
  { date: "2026-05-22", title: "Employment Forum 2", time: "17:30–20:00", day: "Friday", category: "Employability", colour: "#D82F27" },
  { date: "2026-05-27", title: "Workplace Communication & Public Speaking Club", time: "17:30–20:30", day: "Wednesday", venue: "MWB", category: "Employability", colour: "#D82F27" },
  { date: "2026-06-10", title: "N+1 Networking Initiative 2", time: "17:30–20:30", day: "Wednesday", category: "Employability", colour: "#D82F27" },
  { date: "2026-06-23", title: "Navigate & Thrive Program #19", time: "17:30–20:00", day: "Tuesday", category: "Social Cohesion", colour: "#D82F27" },
  { date: "2026-07-04", title: "Team Building — Outdoor BBQ/Picnic", time: "10:30–14:00", day: "Saturday", venue: "Parkland next to CLCN Office", category: "Social Cohesion", colour: "#009FE6" },
  { date: "2026-07-04", title: "Art and Culture Club — Knitting for Winter", time: "17:30–20:30", day: "Saturday", venue: "Switch", category: "Social Cohesion", colour: "#FC5328" },
  { date: "2026-07-08", title: "Employment Forum 3", time: "17:30–20:00", day: "Wednesday", category: "Employability", colour: "#D82F27" },
  { date: "2026-07-11", title: "CLCN In-House Training", time: "15:00–17:00", day: "Saturday", category: "Internal", colour: "#6B7280" },
  { date: "2026-07-11", title: "Team Building — Social Dinner", time: "17:30–20:00", day: "Saturday", venue: "TBC", category: "Social Cohesion", colour: "#009FE6" },
  { date: "2026-07-21", title: "Navigate & Thrive Program #20", time: "17:30–20:00", day: "Tuesday", category: "Social Cohesion", colour: "#D82F27" },
  { date: "2026-07-22", title: "Workplace Communication & Public Speaking Club", time: "17:30–20:30", day: "Wednesday", category: "Employability", colour: "#D82F27" },
  { date: "2026-07-25", title: "In-House Training — Manager/Team Leaders: High Performance Teams", time: "15:00–17:00", day: "Saturday", venue: "CLCN Office", category: "Internal", colour: "#6B7280" },
  { date: "2026-08-05", title: "Workplace Communication & Public Speaking Club", time: "17:30–20:30", day: "Wednesday", category: "Employability", colour: "#D82F27" },
  { date: "2026-08-08", title: "CLCN In-House Training", time: "15:00–17:00", day: "Saturday", category: "Internal", colour: "#6B7280" },
  { date: "2026-08-12", title: "N+1 Networking Initiative 3", time: "17:30–20:30", day: "Wednesday", category: "Employability", colour: "#D82F27" },
  { date: "2026-08-18", title: "Navigate & Thrive Program #21", time: "17:30–20:00", day: "Tuesday", category: "Social Cohesion", colour: "#D82F27" },
  { date: "2026-08-26", title: "Workplace Communication & Public Speaking Club", time: "17:30–20:30", day: "Wednesday", venue: "Switch", category: "Employability", colour: "#D82F27" },
  { date: "2026-09-05", title: "CLCN In-House Training", time: "15:00–17:00", day: "Saturday", category: "Internal", colour: "#6B7280" },
  { date: "2026-09-09", title: "Employment Forum 4", time: "17:30–20:00", day: "Wednesday", category: "Employability", colour: "#D82F27" },
  { date: "2026-09-16", title: "Workplace Communication & Public Speaking Club", time: "17:30–20:30", day: "Wednesday", category: "Employability", colour: "#D82F27" },
  { date: "2026-09-22", title: "Navigate & Thrive Program #22", time: "17:30–20:00", day: "Tuesday", category: "Social Cohesion", colour: "#D82F27" },
  { date: "2026-10-02", title: "Art and Culture Club — Painting Workshop: Traditional Australian Art", time: "17:30–20:30", day: "Friday", venue: "Switch", category: "Social Cohesion", colour: "#FC5328" },
  { date: "2026-10-03", title: "CLCN In-House Training", time: "15:00–17:00", day: "Saturday", category: "Internal", colour: "#6B7280" },
  { date: "2026-10-07", title: "N+1 Networking Initiative 4", time: "17:30–20:30", day: "Wednesday", category: "Employability", colour: "#D82F27" },
  { date: "2026-10-10", title: "Art and Culture Club — Adelaide CBD Architecture Walk", time: "11:30–12:30", day: "Saturday", category: "Social Cohesion", colour: "#FC5328" },
  { date: "2026-10-14", title: "Workplace Communication & Public Speaking Club", time: "17:30–20:30", day: "Wednesday", category: "Employability", colour: "#D82F27" },
  { date: "2026-10-20", title: "Navigate & Thrive Program #23", time: "17:30–20:00", day: "Tuesday", category: "Social Cohesion", colour: "#D82F27" },
  { date: "2026-10-24", title: "In-House Training — Manager/Team Leaders: Goal Setting & Strategy", time: "15:00–17:00", day: "Saturday", venue: "CLCN Office", category: "Internal", colour: "#6B7280" },
  { date: "2026-11-11", title: "Employment Forum 5", time: "17:30–20:00", day: "Wednesday", category: "Employability", colour: "#D82F27" },
  { date: "2026-11-21", title: "End of Year Recognition Party — Award, Black Tie", time: "17:30–20:30", day: "Saturday", venue: "TBC", category: "Annual Events", colour: "#D82F27" },
  // Sunday Morning Walks — Every Sunday 9:30–11:30
  { date: "2026-03-01", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-03-08", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-03-15", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-03-22", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-03-29", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-04-05", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-04-12", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-04-19", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-04-26", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-05-03", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-05-10", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-05-17", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-05-24", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-05-31", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-06-07", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-06-14", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-06-21", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-06-28", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-07-05", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-07-12", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-07-19", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-07-26", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-08-02", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-08-09", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-08-16", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-08-23", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-08-30", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-09-06", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-09-13", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-09-20", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-09-27", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-10-04", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-10-11", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-10-18", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-10-25", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-11-01", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-11-08", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-11-15", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-11-22", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-11-29", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-12-06", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-12-13", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-12-20", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
  { date: "2026-12-27", title: "Sunday Morning Walks", time: "9:30–11:30", day: "Sunday", venue: "CLCN Office (start/finish)", category: "Welfare & Wellbeing", colour: "#FC5328" },
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const CATEGORIES = ["All", "Employability", "Social Cohesion", "Welfare & Wellbeing", "Annual Events", "Internal"];

const CATEGORY_COLOURS: Record<string, string> = {
  "Employability": "#D82F27",
  "Social Cohesion": "#FC5328",
  "Welfare & Wellbeing": "#FC5328",
  "Annual Events": "#D82F27",
  "Internal": "#9CA3AF",
};

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" });
}

function getMonthYear(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return { month: d.getMonth(), year: d.getFullYear() };
}

export default function Events() {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [filterCategory, setFilterCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<CLCNEvent | null>(null);

  const filteredEvents = events.filter(
    (e) => filterCategory === "All" || e.category === filterCategory
  );

  const monthEvents = filteredEvents.filter((e) => {
    const { month, year } = getMonthYear(e.date);
    return month === viewMonth && year === viewYear;
  });

  const upcomingEvents = filteredEvents
    .filter((e) => new Date(e.date + "T00:00:00") >= today)
    .slice(0, 6);

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  }

  // Build calendar grid
  const firstDay = new Date(viewYear, viewMonth, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const calendarCells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) calendarCells.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarCells.push(d);

  function getEventsForDay(day: number) {
    const iso = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return filteredEvents.filter((e) => e.date === iso);
  }

  const isToday = (day: number) => {
    return day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-64 overflow-hidden">
          <img src={EVENTS_IMG} alt="CLCN Events" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 flex items-center">
            <div className="container">              <h1
                className="text-white font-black"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Events Calendar 2026
              </h1>
              <p className="text-gray-200 text-sm mt-2">
                52 events across Employability, Social Cohesion, and Community programs
              </p>
            </div>
          </div>
        </section>

        {/* Category filter */}
        <div className="bg-white border-b border-gray-100 sticky top-[72px] z-40">
          <div className="container py-3 flex flex-wrap gap-2 items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mr-2">Filter:</span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className="px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-sm transition-colors"
                style={{
                  backgroundColor: filterCategory === cat ? "#D82F27" : "#FAF8F5",
                  color: filterCategory === cat ? "white" : "#555",
                  border: `1px solid ${filterCategory === cat ? "#D82F27" : "#e0ddd9"}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar + Upcoming */}
        <section className="bg-[#FAF8F5] py-12">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Calendar */}
              <div className="lg:col-span-2">
                {/* Month navigation */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    className="w-9 h-9 flex items-center justify-center rounded-sm border border-gray-200 hover:border-[#D82F27] hover:text-[#D82F27] transition-colors bg-white"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <h2
                    className="font-black text-[#1A1A1A] text-xl"
                   
                  >
                    {MONTHS[viewMonth]} {viewYear}
                  </h2>
                  <button
                    onClick={nextMonth}
                    className="w-9 h-9 flex items-center justify-center rounded-sm border border-gray-200 hover:border-[#D82F27] hover:text-[#D82F27] transition-colors bg-white"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                    <div
                      key={d}
                      className="text-center text-xs font-bold uppercase tracking-wider text-gray-400 py-2"
                     
                    >
                      {d}
                    </div>
                  ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarCells.map((day, idx) => {
                    if (day === null) {
                      return <div key={`empty-${idx}`} className="h-20 bg-transparent" />;
                    }
                    const dayEvents = getEventsForDay(day);
                    const todayCell = isToday(day);
                    return (
                      <div
                        key={`day-${day}`}
                        className="h-20 rounded-sm p-1 overflow-hidden transition-colors"
                        style={{
                          backgroundColor: todayCell ? "#FFF0EF" : "white",
                          border: todayCell ? "2px solid #D82F27" : "1px solid #e8e4e0",
                          cursor: dayEvents.length > 0 ? "pointer" : "default",
                        }}
                        onClick={() => dayEvents.length > 0 && setSelectedEvent(dayEvents[0])}
                      >
                        <div
                          className="text-xs font-bold mb-1"
                          style={{
                            color: todayCell ? "#D82F27" : "#1A1A1A",
                          }}
                        >
                          {day}
                        </div>
                        <div className="space-y-0.5">
                          {dayEvents.slice(0, 2).map((ev, i) => (
                            <div
                              key={i}
                              className="text-white text-[9px] leading-tight px-1 py-0.5 rounded-sm truncate"
                              style={{ backgroundColor: ev.colour }}
                              title={ev.title}
                            >
                              {ev.title.length > 18 ? ev.title.slice(0, 18) + "…" : ev.title}
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-[9px] text-gray-400 font-bold pl-1">+{dayEvents.length - 2} more</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Month events list */}
                {monthEvents.length > 0 && (
                  <div className="mt-8">
                    <h3
                      className="font-black text-[#1A1A1A] text-lg mb-4"
                     
                    >
                      {MONTHS[viewMonth]} Events
                    </h3>
                    <div className="space-y-3">
                      {monthEvents.map((ev, i) => (
                        <div
                          key={i}
                          className="bg-white border border-gray-200 rounded-sm p-4 flex gap-4 hover:border-[#D82F27] transition-colors cursor-pointer"
                          style={{ borderLeft: `4px solid ${ev.colour}` }}
                          onClick={() => setSelectedEvent(ev)}
                        >
                          <div className="flex-shrink-0 text-center min-w-[48px]">
                            <div
                              className="font-black text-2xl leading-none"
                              style={{ color: ev.colour }}
                            >
                              {new Date(ev.date + "T00:00:00").getDate()}
                            </div>
                            <div className="text-gray-400 text-xs uppercase tracking-wide">
                              {MONTHS[viewMonth].slice(0, 3)}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div
                              className="font-bold text-[#1A1A1A] text-sm leading-tight mb-1"
                             
                            >
                              {ev.title}
                            </div>
                            <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                              {ev.time && (
                                <span className="flex items-center gap-1">
                                  <Clock size={11} className="text-[#D82F27]" />
                                  {ev.time}
                                </span>
                              )}
                              {ev.venue && (
                                <span className="flex items-center gap-1">
                                  <MapPin size={11} className="text-[#D82F27]" />
                                  {ev.venue}
                                </span>
                              )}
                              <span
                                className="px-2 py-0.5 rounded-full text-white text-[10px] font-bold"
                                style={{ backgroundColor: CATEGORY_COLOURS[ev.category] || "#D82F27" }}
                              >
                                {ev.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {monthEvents.length === 0 && (
                  <div className="mt-8 bg-white border border-gray-200 rounded-sm p-8 text-center">
                    <Calendar size={32} className="text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-400 text-sm">No events scheduled for {MONTHS[viewMonth]} {viewYear}</p>
                  </div>
                )}
              </div>

              {/* Sidebar — Upcoming events */}
              <div>
                <h3
                  className="font-black text-[#1A1A1A] text-lg mb-5"
                 
                >
                  Upcoming Events
                </h3>
                <div className="space-y-3">
                  {upcomingEvents.length === 0 ? (
                    <p className="text-gray-400 text-sm">No upcoming events found.</p>
                  ) : (
                    upcomingEvents.map((ev, i) => (
                      <div
                        key={i}
                        className="bg-white border border-gray-200 rounded-sm p-3 cursor-pointer hover:border-[#D82F27] transition-colors"
                        style={{ borderLeft: `3px solid ${ev.colour}` }}
                        onClick={() => setSelectedEvent(ev)}
                      >
                        <div
                          className="font-bold text-[#1A1A1A] text-sm leading-tight mb-1"
                         
                        >
                          {ev.title}
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-1.5">
                          <Calendar size={10} className="text-[#D82F27]" />
                          {formatDate(ev.date)}
                          {ev.time && <> · {ev.time}</>}
                        </div>
                        {ev.venue && (
                          <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                            <MapPin size={10} />
                            {ev.venue}
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>

                {/* Legend */}
                <div className="mt-8 bg-white border border-gray-200 rounded-sm p-4">
                  <h4
                    className="font-bold text-[#1A1A1A] text-xs uppercase tracking-wider mb-3"
                   
                  >
                    Event Categories
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(CATEGORY_COLOURS).filter(([k]) => k !== "Internal").map(([cat, colour]) => (
                      <div key={cat} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: colour }} />
                        <span className="text-xs text-gray-600">{cat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              
              </div>
            </div>
          </div>
        </section>

        {/* Annual Events */}
        <section className="bg-white py-14">
          <div className="container">            <h2
              className="heading-accent text-[#1A1A1A] font-black mb-8"
              style={{ fontSize: "2rem" }}
            >
              Our Annual Events
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Annual Welcome Party",
                  desc: "A warm, inclusive celebration for invited tertiary students and the CLCN community. Serves as a key introduction to CLCN, enabling students to engage with the organisation and join as participants.",
                  colour: "#D82F27",
                },
                {
                  title: "Annual General Meeting (AGM)",
                  desc: "Brings together board members, advisory board members, volunteers, sponsors, members, collaborators, donors, and government representatives as both a governance milestone and a shared community occasion.",
                  colour: "#009FE6",
                },
              ].map((ev) => (
                <div key={ev.title} className="program-card" style={{ borderTopColor: ev.colour }}>
                  <h4
                    className="font-black text-[#1A1A1A] text-lg mb-2"
                   
                  >
                    {ev.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{ev.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Event detail modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white rounded-sm max-w-md w-full p-6 shadow-2xl"
            style={{ borderTop: `4px solid ${selectedEvent.colour}` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <h3
                className="font-black text-[#1A1A1A] text-xl leading-tight"
               
              >
                {selectedEvent.title}
              </h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-gray-600 flex-shrink-0 text-xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={15} className="text-[#D82F27] flex-shrink-0" />
                <span>{formatDate(selectedEvent.date)} — {selectedEvent.day}</span>
              </div>
              {selectedEvent.time && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={15} className="text-[#D82F27] flex-shrink-0" />
                  <span>{selectedEvent.time}</span>
                </div>
              )}
              {selectedEvent.venue && (
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={15} className="text-[#D82F27] flex-shrink-0" />
                  <span>{selectedEvent.venue}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <span
                  className="px-2 py-1 rounded-sm text-white text-xs font-bold"
                  style={{ backgroundColor: CATEGORY_COLOURS[selectedEvent.category] || "#D82F27" }}
                >
                  {selectedEvent.category}
                </span>
              </div>
              {selectedEvent.notes && (
                <div className="bg-[#FAF8F5] rounded-sm p-3 text-gray-600 text-sm">
                  {selectedEvent.notes}
                </div>
              )}
            </div>
            <div className="mt-5 pt-4 border-t border-gray-100">
              {selectedEvent.registrationUrl ? (
                <a
                  href={selectedEvent.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-clcn-primary text-xs py-2 px-4 inline-flex items-center gap-2"
                  onClick={() => setSelectedEvent(null)}
                >
                  Register on Humanitix
                  <ArrowRight size={13} />
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="btn-clcn-primary text-xs py-2 px-4"
                  onClick={() => setSelectedEvent(null)}
                >
                  Register Interest
                  <ArrowRight size={13} />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
