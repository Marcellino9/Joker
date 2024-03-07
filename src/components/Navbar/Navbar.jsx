import React from "react";
import "./Navbar.css";
import { GiAtomicSlashes } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import ENI from "../../assets/logoENI.png";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MenuLinks = [
  {
    name: "Acueil",
    link: "/",
  },
  {
    name: "Actualite",
    link: "/Actualiter",
  },
  {
    name: "Cours",
    link: "/cours",
  },
  {
    name: "Communeaute",
    link: "/commune",
  },
];
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div data-aos="fade-down" className="container py-4">
        <div className="flex items-center justify-between">
          {/* logo section */}
          <div className="flex items-center gap-4">
            <img src={ENI} className="w-1/6 h-auto" />
            <div className="flex flex-col text-2xl font-bold text-gray-600 leading-5">
              <span>ENI</span>
              <span>RoadMap</span>
            </div>
          </div>
          {/* links section */}
          <div className="hidden md:block">
            <ul className="center">
              {MenuLinks.map((data, index) => {
                return (
                  <li key={index}>
                    <a
                      className="navlink cursor-pointer"
                      onClick={() => navigate(`${data.link}`)}
                    >
                      {" "}
                      {data.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Search section */}
          <div className="flex items-center gap-6">
            <input
              type="text"
              placeholder="recherche"
              className="hidden sm:block py-2 px-3 rounded-full bg-slate-200"
            />
            <div className="bg-green-800 hover:bg-primary/80 p-3 rounded-full cursor-pointer">
              <FaSearch className="text-white text-sm" />
            </div>
            <div
              className="center navlink cursor-pointer"
              onClick={() => navigate("/Login")}
            >
              Se connecter
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
