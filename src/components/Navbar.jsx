import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../assets/icon.png";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  // Update nav links to pure route paths (no hash #id)
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Why EWIG", href: "/why-ewig" },
    { label: "Services", href: "/services", dropdown: true },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const servicesDropdown = [
    { label: "EPC", href: "/services#epc" },
    { label: "Commercial Solutions", href: "/services#commercial-solutions" },
    { label: "Solar Rooftop Project", href: "/services#rooftop-project" },
    { label: "Government Approval", href: "/services#government-approval" },
    { label: "O & M", href: "/services#operations-maintenance" },
  ];


  // Simply navigate to the route path on click
  const handleNavClick = (path) => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    navigate(path);
  };

  // Handle service dropdown item click, navigate to service route
  const handleServiceClick = (path) => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    navigate(path);
  };

  return (
    <header className="w-full absolute top-0 left-0 z-50 py-4 bg-transparent">
      {/* Desktop View */}
      <div className="hidden lg:flex flex-row w-full relative justify-between items-center pb-7 max-w-6xl mx-auto rounded-full">
        <div className="absolute z-50 top-10 transform -translate-y-1/2 bg-white overflow-hidden px-4 py-2 h-[90px] rounded-full">
          <img src={logo} alt="EWIG Logo" className="w-36 h-auto" />
        </div>

        <div className="w-full flex-1 pl-[150px] relative px-4 items-center rounded-full bg-[#0A9642] ml-[60px]">
          <nav className="py-4 text-white font-medium">
            <ul className="flex items-center justify-end list-none m-0 p-0">
              {navLinks.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center relative"
                  onMouseEnter={() => item.dropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => item.dropdown && setIsServicesOpen(false)}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`px-5 py-3 rounded-full transition-all duration-500 ease-in-out hover:bg-white hover:text-[#0A9642] ${item.dropdown ? "px-4" : ""
                      } ${location.pathname === item.href ? "bg-white text-[#0A9642]" : ""
                      }`}
                  >

                    {item.label}
                  </button>

                  {item.dropdown && isServicesOpen && (
                    <DropdownMenu
                      items={servicesDropdown}
                      onItemClick={(service) =>
                        handleServiceClick(service.href)
                      }
                    />
                  )}

                  {idx < navLinks.length - 1 && (
                    <span className="mx-3 w-px h-5 bg-[#383737]"></span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden w-full px-4 mt-4">
        <div className="flex items-center justify-between rounded-full px-4 py-2 shadow-md relative">
          <div className="bg-white absolute rounded-full left-3 px-3 py-2 h-[70px] flex items-center">
            <img src={logo} alt="EWIG Logo" className="w-28 h-auto" />
          </div>

          <div className="bg-[#0A9642] py-4 rounded-full px-2 pr-6 w-full flex justify-end">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 mx-4 z-[999] animate-slide-in-left ml-auto w-full md:w-1/2">
          <div className="bg-[#0A9642] text-white rounded-xl px-6 py-5 space-y-3 text-base font-medium shadow-2xl">
            {navLinks.map((item, i) => (
              <div key={i}>
                {!item.dropdown ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-center py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[#0A9642] ${location.pathname === item.href ? "bg-white text-[#0A9642]" : ""
                      }`}
                  >
                    {item.label}
                  </button>

                ) : (
                  <>
                    <button
                      onClick={() =>
                        setIsMobileServicesOpen(!isMobileServicesOpen)
                      }
                      className="w-full flex justify-center items-center gap-2 py-2 px-4 rounded-full transition-all duration-300 ease-in-out hover:bg-white hover:text-[#0A9642]"
                    >
                      {item.label}
                      {isMobileServicesOpen ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>

                    {isMobileServicesOpen && (
                      <ul className="bg-white text-[#0A9642] rounded-lg mt-2 text-center space-y-2 shadow-md border border-white/10 px-4 py-2">
                        {servicesDropdown.map((service, idx) => (
                          <li key={idx}>
                            <button
                              onClick={() => handleServiceClick(service.href)}
                              className="block w-full py-2 rounded-md hover:bg-white hover:text-[#0A9642] transition duration-300"
                            >
                              {service.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            ))}

            {/* <button
              onClick={() => handleNavClick("/contact")}
              className="block w-full text-center mt-3 py-2 bg-gray-900 rounded-full hover:bg-white hover:text-[#0A9642] transition-all duration-300"
            >
              Request a Quote
            </button> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
