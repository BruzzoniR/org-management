import "./Campo.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`
    //abajo, al destructurar, le asignamos a type el valor
    //text cada vez que este llegue como undefined
    const {type = "text"} = props 
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}/>
    </div>
}

export default Campo;