import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar.jsx";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Ice
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="./src/assets/logo/facebook.svg" alt="" />
          </a>
          <a href="#">
            <img src="./src/assets/logo/instagram.svg" alt="" />
          </a>
          <a href="#">
            <img src="./src/assets/logo/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
