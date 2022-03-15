const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className=" font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
        <span className=" font-normal normal-case">Juan</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className=" font-normal normal-case">test@2.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
        <span className=" font-normal normal-case">10 Diciem bre 2023</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
        <span className=" font-normal normal-case">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam asperiores culpa dicta corrupti harum sint temporibus, odit officiis iure vero quia ipsa magni aliquid aut repellendus hic eum debitis ipsum.</span>
      </p>
    </div>
  );
};

export default Paciente;