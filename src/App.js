import { useState } from 'react';
import { v4 as uuid} from "uuid";
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Header from './componentes/Header/Header';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo'
import Footer from './componentes/Footer';

function App() {
  //el hook se tiene que colocar antes del return
  const [mostrarFormulario,actualizarMostrar]=useState(false)

  const [colaboradores,actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }
  ])
  
  const [equipos,actualizarEquipos]=useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
    }
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    //Spread operator: [...arreglo,valorParaAgregar] asi copia lo que habia y devuelve con lo nuevo
    actualizarColaboradores([...colaboradores,colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) =>{
    const nuevosColanoradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
    actualizarColaboradores(nuevosColanoradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color,id) =>{
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo,id:uuid()}])
  }

  //Dar like
  const like = (id) =>{
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />

      {/*Ternario --> condicion ? seMuestra : noSeMuestra
        si se cumple la condicion hace seMuestra, sino hace noSeMuestra
        Se puede simplificar asi: condicion && accion
        si se cumple condicion, realiza la accion, sino, no hace nada*/}

      { 
        mostrarFormulario && <Formulario
        equipos={equipos.map( (equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />}

      {/* enviamos por props a MiOrg la funcionalidad de cambiarMostrar */}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map( (equipo,index)=>{
          return <Equipo 
                    datos={equipo} 
                    key={equipo.titulo}
                    colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
                    eliminarColaborador={eliminarColaborador}
                    actualizarColor={actualizarColor}
                    like={like} />
        })
      }

      <Footer />
    </div>
  );
}

export default App;
