import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //En React no usamos forEach, usamos el metodo map
    // arreglo.map( (equipo,index) => {
    //    return <option><option/>
    // })
    //
    //Lo de abajo era el array que usaba el map y crear
    //los selects con cada equipo
    //
    // const equipos = [
    //     "Programación",
    //     "Front End",
    //     "Data Science",
    //     "Devops",
    //     "UX y Diseño",
    //     "Móvil",
    //     "Innovación y Gestión"
    // ]

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            {/* Creamos una option "invisible" para cuando se despliega el select pero que este primera si no selecciona nada */}
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { props.equipos.map( (equipo,index) => {
                return <option key={index} value={equipo}>{equipo}</option> //se podria hacer todo en una sola linea quitando las llaves y el return
            })}
        </select>
    </div>
}

export default ListaOpciones;