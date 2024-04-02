import React, { useContext } from "react";
import { Marker, Tooltip } from "react-leaflet";
import Context from "../../context/Context";

function Marcadors() {
  const { proveidors } = useContext(Context);

  return (
    <div>
      {proveidors.map((geo) => (
        <div key={geo.id}>
          <Marker position={geo.coordenadas}>
            <Tooltip className="">
              <p className="font-semibold">{geo.nombre}</p>
              <p>{geo.categoria}</p>
            </Tooltip>
          </Marker>
        </div>
      ))}
    </div>
  );
}

export default Marcadors;
