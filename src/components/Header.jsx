import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";
import Nav from "./Nav";

function Header1() {
  const { LogoCircle, LaIgualitariaTextBlanc, LaIgualitariaText } =
    useContext(Context);
  return (
    <div className="">
      <div className="navbar bg-[#508BBA] p-4 font-semibold justify-center lg:justify-around">
        <div>
          <Link to="/">
            <img
              className="h-28 w-40 flex flex-shrink-0 items-center mx-10 rounded-full"
              src={LogoCircle}
              alt="Logo La Igualitaria"
            />
          </Link>
        </div>
        <div>
          <img
            className="h-0 w-0 md:h-20 md:w-56 flex flex-shrink-0 items-center ms-10"
            src={LaIgualitariaTextBlanc}
            alt="Logo La Igualitaria"
          />
        </div>
        <div className="navbar hidden md:flex">
          <nav className="menu menu-horizontal px-10 grow flex justify-end">
            <Nav />
          </nav>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" btn-ghost shadow-md rounded-md md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <nav
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] py-2 shadow bg-white rounded-box w-52"
          >
            <Nav />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header1;
