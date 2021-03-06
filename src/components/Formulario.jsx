import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [ nombre, setNombre ] = useState('');
  const [ propietario, setPropietario ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ fecha, setFecha ] = useState('');
  const [ sintomas, setSintomas ] = useState('');
  const [ error, setError ] = useState(false);

  useEffect(() => {
    if( Object.keys(paciente).length > 0 ) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    if([ nombre, propietario, email, fecha, sintomas ].includes('')) {
      console.log('Algun campo esta vacio');

      setError(true);
      return;
    }

    setError(false);

    // Objeto Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if(paciente.id) {
      // Editando el registro de paciente

      objetoPaciente.id = paciente.id

      // console.log(objetoPaciente);
      // console.log(paciente);

      // Creamos un array nuevo con los pacientes q estan y el que hemos editado, iteramos entre todos los pacientes y agregamos todos los q no tocamos mas el que hemos editado.
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState );

      setPacientes(pacientesActualizados);
      setPaciente({});

    } else {
      // Nuevo registro de paciente
      // pasar el objeto al componente ppal
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }


    // reiniciar el formulario
    useState('');
    useState('');
    useState('');
    useState('');
    useState('');
  }



  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Agrega Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administralos.</span>
      </p>

      <form
      onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5'
      >
        { error && <Error mensaje='Todos los campos son obligatorios' />}

        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input
            id= "mascota"
            type="text"
            placeholder='Nombre de la Mascota'
            className='boder-2 w-full p-2 mt-2 placeholder-orange-600 rounded-md'
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
          <input
            id= "propietario"
            type="text"
            placeholder='Nombre del Propietario'
            className='boder-2 w-full p-2 mt-2 placeholder-orange-600 rounded-md'
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
          <input
            id= "email"
            type="email"
            placeholder='test@gmail.com'
            className='boder-2 w-full p-2 mt-2 placeholder-orange-600 rounded-md'
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Fecha de Alta</label>
          <input
            id= "alta"
            type="date"
            className='boder-2 w-full p-2 mt-2 placeholder-orange-600 rounded-md'
            value={fecha}
            onChange={ (e) => setFecha(e.target.value) }
          />
        </div>

        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea
            id= "sintomas"
            type=""
            placeholder='Describe los sintomas.'
            className='boder-2 w-full p-2 mt-2 placeholder-orange-600 rounded-md'
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
          />
        </div>

        <input
          type="submit"
          value={ paciente.id ? "Editar Paciente" : "Agregar Paciente" }
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-orange-600 transition-all'
        />
      </form>
    </div>
  );
};

export default Formulario;