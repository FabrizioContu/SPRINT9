import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Context from "../context/Context";

function Header() {
  const { LogoCircle, LaIgualitariaTextBlanc } = useContext(Context);
  return (
    <div className="navbar bg-[#508BBA] font-poppins">
      <div className="navbar-start">
        <details className="dropdown ps-5 md:ps-0">
          <summary className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
          </summary>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow dark:bg-base-100 bg-base-100 rounded-box w-80 ">
            <li>
              <NavLink to="/">inici</NavLink>
            </li>
            <li>
              <a tabIndex={-1} href="">
                comunitat
              </a>
              <ul className="p-2">
                <li>
                  <a tabIndex={0}>Nostres valors</a>
                </li>
                <li>
                  <a tabIndex={0}>Com decidim</a>
                </li>
                <li>
                  <NavLink to="/qui-som">Qui som</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/proveidors">Proveïdors</NavLink>
            </li>
          </ul>
        </details>
        <div className="flex justify-center lg:justify-around">
          <Link to="/">
            <img
              className="h-14 w-20 sm:h-28 sm:w-40 flex items-center  mx-10 rounded-full"
              src={LogoCircle}
              alt="Logo La Igualitaria"
            />
          </Link>
          <div>
            <img
              className="h-0 w-0 md:h-20 md:w-56 flex flex-shrink-0 items-center pt-5 ms-10"
              src={LaIgualitariaTextBlanc}
              alt="Logo La Igualitaria"
            />
          </div>
        </div>
      </div>
      <div className="navbar hidden lg:flex justify-end text-white">
        <ul className="menu menu-horizontal  px-1">
          <li className="text-lg">
            <a href="/">inici</a>
          </li>
          <li>
            <details className="text-lg">
              <summary tabIndex={0}>comunitat</summary>
              <ul className="p-2 w-72 bg-[#508BBA] text-lg">
                <li>
                  <NavLink to="/qui-som">qui som</NavLink>
                </li>
                <li>
                  <a tabIndex={-1}>com decidim</a>
                </li>
                <li>
                  <a tabIndex={-1}>nostres valors</a>
                </li>
              </ul>
            </details>
          </li>
          <li className="text-lg">
            <NavLink to="/proveidors">proveïdors</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex justify-center">
        <NavLink
          className="btn-ghost rounded-2xl py-1 px-2 text-white bg-pink-600 md:hover:bg-pink-700 "
          to="/fer-se-soci"
        >
          fes-te soci/a
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
