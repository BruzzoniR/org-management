import Colaborador from "../Colaborador"
import "./Equipo.css"
//importamos el paquete de hexToRgba para manejar
//la relacion entre el color primario y el secundario
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {  
    
    //Destructuracion: saca de un objeto las keys
    //y las convierte en variables para utilizar
    //sin declarar y asignar cada una de ellas

    const { colorPrimario,titulo,id } = props.datos

    const {colaboradores,eliminarColaborador,actualizarColor,like} = props

    const obj = {
        backgroundColor: hexToRgba(colorPrimario,0.6),
    }

    const colorSubrayado = {
        borderBottomColor:colorPrimario
    }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="inputColor"
                    value={colorPrimario}
                    onChange={(e)=>{actualizarColor(e.target.value,id)}}
                />
                <h3 style={colorSubrayado}>{titulo}</h3>
                <div className="colaboradores">

                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>

            </section>
        }
    </> 
}

export default Equipo