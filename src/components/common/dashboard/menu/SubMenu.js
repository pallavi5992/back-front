import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};

const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const SubMenu = ({ showAnimation, route, isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };
  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);

  return (
    <>
      <div className="submenu" onClick={toggleMenu}>
        <div className="submenu_item">
          <div className="icon">{route.icon}</div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link_text"
              >
                {route.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {isOpen && (
          <motion.div animate={isMenuOpen ? { rotate: -90 } : { rotate: 0 }}>
            <i className="fa fa-angle-down"></i>
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="submenu_container"
          >
            {route &&
              route.subMenuRoute.map((subRoute, i) => (
                <Link
                  activeClassName="active"
                  variants={menuItemAnimation}
                  to={subRoute.path}
                  custom={i}
                  key={i}
                  className="sublink"
                >
                  <div className="icons">{subRoute.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {subRoute.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SubMenu;
