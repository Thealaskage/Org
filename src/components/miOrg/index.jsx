import "./miOrg.css";

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //const [nombreVariable, funcionAcualizar] = useState("valorInicial")
    // const[mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar formulario", mostrar)
    //     actualizarMostrar(!mostrar)
    // }
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>

    </section>
}

export default MiOrg;