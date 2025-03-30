import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { close, logo, menu, go8_logo } from "../../assets";
import { navLinks } from "../../constants";
import { ChevronsDown, Menu } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar z-50">
      <div className="logo font-bold  flex items-center">
        <motion.img
          initial={[{ scale: 0, rotate: 360, x: -60 }]}
          animate={[{ scale: 1, rotate: 0, x: 0 }]}
          transition={{ duration: 0.55 }}
          src={logo}
          className="w-24 object-contain"
        />
        <img
          src={go8_logo}
          className="w-20 h-20 object-contain ml-[-20px] mt-[0px]"
        />
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
        <Menu size={30} className="text-white" />
      </button>

      {/* mpbile */}
      <div className="fixed top-0 left-0 w-full h-full z-40">
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-t border-white/5"
            >
              <div className="px-4 py-4 space-y-4">
                {navLinks?.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 },
                    }}
                    initial="closed"
                    animate="open"
                    transition={{ duration: 0.2, delay: 0.2 }}
                  >
                    <a
                      href={item.id}
                      className="block px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
