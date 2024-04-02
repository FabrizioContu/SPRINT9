import React from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Marcadors from "./Marcadors";

function MapaProveidor() {
  const limeOptions = { color: "lime" };
  return (
    <div className="mx-5 md:mx-12 lg:mx-32 py-10">
      <h3 className="text-center font-bold text-3xl pb-14">
        Tots els nostres proveïdors a menys de 200Km
      </h3>
      <MapContainer
        center={[41.3743703, 2.1574336, 10]}
        zoom={8}
        scrollWheelZoom={false}
      >
        <Circle
          center={[41.8743703, 1.9574336]}
          pathOptions={limeOptions}
          radius={90000}
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marcadors />
      </MapContainer>
    </div>
  );
}

export default MapaProveidor;
