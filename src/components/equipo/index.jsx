import Colaborador from "../colaborador";
import "./equipo.css";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destrucción de props

    const {titulo, colorPrimario, colorSecundario, id} = props.equipos;
    const {colaboradores, eliminarColaborador, actualizarColor, like } = props;

    const estiloBackground = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }
    return <>
        { 
        colaboradores.length > 0 && 
            <section className="equipo" style={estiloBackground}>
            <input
                type="color"
                className="input-color"
                value={hexToRgba(colorPrimario, 0.6)}
                onChange={(e) => {
                    actualizarColor(e.target.value, id);
                }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) =>{
                        return <Colaborador datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                            />
                    })
                }
            </div>
        </section>
        }
    </>
}
export default Equipo;