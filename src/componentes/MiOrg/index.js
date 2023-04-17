import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //useState()
    //const [nombreVariable, funcionActualizadora] = useState(valorInicial)
    //con funcionActualizadora(siguienteValor) podemos ir cambiando los estados
    
    
    // const [mostrar,actualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="titulo">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg