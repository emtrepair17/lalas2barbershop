import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa"; // Import icons

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div>
          <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <img src="/img/lalaslogo.png" width="160px" height="auto" alt="Everest Logo" />
          </div>
          <div style={{fontFamily: "futura-lt-w01-book,futura-lt-w05-book,sans-serif", textAlign:"center"}}>
            <Typography>1923 Baltimore-Reynoldsburg Rd, Reynoldsburg, OH 43068, United States</Typography>
            <Typography>+1 (740) 918-9526</Typography>
            <Typography>lalas2barbershop@gmail.com</Typography>
          </div>
        </div>

        {/* Social Media Links - Added this section */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="w-6 h-6 text-gray-700 hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-gray-700 hover:text-purple-500 transition-colors" />
          </a>
        </div>

        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright || `Copyright © ${year} Lalas2 Barber Shop (Inside Famous Barber)`}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ... rest of your code remains the same ...