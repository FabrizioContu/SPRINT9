import React from "react";
import quisom from "../assets/qui_som.jpg";

function QuiSom() {
  return (
    <div className="text-left mx-24 space-x-2 py-10">
      {" "}
      <div className="mb-16">
        {" "}
        <h1 className="text-3xl font-bold">
          SOM: Cooperativa de Treball Associat a Barcelona
        </h1>
        <p>
          Una cooperativa dedicada al comerç de productes procedents de
          l’agroecologia, amb la voluntat d’oferir als nostres associats la
          millor alimentació.
        </p>
        <h2 className="text-3xl font-semibold">
          Oferim les Millors Condicions
        </h2>
        <p>
          Les millors condicions de preu, qualitat i equitat social en la tria
          dels productes, amb l'objectiu de garantir el dret fonamental de tot
          ciutadà a una alimentació sense productes químics ni manipulacions
          transgèniques. Tot això assegurant que els processos implicats en la
          creació i distribució d’aquests béns incorporin valor social i
          ambiental. Una alimentació de qualitat, produïda èticament i a preus
          justos tant pel productor com pel consumidor.
        </p>
        <h2 className="text-3xl font-semibold">Busquem un Futur Sostenible</h2>
        <p>
          Mitjançant el consum, treballem a favor de l’agroecologia i la
          sobirania alimentària. Fomentem el consum conscient, promovem les
          relacions intercooperatives i la xarxa de barri, i difonem els
          principis del cooperativisme i la transformació social.
        </p>
      </div>
      <div className="">
        <img
          className="rounded-xl md:rounded-none my-5"
          src={quisom}
          alt="Qui som"
        />
      </div>
      <div className="hero-overlay bg-opacity-60">
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <img
              alt="daisy"
              src="https://c.pxhere.com/photos/ec/13/field_farming_crop_rural_track-99274.jpg!d"
              srcset="https://c.pxhere.com/photos/ec/13/field_farming_crop_rural_track-99274.jpg!d"
            />
          </div>
          <div className="diff-item-2">
            <img
              alt="daisy"
              src="https://c.pxhere.com/photos/f8/df/field_grass_crop_sky_nature_rural_agriculture_farm-1067111.jpg!d"
            />
          </div>
          <div className="diff-resizer"></div>
        </div>
      </div>
      <div className="">
        <h3 className="text-3xl font-semibold flex self-start">
          FINANÇAMENT OBRES
        </h3>
        <p className="font-semibold flex self-start py-3">
          El local necessita adequació i posada a punt per a l'obertura com a
          local comercial:
        </p>
        <ul className="text-left py-2">
          <li className="">
            Projecte arquitectònic (botiga, office i lavabo).
          </li>
          <li>Adequació climàtica i instal·lació elèctrica </li>
          <li>Enginyeria i fusteria</li>
          <li>
            Mobiliari i equipaments (prestatgeries, rotulació, dispensadors i
            cambra frigorífica)
          </li>
          <li>Equipaments i programa informàtic, TPV </li>
        </ul>

        <p className="flex self-start font-semibold">
          En total, uns 55.000€ per fer possible el projecte.
        </p>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow my-16">
        <div className="stat">
          <div className="stat-title font-bold text-sm bg-red-200 px-1 rounded-md">
            CAPITAL OBLIGATORI
          </div>
          <div className="stat-value">7.500€</div>
          <div className="stat-desc">en base a 150 socies</div>
        </div>

        <div className="stat">
          <div className="stat-title font-bold text-sm bg-amber-200 rounded-md px-1">
            APORTACIONS VOLUNTARIES
          </div>
          <div className="stat-value">15.000€</div>
          <div className="stat-desc">_</div>
        </div>

        <div className="stat">
          <div className="stat-title font-bold text-sm bg-slate-300 rounded-md">
            PRESTEC
          </div>
          <div className="stat-value">32.500€</div>
          <div className="stat-desc">entitat finançes etiques</div>
        </div>
        <div className="stat content-center">
          <p className="text-5xl font-semibold">=</p>
        </div>
        <div className="stat">
          <div className="stat-title font-bold text-sm bg-lime-200 px-1 rounded-md">
            CAPITAL TOTAL
          </div>
          <div className="stat-value text-green-700">55.000€</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
      </div>
    </div>
  );
}

export default QuiSom;
