import { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // el ordern de los useEffect es imporante pq se ejecutan en orden

  useEffect(() => {
    const obtenerLs = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      // console.log(pacientesLS);
      setPacientes(pacientesLS);

    }

    obtenerLs();
  },[]) // cuando pasas un array vacio, es para q se ejecute una sola vez

  useEffect(() => {
    // console.log('Componente Listo o cambio pacientes');

    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = (id) => {
    // console.log('Eliminando el paciente ', id);

    // uso filter y creo un nuevo arreglo donde me traigo todos los pacientes excepto el del id igual.
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id )

    // console.log(pacientesActualizados);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App