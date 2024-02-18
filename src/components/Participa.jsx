import React from "react";

import { Link } from "react-router-dom";

import Comptador from "./Comptador";

function Participa() {
  return (
    <div className="grid md:grid-flow-col bg-[#508BBA] p-10 rounded-xl md:rounded-none">
      <div className=" font-semibold text-white pt-1 ">
        <Comptador />
      </div>

      <div className="mt-7 text-center">
        {" "}
        <Link to="/fer-se-soci">
          <button className="flex-auto w-32 p-3 bg-rose-800 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-rose-900 ">
            Fes-te socia!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Participa;
