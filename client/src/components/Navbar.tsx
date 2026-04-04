/* =============================================================
   CLCN Navbar — Contemporary Civic / Editorial Non-Profit
   Typography: Poppins headings | Calibri body
   Primary red #D82F27, Blue #009FE6
   Logo: Official CLCN logo from branding kit (CDN image)

   DROPDOWN HIERARCHY:
   - Programs dropdown shows 2 columns: EMPLOYABILITY | SOCIAL COHESION
   - Each column lists programs alphabetically
   - Sub-programs (e.g., AGM under Annual Events) are indented to show hierarchy
   - Workplace Communication & Public Speaking Club appears ONLY in Employability
   
   TO EDIT NAV ITEMS: Update the `navItems` array below.
   ============================================================= */
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const CLCN_LOGO_URL =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323954928/ytYjeFnOEOgcpIid.png";

interface NavChild {
  label: string;
  href: string;
  group?: string;
  isParent?: boolean; // marks if this item has sub-items
  children?: { label: string; href: string }[];
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

/* ---------------------------------------------------------------
   NAV ITEMS — Organized by portfolio with proper hierarchy
   --------------------------------------------------------------- */
const navItems: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Programs",
    href: "/programs",
  },
  {
    label: "Global Talent Incubator",
    href: "/global-talent-incubator",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Opportunities",
    href: "/opportunities",
  },
  {
    label: "Impact",
    href: "/impact",
  },
];

/* ---------------------------------------------------------------
   Programs Dropdown — 2-column layout with hierarchy display
   --------------------------------------------------------------- */
function ProgramsDropdown({ items, onClose }: { items: NavChild[]; onClose: () => void }) {
  const groups = ["Employability", "Social Cohesion"];
  return (
    <div
      className="nav-dropdown"
      style={{ width: "520px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}
    >
      {groups.map((group, gi) => {
        const groupItems = items.filter((item) => item.group === group);
        const headerItem = groupItems[0];
        const subItems = groupItems.slice(1);
        return (
          <div
            key={group}
            style={{
              borderRight: gi < groups.length - 1 ? "1px solid #f0ece8" : "none",
              padding: "0.75rem",
            }}
          >
            {/* Portfolio name — clickable link */}
            <Link
              href={headerItem.href}
              onClick={onClose}
              className="block text-[#D82F27] font-bold text-xs uppercase tracking-wider mb-3 pb-2 no-underline hover:underline"
              style={{ borderBottom: "2px solid #D82F27" }}
            >
              {headerItem.label}
            </Link>
            {subItems.map((item) => (
              <div key={item.href}>
                {/* Parent program (e.g., Annual Events, Welfare) */}
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`block py-1.5 text-xs leading-tight transition-colors no-underline font-medium ${
                    item.isParent ? "text-[#1A1A1A]" : "text-gray-600 hover:text-[#D82F27]"
                  }`}
                >
                  {item.label}
                </Link>
                {/* Sub-programs (indented to show hierarchy) */}
                {item.children &&
                  item.children.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={onClose}
                      className="block py-1 text-[11px] leading-tight transition-colors no-underline text-gray-500 hover:text-[#D82F27] pl-3 border-l-2 border-gray-200 ml-1"
                    >
                      {sub.label}
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function DropdownMenu({ items, onClose }: { items: NavChild[]; onClose: () => void }) {
  return (
    <div className="nav-dropdown">
      {items.map((item) => (
        <div key={item.href}>
          <Link href={item.href} onClick={onClose}>
            {item.label}
          </Link>
          {item.children &&
            item.children.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                onClick={onClose}
                className="sub-item"
              >
                {sub.label}
              </Link>
            ))}
        </div>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container" ref={navRef}>
        <div className="flex items-center justify-between h-16">
          {/* Logo — official CLCN branding kit image */}
          <Link href="/" className="flex items-center no-underline">
            <img
              src={CLCN_LOGO_URL}
              alt="CLCN — Communication Language & Culture Network"
              style={{ height: "44px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop nav — font size increased for readability */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                      location.startsWith(item.href)
                        ? "text-[#D82F27]"
                        : "text-[#1A1A1A] hover:text-[#D82F27]"
                    }`}
                    style={{ letterSpacing: "0.04em" }}
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors no-underline ${
                      location === item.href
                        ? "text-[#D82F27]"
                        : "text-[#1A1A1A] hover:text-[#D82F27]"
                    }`}
                    style={{ letterSpacing: "0.04em" }}
                  >
                    {item.label}
                  </Link>
                )}
                {item.children &&
                  activeDropdown === item.label &&
                  (item.label === "Programs" ? (
                    <ProgramsDropdown
                      items={item.children}
                      onClose={() => setActiveDropdown(null)}
                    />
                  ) : (
                    <DropdownMenu
                      items={item.children}
                      onClose={() => setActiveDropdown(null)}
                    />
                  ))}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/opportunities#volunteer"
              className="hidden md:inline-flex btn-clcn-primary text-xs py-2 px-4"
            >
              Get Involved
            </Link>
            <button
              className="lg:hidden p-2 text-[#1A1A1A]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 pb-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-2 py-3 text-sm font-bold uppercase tracking-wide text-[#1A1A1A] hover:text-[#D82F27] no-underline border-b border-gray-50"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="bg-[#F9F7F5] pl-4">
                    {item.children.map((child) => (
                      <div key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-2 py-2 text-sm text-[#555] hover:text-[#D82F27] no-underline border-b border-gray-100"
                        >
                          {child.label}
                        </Link>
                        {child.children &&
                          child.children.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="block px-4 py-1.5 text-xs text-[#888] hover:text-[#D82F27] no-underline border-b border-gray-100"
                            >
                              {sub.label}
                            </Link>
                          ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-2">
              <Link
                href="/opportunities#volunteer"
                className="btn-clcn-primary w-full justify-center"
              >
                Get Involved
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
