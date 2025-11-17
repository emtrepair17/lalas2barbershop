import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleNavClick = () => {
    setOpenNav(false);
  };

  const navList = (
    <ul className="mb-4 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
          onClick={handleNavClick}
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <NavLink
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-medium transition-colors duration-200"
              style={({ isActive }) => ({
                color: "#000",
                textDecorationLine: "none",
                fontWeight: "200",
                fontSize: "16px",
                letterSpacing: ".1em",
                color: "#000",
                fontStyle: "normal",
                fontFamily: "futura-lt-w01-light,futura-lt-w05-light,sans-serif",
                color: isActive ? "#3AAFA9" : "#17252A",
                textDecoration: isActive && "underline"
              })}
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </NavLink>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar className="p-2 w-full max-w-full z-[1000]">
      <div className="flex items-center justify-between w-full" style={{ color: "black" }}>
        {/* Logo on the Left */}
        <Link to="/">
          <Typography>
            <img src="/img/lalaslogo.png" width="80px" height="auto" alt="Everest Logo" />
          </Typography>
        </Link>

        {/* Centered Navigation Links */}
        <div className="hidden lg:flex flex-grow justify-center">
          {navList}
        </div>

        {/* Mobile Menu Toggle Button */}
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <MobileNav
        // className="rounded-xl bg-white px-4 text-blue-gray-900"
        open={openNav}
        sx={{backgroundColor:"#3AAFA9"}}
      >
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "Everest Multitech Logo",
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;