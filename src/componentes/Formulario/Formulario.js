import { useState } from 'react'
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    //creamos variables para almacenar los estados de cada input
    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const [titulo,actualizarTitulo] = useState("")
    const [color,actualizarColor] = useState("")

    const {registrarColaborador,crearEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        //creamos un objeto que centralice todos los datos de los inputs
        let datosAEnviar = {
            nombre:nombre,  //si tiene mismo nombre llave(key) y valor(value) 
            puesto:puesto,  //se puede simplificar poniendo el nombre solo una vez
            foto:foto,
            equipo:equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingrese el nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre} />
            <Campo 
                titulo="Puesto"
                placeholder="Ingrese el puesto" 
                required
                valor = {puesto}
                actualizarValor = {actualizarPuesto} />
            <Campo 
                titulo="Foto" 
                placeholder="Ingrese el enlace de foto" 
                required
                valor = {foto}
                actualizarValor = {actualizarFoto} />
            <ListaOpciones
                valor = {equipo}
                actualizarValor = {actualizarEquipo}
                equipos = {props.equipos} />
            <Boton texto="Crear" />
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Título" 
                placeholder="Ingrese el título" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo} />
            <Campo 
                titulo="Color"
                placeholder="Ingrese el color en Hex" 
                required
                valor = {color}
                actualizarValor = {actualizarColor}
                type= "color" 
                />
            <Boton texto="Registrar equipo" />
        </form>
    </section>
}

export default Formulario  