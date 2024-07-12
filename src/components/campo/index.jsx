import './campo.css'

const Campo = (props) => {
    //const [valor, setValor] = useState("")
    const placeHolderModificado = `${props.placeholder}...`
    // Destruturacion de props
    const {type = "text"} = props
    const onChange = (event) => {
        props.setValor(event.target.value)
    }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeHolderModificado}
            required={props.required} 
            value={props.valor}
            onChange={onChange}
            type={type}   
        />
    </div>
}

export default Campo;