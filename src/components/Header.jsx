import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(null);
  const [mobileDropdown, setMobileDropdown] = React.useState({});

  const navLink =
    "px-3 lg:px-4 py-2 lg:py-3 font-semibold text-white hover:bg-blue-900 transition rounded-md text-sm lg:text-base";

  const menu = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/naac", label: "NAAC" },

    {
      label: "Admissions",
      sub: [
        { to: "/admission", label: "Admissions" },
        { to: "/academics", label: "Academics" },
      ],
    },

    { to: "/courses", label: "Courses" },

    {
      label: "Udan",
      sub: [
        { to: "/udan/1", label: "Udan 1" },
        { to: "/udan/2", label: "Udan 2" },
        { to: "/udan/3", label: "Udan 3" },
        { to: "/udan/4", label: "Udan 4" },
        { to: "/udan/5", label: "Udan 5" },
        { to: "/udan/6", label: "Udan 6" },
        { to: "/udan/7", label: "Udan 7" },
        { to: "/udan/8", label: "Udan 8" },
      ],
    },
    { to: "/notice", label: "Notice" },

    { to: "/students", label: "Students" },

    {
      label: "More",
      sub: [
        { to: "/facilities", label: "Facilities" },
        { to: "/library", label: "Library" },
        { to: "/gallery", label: "Gallery" },
        { to: "/blog", label: "Blogs" },
        { to: "/career", label: "Career" },
         { label: "MahaDBT Scholarship", href: "https://mahadbt.maharashtra.gov.in/Login/Login" },
        
      ],
    },

    {
      label: "Approvals",   
      sub: [
        
        { label: "Maha Gov", pdf: "/assets/pdfs/maha_gov.pdf" },
        { label: "Staff", pdf: "/assets/pdf/StaffList.pdf" },
        { label: "Non Encumbrance Certificate", pdf: "/assets/pdfs/non_encumbrance_certificate.pdf" },
        { label: "Land NA Order", pdf: "/assets/pdfs/land_na_order.pdf" },
        { label: "Land Mutation Certificate", pdf: "/assets/pdfs/land_mutation_certificate.pdf" },
        { label: "Land Used Certificate", pdf: "/assets/pdfs/land_used_certificate.pdf" },
        { label: "Land Document Part 1", pdf: "/assets/pdfs/land_document_part1.pdf" },
        { label: "Land Document Part 2", pdf: "/assets/pdfs/land_document_part2.pdf" },
        { label: "New Land Purchase Document", pdf: "/assets/pdfs/new_land_purchase_document.pdf" },
        { label: "NCTE Revise Order", pdf: "/assets/pdfs/ncte_revise_order.pdf" },
        { label: "Building Safety Certificate", pdf: "/assets/pdfs/building_safety_certificate.pdf" },
        { label: "Building Completion Certificate", pdf: "/assets/pdfs/building_completion_certificate.pdf" },
        { label: "Building Completion Architect", pdf: "/assets/pdfs/building_completion_architect.pdf" },
        { label: "Building Safety Architect", pdf: "/assets/pdfs/building_safety_architect.pdf" },
        { label: "Building Plan 1", pdf: "/assets/pdfs/building_plan1.pdf" },
        { label: "Building Plan 2", pdf: "/assets/pdfs/building_plan2.pdf" },
        { label: "Safe Drinking Water Certificate", pdf: "/assets/pdfs/safe_drinking_water_certificate.pdf" },
      ],
    },

    { to: "/contact", label: "Contact" },
  ];

  const handleDropdown = (label) => {
    setDropdown(dropdown === label ? null : label);
  };

  const toggleMobileDropdown = (label) => {
    setMobileDropdown(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  // Close mobile menu when window is resized to desktop size
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
        setMobileDropdown({});
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">

      {/* ================= HEADER SECTION ================= */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4 flex flex-col sm:grid sm:grid-cols-3 items-center gap-2 sm:gap-0">

          {/* LEFT : LOGO */}
          <div className="flex justify-center sm:justify-start">
            <Link to="/">
              <img
                src="/assets/images/logo.jpeg"
                alt="College Logo"
                className="h-12 sm:h-16 md:h-20 object-contain"
              />
            </Link>
          </div>

          {/* CENTER : COLLEGE TITLE */}
          <div className="text-center px-0 sm:px-2 w-full">
            <p className="text-[10px] sm:text-xs md:text-sm italic">
              “Education for Strength, Intellect & Wisdom”
            </p>

            <h1 className="text-sm sm:text-lg md:text-xl font-bold text-blue-900 mt-0 sm:mt-1">
              Jai Ganesh College of Education - B.Ed
            </h1>

            <p className="text-[8px] xs:text-[10px] sm:text-xs mt-0.5 sm:mt-1 leading-tight px-1">
              (Maha. Gov. Sact. No. : 2008 / (177/08) N.C.T.E. Code No. :
              APW04503/123547 Pune University ID No. : PU/PN/B-Ed-/296/2008
              College Code 1115)
            </p>
          </div>

          {/* RIGHT : EMPTY (keeps text perfectly centered on larger screens) */}
          <div className="hidden sm:block"></div>

        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <div className="bg-blue-950 relative">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 h-12 sm:h-14 flex items-center justify-between md:justify-center relative">

          {/* Mobile Menu Button - Left side on mobile */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Empty div for flex spacing on mobile */}
          <div className="md:hidden"></div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 flex-wrap justify-center">
            {menu.map((item, idx) =>
              item.sub ? (
                <div key={idx} className="relative group">
                  <button
                    onClick={() => handleDropdown(item.label)}
                    onMouseEnter={() => handleDropdown(item.label)}
                    className={`${navLink} flex items-center gap-1`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3 w-3 lg:h-4 lg:w-4 transition-transform ${
                        dropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdown === item.label && (
                    <div 
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-56 lg:w-64 bg-white text-gray-800 shadow-xl rounded-md overflow-hidden max-h-96 overflow-y-auto z-50"
                      onMouseLeave={() => setDropdown(null)}
                    >
                      {item.sub.map((s, i) =>
                        s.pdf ? (
                          <a
                            key={i}
                            href={s.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 lg:px-4 py-2 hover:bg-blue-50 text-xs lg:text-sm border-b border-gray-100 last:border-0"
                          >
                            {s.label}
                          </a>
                        ) : (
                          <NavLink
                            key={i}
                            to={s.to}
                            onClick={() => setDropdown(null)}
                            className="block px-3 lg:px-4 py-2 hover:bg-blue-50 text-xs lg:text-sm border-b border-gray-100 last:border-0"
                          >
                            {s.label}
                          </NavLink>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `${navLink} ${isActive ? "bg-blue-800" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Empty div for flex spacing on mobile */}
          <div className="md:hidden"></div>
        </div>

        {/* Mobile Menu - Slide down animation */}
        <div
          className={`
            md:hidden bg-blue-950 absolute w-full z-50 transition-all duration-300 ease-in-out
            ${open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
          `}
        >
          <div className="px-4 pb-4 overflow-y-auto max-h-[70vh]">
            {menu.map((m, i) => (
              <div key={i}>
                {m.sub ? (
                  <div className="border-b border-blue-900">
                    <button
                      onClick={() => toggleMobileDropdown(m.label)}
                      className="flex items-center justify-between w-full py-3 text-white font-semibold"
                    >
                      <span>{m.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileDropdown[m.label] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    
                    <div
                      className={`
                        transition-all duration-300 ease-in-out overflow-hidden
                        ${mobileDropdown[m.label] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                      `}
                    >
                      {m.sub.map((s, j) => (
                        <div key={j} className="pl-4">
                          {s.pdf ? (
                            <a
                              href={s.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpen(false)}
                              className="block py-2 text-gray-200 hover:text-white text-sm border-t border-blue-900/50"
                            >
                              {s.label}
                            </a>
                          ) : (
                            <NavLink
                              to={s.to}
                              onClick={() => {
                                setOpen(false);
                                setMobileDropdown({});
                              }}
                              className="block py-2 text-gray-200 hover:text-white text-sm border-t border-blue-900/50"
                            >
                              {s.label}
                            </NavLink>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={m.to}
                    onClick={() => {
                      setOpen(false);
                      setMobileDropdown({});
                    }}
                    className="block py-3 text-white font-semibold border-b border-blue-900 hover:bg-blue-900/50"
                  >
                    {m.label}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}