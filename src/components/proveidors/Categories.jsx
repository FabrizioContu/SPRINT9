import { useContext } from "react";
import Context from "../../context/Context";
import IconVerdures from "../../assets/verdures.png";
import IconFruites from "../../assets/fruites.png";
import IconLactics from "../../assets/lactics.png";
import IconLlegums from "../../assets/llegums.png";

const categoryIcons = {
  verdures: IconVerdures,
  fruites: IconFruites,
  lactics: IconLactics,
  llegums: IconLlegums,
};

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
      <div className=" m-5 px-5">
        <h2 className="text-3xl font-bold mt-5 text-center text-black">
          Productes
        </h2>
        <ul className="flex shrink text-center content-center gap-3">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`cursor-pointer text-black text-sm w-24 h-24 py-3 md:text-base md:w-32 md:h-32 my-5 px-3 md:py-5 rounded-full ${
                selectedCategory === category
                  ? `${getCategoryColor(
                      category
                    )} text-white text-lg font-semibold underline`
                  : `${getCategoryColor(category)}  hover:text-white`
              }`}
            >
              <div className="flex flex-col items-center shrink">
                {categoryIcons[category] && (
                  <img
                    src={categoryIcons[category]}
                    alt={category}
                    className="h-10 w-10 md:h-12 md:w-12  mb-2 dark:text-dark"
                  />
                )}
                {category}
              </div>
            </li>
          ))}
        </ul>
        {selectedCategory ? ( // Check if a category is selected
          <ul className="grid grid-cols-2 place-items-center bg-slate-50 shadow-sm rounded-md ">
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
