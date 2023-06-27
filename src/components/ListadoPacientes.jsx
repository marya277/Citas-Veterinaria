import Pacientes from "./Pacientes";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="mx-3 my-10 w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-2xl text-center">Listado de Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map(paciente => (
            <Pacientes key={paciente.id} 
            paciente={paciente}  
            setPaciente={setPaciente} 
            eliminarPaciente={eliminarPaciente}/>
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-2xl text-center">No hay Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando Pacientes <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
