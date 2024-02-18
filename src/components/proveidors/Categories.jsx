import React, { useContext } from "react";
import Context from "../../context/Context";

const Categories = () => {
  const {
    categories,
    handleCategoryClick,
    selectedCategory,
    getCategoryColor,
    filteredProveidors,
    renderProducts,
  } = useContext(Context);

  return (
    <div className=" grid place-content-center bg-slate-100 rounded-md">
      <div className="bg-neutral-50 shadow-md rounded-lg m-5 px-5">
        <h2 className="text-3xl font-bold mt-5 text-center">Productes</h2>
        <ul className="flex text-center content-center space-x-4">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`cursor-pointer w-24 my-5 px-3 py-5 rounded-md ${
                selectedCategory === category
                  ? `${getCategoryColor(
                      category
                    )} text-white text-lg font-semibold underline`
                  : `${getCategoryColor(
                      category
                    )} text-gray-800 hover:bg-gray-400 hover:text-white`
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
        {selectedCategory ? ( // Check if a category is selected
          <ul className="grid grid-cols-2 place-items-center ">
            {filteredProveidors.map((proveidor) => (
              <div key={proveidor.id}>
                <div className=" cursor-pointer flex gap-2 p-1 rounded-md bg-slate-100 w-32 my-2">
                  <li
                    onClick={() =>
                      document
                        .getElementById("my_modal_" + proveidor.id)
                        .showModal()
                    }
                    className="flex gap-2"
                  >
                    <div className="flex gap-2">
                      {" "}
                      <img
                        src={proveidor.image}
                        className="flex-1 rounded-xl h-10"
                        alt={proveidor.nombre}
                      />
                      <p className="pt-2 font-semibold">{proveidor.nombre}</p>
                    </div>
                  </li>
                </div>
                <dialog
                  id={"my_modal_" + proveidor.id}
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <div>
                      <h2 className="font-light">
                        {proveidor.nombre} ens proporciona......
                      </h2>
                      {renderProducts(proveidor)}
                      <div className="modal-action flex justify-center">
                        <form method="dialog">
                          <button className="bg-black text-white w-32 rounded-full py-1">
                            Tancar
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Categories;
