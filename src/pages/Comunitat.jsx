import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Comunitat() {
  const [proveidors, setProveidors] = useState([]);

  useEffect(() => {
    getProveidors();
  }, []);

  const getProveidors = () => {
    const ref = collection(db, "proveidors");
    getDocs(ref)
      .then((response) => {
        const provs = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setProveidors(provs);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <h1>Proveïdors</h1>
      <div className="flex-wrap gap-3 columns-2 ps-7 py-5 md:flex bg-gray-100 rounded-md">
        {proveidors.map((prov, index) => (
          <div className="flex" key={prov.id}>
            <div className="card w-72 bg-neutral-50 shadow-md mx-auto my-2">
              <figure className="px-5 pt-5">
                <img
                  src={prov.data.image}
                  alt={prov.data.nombre}
                  className="rounded-xl h-24"
                />
              </figure>

              <div className="card-body items-center text-center">
                <h2 className="card-title">{prov.data.nombre}</h2>
                <p>{prov.data.descripcion}</p>
                <div className="card-actions">
                  <button className="rounded-lg border-rose-800 border px-3 font-semibold my-5">
                    + info
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comunitat;
