import './Footer.css'
import LogoFacebook from '../../assets/iconeFacebook.png'
import LogoInstagram from '../../assets/iconeInstagram.png'

export default function Footer(){
    return(
        <footer>
            <div className="titulo_rodape">
                <h1 className='titulo_rodape1'>Pamela Gonçalves</h1>
                
                <div className='img'>
                    <img src={LogoFacebook} alt="" />
                    <img src={LogoInstagram} alt="" />
                </div>
            </div>
            <div className="info_rodape">

                <div className='info_rodape1'>
                    <ul>
                        <li><a href="#">Sobre Mim:</a></li>
                        <li><a href="#">Informações</a></li>
                        <li><a href="#">Currículo</a></li>
                        <li><a href="#">Cursos</a></li>
                    </ul>
                </div>

                <div className='info_rodape1'>
                    <ul>
                        <li><a href="#">Suporte: </a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Termos e Condições</a></li>
                        <li><a href="#">Saiba mais</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}