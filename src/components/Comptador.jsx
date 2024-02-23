const Comptador = () => {
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center py-5">
      <div className="flex gap-2">
        {" "}
        <p className="text-2xl md:text-4xl pt-3 text-white">JA SOM</p>
        <p className="flex flex-col p-2 rounded-box text-neutral-content bg-pink-600">
          <span className="countdown font-mono text-5xl text-white ">
            <span style={{ "--value": 97 }}></span>
          </span>
        </p>
        <p className="text-2xl md:text-4xl pt-3 text-white">SÒCIES</p>
      </div>
    </div>
  );
};

export default Comptador;
