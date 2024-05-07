import { useContext } from "react";
import Context from "../../context/Context";

const DetallProveidor = () => {
  const { proveidors, getCategoryColor, renderProducts } = useContext(Context);

  return (
    <div className="flex-wrap gap-3 columns-2 ps-7 py-5 md:flex bg-gray-100 rounded-md">
      {proveidors.map((prov) => (
        <div className="flex justify-center " key={prov.id}>
          <div className="card w-36 sm:w-56 bg-neutral-50 shadow-md my-2">
            <figure className="px-3 pt-5">
              <img
                src={prov.image}
                alt={prov.nombre}
                className="rounded-xl h-24 "
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-black">{prov.nombre}</h2>
              <p className="hidden md:display">{prov.descripcion}</p>
              <div className="card-actions">
                <a
                  href="" // {prov.url}
                  target="_blank"
                  className="rounded-lg border-rose-800 border px-3 font-semibold my-5"
                >
                  + info
                </a>
              </div>
              <div className="card-actions">
                <button
                  className={`badge border-none py-5 w-28 md:w-36 text-lg font-semibold text-white ${getCategoryColor(
                    prov.categoria
                  )}`}
                  onClick={() =>
                    document.getElementById("my_modal_" + prov.id).showModal()
                  }
                >
                  {prov.categoria}
                </button>

                <dialog
                  id={"my_modal_" + prov.id}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <div>
                      <h2 className="font-light">
                        {prov.nombre} ens proporciona {prov.descripcion}
                      </h2>
                      {renderProducts(prov)}
                      <div className="modal-action flex justify-center">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}{" "}
                          <button className=" bg-black text-white w-32 rounded-full py-1">
                            Tancar
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetallProveidor;
