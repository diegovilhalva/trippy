import "./Footer.css"
import { FaBehance, FaFacebook, FaInstagram, } from "react-icons/fa6"
import { BsTwitterX } from "react-icons/bs"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="top">
                <div>
                    <h1>Trippy</h1>
                    <p>Explore, Sonhe, Viaje: Seu Mundo, Suas Aventuras!</p>
                </div>
                <div>
                    <a href="">
                        <FaFacebook />
                    </a>
                    <a href="">
                        <FaInstagram />
                    </a>
                    <a href="">
                        <FaBehance />
                    </a>
                    <a href="">
                        <BsTwitterX />
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Projeto</h4>
                    <a href="">Changelog</a>
                    <a href="">Status</a>
                    <a href="">Licença</a>
                    <a href="">Versões</a>
                </div>
    
                <div>
                    <h4>Comunidade</h4>
                    <a href="">GitHub</a>
                    <a href="">Discord</a>
                    <a href="">Telegram</a>
                    <a href="">Twitch</a>
                </div>
                <div>
                    <h4>Ajuda</h4>
                    <a href="/">Suporte</a>
                    <a href="/">Chat</a>
                    <a href="/">Contato</a>
                </div>
                <div>
                    <h4>Outros</h4>
                    <a href="/">Política de Privacidade</a>
                    <a href="/">Termos de Uso</a>
                    <a href="/">Política de Cookies</a>
                    
                </div>


            </div>
        </footer>
    )
}

export default Footer