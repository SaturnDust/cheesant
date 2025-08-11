import { useState, useEffect } from "react";

export function Navbar({navMenuClicked, homeRef, productRef, contactUsRef}) {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // trigger after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <a
          className={`font-bold text-[25px] cursor-pointer ${isScrolled ? "text-jetblack" : "text-primaryWhite"
            }`}
          href="/"
        >
          Cheesant.
        </a>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex font-bold items-center ${isScrolled ? "text-jetblack" : "text-primaryWhite"
            }`}
        >
          <button onClick={() => {navMenuClicked(homeRef)}} className="mx-3 cursor-pointer">
            Home
          </button>
          <button onClick={() => navMenuClicked(productRef)} className="mx-3 cursor-pointer">
            Product
          </button>
          <button
            onClick={() => navMenuClicked(contactUsRef)}
            className={`mx-3 border px-5 py-2 rounded-full transition duration-200 cursor-pointer
              ${isScrolled
                ? "border-jetblack hover:bg-jetblack hover:text-white"
                : "border-primaryWhite hover:bg-primaryWhite hover:text-jetblack"
              }
            `}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 transition-transform duration-300 ${isScrolled
                ? isOpen
                  ? "bg-jetblack rotate-45 translate-y-1.5"
                  : "bg-jetblack"
                : isOpen
                  ? "bg-jetblack rotate-45 translate-y-1.5"
                  : "bg-primaryWhite"
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-opacity duration-300 ${isOpen ? "opacity-0" : isScrolled ? "bg-jetblack" : "bg-primaryWhite"
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-transform duration-300 ${isScrolled
                ? isOpen
                  ? "bg-jetblack -rotate-45 -translate-y-1.5"
                  : "bg-jetblack"
                : isOpen
                  ? "bg-jetblack -rotate-45 -translate-y-1.5"
                  : "bg-primaryWhite"
              }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-primaryWhite flex flex-col items-center justify-center font-bold text-cocoa transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button  
        className="py-4 text-2xl cursor-pointer" onClick={() => {
          setIsOpen(false)
          navMenuClicked(homeRef)
          }}>
          Home
        </button>
        <button  className="py-4 text-2xl cursor-pointer" onClick={() => {
          setIsOpen(false)
          navMenuClicked(productRef)
          }}>
          Product
        </button>
        <button
          className="py-2 text-2xl border border-cocoa px-4 rounded-full hover:bg-cocoa hover:text-primaryWhite transition duration-200 cursor-pointer"
          onClick={() => {
            setIsOpen(false)
            navMenuClicked(contactUsRef)
          }}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}
