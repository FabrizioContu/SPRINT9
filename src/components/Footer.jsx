import React, { useContext } from "react";
import WaveBottom from "../assets/waveBottom.png";

import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import Context from "../context/Context";
import { Link, NavLink } from "react-router-dom";
import Map from "./Map";

function Footer() {
  const { LogoBillet, somLaClau, logos_peu } = useContext(Context);
  return (
    <div className="font-">
      <div className="">
        <img className="w-screen h-32" src={WaveBottom} alt="wave" />
      </div>
      <footer className="footer p-10 bg-slate-500 text-white text-base">
        <div className="bg-slate-400">
          <Map />
        </div>
        <div className="">
          <Link to="/">
            <img
              className="h-36 w-48 flex items-center"
              src={LogoBillet}
              alt="Logo La Igualitaria"
            />
          </Link>

          <div className="ps-3">
            <p>
              Carrer Vallhonrat, 18 <br /> 08004 Poble Sec, Barcelona <br />
            </p>
            <p className="py-2">
              <a href="mailto:laigualitaria@cooperasec.org">
                laigualitaria@cooperasec.org
              </a>
            </p>
          </div>
        </div>

        <nav className="pt-3 ">
          <h6 className="footer-title">MENÚ</h6>
          <NavLink className="" to="/qui-som">
            qui som
          </NavLink>
          <NavLink to="/fer-se-soci">fes-te soci/a</NavLink>
          <NavLink to="/comunitat">comunitat</NavLink>
          <NavLink to="/proveidors">proveïdors</NavLink>
        </nav>
        <nav className="pt-3">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Termins y condicions</a>
          <a className="link link-hover">Politica de privadesa</a>
          <a className="link link-hover">Politica de galletas</a>
        </nav>
      </footer>
      <footer>
        <div className=" bg-gradient-to-t  from-slate-700 to-slate-500 grid grid-rows grid-flow-col-2 py-5 justify-center">
          <div className="pb-5 flex justify-center">
            <Link to="/">
              <img
                className="h-10 w-25 rounded-lg"
                src={somLaClau}
                alt="Logo SomLaClau"
              />
            </Link>
          </div>
          <div className="">
            <Link to="/">
              <img
                className="h-10 w-25 rounded-lg bg-white p-1"
                src={logos_peu}
                alt="Logos_peu"
              />
            </Link>
          </div>
          <div className=" p-2 text-neutral-content text-center">
            <aside className="">
              <p>Copyright © 2024 - All right reserved</p>
            </aside>
            <div className=" social text-white text-3xl flex justify-center ">
              <ul className="flex">
                <li className="m-1 py-2">
                  <a href="https://www.facebook.com/laigualitariaeconomatcoop">
                    <FaFacebook />
                  </a>
                </li>
                <li className="m-1 py-2">
                  <a href="https://www.instagram.com/laigualitaria_economatcoop">
                    <FaInstagram />
                  </a>
                </li>
                <li className="m-1 py-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=34123456789"
                    target="_blank"
                  >
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
