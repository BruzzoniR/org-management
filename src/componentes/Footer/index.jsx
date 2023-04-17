import "./Footer.css"
import {AiFillGithub,AiFillLinkedin,AiOutlineMail} from "react-icons/ai"

const Footer = () =>{
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>

    <div className='redes'>
        <a href="https://github.com/BruzzoniR/">
            <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/roberto-bruzzoni/">
            <AiFillLinkedin />
        </a>        
        <a href="mailto:bruzzoni.r@gmail.com">
            <AiOutlineMail />
        </a>
    </div>
    <img src="/img/Logo.png" alt="org" />
    <strong>Desarrollado por Roberto Martín Bruzzoni</strong>
    </footer>


}

export default Footer