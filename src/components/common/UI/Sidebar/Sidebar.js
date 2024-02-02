import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.js";
// import Header from '../header/Header'
import Header from "../../../header/Header";
import { NavLink, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "../../dashboard/menu/Menu";
import Navbar from "../dashboardNavbar/Navbar";
import Footer from "../dashboardFooter/Footer";
// import Footer from '../dashboardFooter/Footer'

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <i className="fa fa-home"></i>,
    subRoutes: [
        {
            path: "/",
            name: "Dashboard",
            icon: <i className="fas fa-tachometer-alt"></i>,

        },
    ]
  },

  {
    // "Dashboard Management"
    path: "/organisationmaster",
    name: "Dashboard Management",
    icon: <i className="fas fa-users"></i>,
    subRoutes: [
      {
        path: "/admin/index/user",
        name: "User Details",
        icon: <i className="fa fa-users"></i>,
      },
      {
        path: "/admin/index/accessassign",
        name: "Access Assignment",
        icon: <i className="fa fa-book" aria-hidden="true"></i>,
      },
      {
        path: "/admin/index/organisationmaster",
        name: "Organisation Master",
        icon: <i className="fa-solid fa-building"></i>,
      },
      {
        path: "/admin/index/moduleconfig",
        name: "Module Configuration",
        icon: <i className="fa-solid fa-file-lines"></i>,
      },
      {
        path: "/admin/index/location",
        name: "Location",
        icon: <i className="fa-solid fa-file-lines"></i>,
      },
      {
        path: "/admin/index/discmaster",
        name: "Disc Master",
        icon: <i className="fa-solid fa-file-lines"></i>,
      },
      {
        path: "/admin/index/defencechallenge",
        name: "Defence Challenge",
        icon: <i className="fa-solid fa-file-lines"></i>,
      },
    ],
  },
  // DashBoard configuration
  {
    path: "/user",
    name: "Dashboard Configuration",
    icon: <i className="fas fa-tachometer-alt"></i>,
    subRoutes: [
      {
        path: "/admin/index/defenceExportAPI",
        name: "Defence Export API",
        icon: <i className="fa fa-edit"></i>,
      },
      {
        path: "/admin/index/defenceOffsetAPI",
        name: " Defence offSet API",
        icon: <i className="fa fa-edit"></i>,
      },
      {
        path: "/admin/index/defenceproduction",
        name: "Defence Production",
        icon: <i className="fa fa-edit"></i>,
      },
      {
        path: "/admin/index/missionrakshagyanshakti",
        name: "Mission Raksha Gyan Shakti",
        icon: <i className="fa fa-edit"></i>,
      },
      {
        path: "/admin/index/makeproject",
        name: "Make Project",
        icon: <i className="fa fa-edit"></i>,
        subMenuRoute: [
          {
            path: "/admin/index/makeproject",
            name: "Make Project",
            icon: <i className="fa fa-edit"></i>,
          },
          {
            path: "/admin/index/make1project",
            name: "Make I Project",
            icon: <i className="fa fa-edit"></i>,
          },
          {
            path: "/admin/index/makeprojectdap",
            name: "Make II Project by DAP",
            icon: <i className="fa fa-edit"></i>,
          },
          {
            path: "/admin/index/makeprojectdpsu",
            name: "Make II Project by DPSU",
            icon: <i className="fa fa-edit"></i>,
          },
        ],
      },

      {
        path: "/admin/index/makeproject3",
        name: "Make Project III",
        icon: <i className="fa fa-edit"></i>,
        subMenuRoute: [
          {
            path: "/admin/index/makeproject3",
            name: "Make Project III",
            icon: <i className="fa fa-edit"></i>,
          },

          {
            path: "/admin/index/makeproject3dap",
            name: "Make III Project by DAP",
            icon: <i className="fa fa-edit"></i>,
          },
          {
            path: "/admin/index/makeproject3dpsu",
            name: "Make III Project by DPSU",
            icon: <i className="fa fa-edit"></i>,
          },
        ],
      },

      {
        path: "/admin/index/idex",
        name: "iDEX",
        icon: <i className="fa fa-edit"></i>,
      },
      {
        path: "/admin/index/uttarpradeshdefence",
        name: "Uttar Pradesh Defence Carridor",
        icon: <i className="fa fa-edit"></i>,
      },
      {
        path: "/admin/index/tamilnadudefence",
        name: "Tamil Nadu Defence carridor",
        icon: <i className="fa fa-edit"></i>,
      },
      {
        path: "/admin/index/aidefence",
        name: "AI in Defence",
        icon: <i className="fa fa-edit"></i>,
      },
    ],
  },
  {
    path: "/user",
    name: "Prayas API",
    icon: <i className="fas fa-users"></i>,
    subRoutes: [
      {
        path: "/user",
        name: "Login",
        icon: <i className="fa fa-edit"></i>,
      },
      {
        path: "/user",
        name: "Logout",
        icon: <i className="fa fa-home"></i>,
      },
      {
        path: "/user",
        name: "Home",
        icon: <i className="fa fa-home"></i>,
      },
    ],
  },
];

const Sidebar = ({ childern }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="dashboard">
      <div>
        {<Header />}

        {<Navbar isOpen={isOpen} toggle={toggle} />}
      </div>

      <div className="main-container">
        <motion.div
          animate={{ width: isOpen ? "380px" : "35px" }}
          className="sidebar"
        >
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <Menu
                    showAnimation={showAnimation}
                    route={route}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    key={route.name}
                  />
                );
              }
              return (
                <NavLink
                  to={route.path}
                  key={route.name}
                  className="link active"
                >
                  <div className="icons">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div className="link_text">
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        <main className="main content-wrapper">
          {childern}
          <Outlet />
        </main>
      </div>
      {<Footer />}
      
    </div>
  );
};

export default Sidebar;
