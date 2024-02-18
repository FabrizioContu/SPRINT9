const Comptador = () => {
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center py-5">
      <p className="text-4xl pt-3 font-semibold text-white">JA SOM</p>
      <div className="flex flex-col p-2 rounded-box text-neutral-content bg-rose-900">
        <span className="countdown font-mono text-5xl text-white ">
          <span style={{ "--value": 97 }}></span>
        </span>
      </div>
      <p className="text-4xl pt-3 font-semibold text-white">SÒCIES</p>
    </div>
  );
};

export default Comptador;
