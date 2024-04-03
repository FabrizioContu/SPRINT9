import heroProveidors from "../assets/heroProveidors.jpeg";
import DetallProveidor from "../components/proveidors/DetallProveidor";
import Categories from "../components/proveidors/Categories";

import MapaProveidor from "../components/proveidors/MapaProveidor";

function Proveidors() {
  return (
    <div className="font-poppins">
      <div
        className="hero aspect-video rounded-b-lg"
        style={{
          backgroundImage: `url(${heroProveidors})`,
        }}
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-xl">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              Productes i proveïdors
            </h1>
            <p className="mb-5">
              Els nostres agricultors conreen les fruites i verdures amb cura
              perquè tinguin la millor qualitat i el millor sabor, encara que
              siguin imperfectes
            </p>
          </div>
        </div>
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <DetallProveidor />
      </div>
      <div className="bg-slate-100">
        <MapaProveidor />
      </div>
    </div>
  );
}

export default Proveidors;
