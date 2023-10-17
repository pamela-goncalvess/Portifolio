import './Header.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
      <>
        <header>
            <div className='logo-cabecalho'>  
        <Link to="/">Pamela's Portfólio</Link>
            </div>
                <nav>
                <ul>
                    <li>
                       <Link to="/">Página Inicial</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/curriculo">Cúrriculo</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
                </nav>
        </header>
        </>
    )
}
export default Header