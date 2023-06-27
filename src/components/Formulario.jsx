import { useState, useEffect } from "react";
import Input from "./Input";
import Error from "./Error";
import Pacientes from "./Pacientes";
const Formulario = ({ pacientes, setPacientes, paciente}) => {
   const [nombre, setNombre]=useState('');
   const [propietario, setPropietario ]=useState('');
   const [email, setEmail ]=useState('');
   const [fecha, setFecha ]=useState('');
   const [sintomas, setSintomas ]=useState('');
   const [error, setError ]=useState(false);
   useEffect(() => {
    if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
   }, [paciente])
   
   
   const generarId=()=>{
    const random=Math.random().toString(36).substring(2);
    const fecha=Date.now().toString(36)
     return random + fecha;
   }
const handleSubmit=(e)=>{
e.preventDefault();

//validación del formulario
if([nombre, propietario,email,fecha,sintomas].includes('')){
    console.log('Hay al menos un campo vacio')
    setError(true)
    return;
}

setError(false);

//Objeto Paciente

const objetoPaciente={
  nombre,
   propietario,
   email,
   fecha,
   sintomas
   
}

if(paciente.id){
  //Editando registro
  objetoPaciente=paciente.id
  const pacientesActualizados=pacientes.map(
    pacienteState=>pacienteState.id ===paciente.id ?objetoPaciente:pacienteState )
    setPacientes(pacientesActualizados)
}else{
  //Nuevo registro
  objetoPaciente.id= generarId();
  setPacientes([...pacientes, objetoPaciente]);

}

 //Reinciar el form
 setNombre('');
 setPropietario('');
 setEmail('');
 setFecha('');
 setSintomas('');

}
  return (
    <div className=" md:w-1/2 lg:w-2/5 mx-5 my-10">
      <h2 className="font-black text-2xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg  mt-5 text-center mb-10">
        Añade Pacientes{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error&& <Error>Todos los campos son obligatorios</Error> }
  <Input
    id="mascota"
    label="Nombre Mascota"
    placeholder="Nombre de la mascota"
    type="text"
    value={nombre}
    onChange={(e)=>setNombre(e.target.value)}
  />
  <Input
    id="propietario"
    label="Nombre Propietario"
    placeholder="Nombre del propietario"
    type="text"
    value={ propietario}
    onChange={(e)=>setPropietario(e.target.value)}
  />
  
  <Input
    id="email"
    label="Correo Electrónico"
    placeholder="correo@example.com"
    type="email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
  />
  
  <Input
    id="fecha"
    label="Fecha"
    placeholder="Seleccione una fecha"
    type="date"
    value={fecha}
    onChange={(e)=>setFecha(e.target.value)}
  />
  <Input
    id="sintomas"
    label="Sintomas"
    placeholder="Describa los sintomas"
    type="textarea"
    value={sintomas}
    onChange={(e)=>setSintomas(e.target.value)}
  />
  <input
    type="submit"
    value={paciente.id ?'Editar Paciente':'Agregar Paciente'}
    className="bg-indigo-600 hover:bg-blue-400 w-full uppercase text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer transition-all"
  />
</form>


    </div>
  );
};

export default Formulario;
