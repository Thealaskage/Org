import "./listaOpciones.css";

const ListaOpciones = (props) => {
    //Metodo map -> arreglo.map((elemento, index) => {
        //  return <option key={index}>{elemento}</option>)
    //})

    const onChange = (event) => {
        props.setValor(event.target.value)
    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={onChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { props.equipos.map((equipo, index) => {
                return <option key = {index}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones;