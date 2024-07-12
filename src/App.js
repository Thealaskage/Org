import './App.css';
import Header from './components/header/header';
import Form from './components/form/form';
import MiOrg from './components/miOrg';
import { useState } from 'react';
import Equipo from './components/equipo';
import Footer from './components/footer';
import { v4 as uuid } from 'uuid';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Juan Perez",
    puesto: "Desarrollador",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/thealaskage.png",
    nombre: "Ana Lopez",
    puesto: "Diseñador",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Data Science",
    foto: "https://ca-times.brightspotcdn.com/dims4/default/1b97790/2147483647/strip/true/crop/2177x1456+0+0/resize/1200x803!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fcd%2F8d%2Fd2f050b200bf58bc2ce2af1934a5%2F8ba450aaba2d40d7b199b1f296f399cc",
    nombre: "Pedro Ramirez",
    puesto: "Data Scientist",
    fav: true
  },
  {
    id: uuid(),
    equipo: "DevOps",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Maria Rodriguez",
    puesto: "DevOps Engineer",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/christianpva.png",
    nombre: "Luisa Martinez",
    puesto: "UX Designer",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Móvil",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Carlos Sanchez",
    puesto: "Desarrollador Móvil",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXb-0Z9aZ-JX_rw9o6pIoXaWU-K6KTV-aMA&s",
    nombre: "Sofia Perez",
    puesto: "Gerente de Proyectos",
    fav: false
  
  }

  ])
  const [equipos, setEquipos] = useState([
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario:"57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario:"#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario:"#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuid(),
        titulo: "DevOps",
        colorPrimario:"$E06EB69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario:"#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario:"#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario:"#FF8A29",
        colorSecundario: "#FFEEDF"
      }
    ]
  )

  // corto circuito
  // condicion && muestraEsto
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    console.log(colaborador)
    //Spread operator
    setColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }
  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log(color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    setEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, nuevoEquipo])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    setColaboradores(colaboradoresActualizados)
  }


  return (
    <div>
      <Header/>
      { mostrarFormulario && <Form 
            equipos={equipos.map((equipo) => equipo.titulo)}
            registrarColaborador={registrarColaborador}
            crearEquipo={crearEquipo}
            />}

      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) => {
          return <Equipo 
          key={equipo.titulo} 
          equipos={equipo}
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like = {like}
          />
        })
      }
      <Footer/>
    </div>
  );
}

export default App;
