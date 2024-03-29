import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="">
      <nav className="flex font-poppins gap-5 menu-vertical md:menu-horizontal rounded-lg text-lg space-x-1 text-[#508BBA] md:text-white">
        <div className="btn-ghost rounded-md py-1 px-2">
          <NavLink to="/">inici</NavLink>
        </div>{" "}
        <div className="btn-ghost rounded-md p-1">
          <NavLink to="/qui-som">qui som</NavLink>
        </div>{" "}
        <div className="btn-ghost rounded-md p-1">
          <NavLink to="/comunitat">comunitat</NavLink>
        </div>{" "}
        <div className="btn-ghost rounded-md p-1">
          <NavLink to="/proveidors">proveïdors</NavLink>
        </div>
        <div className="btn-ghost rounded-2xl py-1 px-2 text-white bg-pink-600 md:hover:bg-pink-700 ">
          <NavLink to="/fer-se-soci">fes-te soci/a</NavLink>
        </div>{" "}
      </nav>
    </div>
  );
}

export default Nav;
