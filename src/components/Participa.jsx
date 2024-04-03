import { Link } from "react-router-dom";

import Comptador from "./Comptador";

function Participa() {
  return (
    <div className="grid md:grid-flow-col font-poppins bg-[#508BBA] p-10 rounded-xl md:rounded-none">
      <div className=" text-white pt-1 ">
        <Comptador />
      </div>

      <div className="mt-7 text-center">
        {" "}
        <Link to="/fer-se-soci">
          <button className="flex-auto w-32 py-2 px-1 bg-pink-600 text-white text-lg rounded-lg shadow-md hover:bg-pink-700 ">
            Fes-te socia!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Participa;
