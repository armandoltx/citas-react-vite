import { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

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