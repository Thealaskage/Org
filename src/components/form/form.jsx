import { useState } from "react";
import "./form.css"
import Campo from "../campo";
import ListaOpciones from "../listaOpciones";
import Boton from "../boton";

const Form = (props) => {
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [ titulo, setTitulo] = useState("")
    const [ color, setColor] = useState("")

    //Destructuracion
    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (event) =>{
        event.preventDefault()
        console.log("Enviado")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar) 
    }

    const manejarNuevoEquipo = (event) =>{
        event.preventDefault()
        let datosEquipo = {
            titulo,
            colorPrimario: color
        }
        crearEquipo(datosEquipo)
    }
    return <section className="form">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                valor={nombre} 
                setValor={setNombre} 
                required/>
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                valor={puesto}
                setValor={setPuesto}
                required/>
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar Foto" 
                valor={foto}
                setValor={setFoto}
                required/>
            <ListaOpciones 
                valor={equipo}
                setValor={setEquipo}
                equipos={props.equipos}
                required/>
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo 
                titulo="Título" 
                placeholder="Ingresar Título" 
                valor={titulo} 
                setValor={setTitulo} 
                required/>
            <Campo
                titulo="Color" 
                placeholder="Ingresar Color en hex" 
                valor={color}
                setValor={setColor}
                type="color"
                required/>
            <Boton texto="Registrar Equipo"/>
        </form>
    </section>
}

export default Form;