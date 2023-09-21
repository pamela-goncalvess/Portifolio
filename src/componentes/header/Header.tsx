import './Header.css'

function Header(){
    return(
        <header>
            <div className='logo-cabecalho'>  
        Pamela's Portfólio
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Página Inicial</a>
            </li>
          <li>
            <a href="#">Sobre</a>
            </li>
          <li>
            <a href="#">Currículo</a>
            </li>
          <li>
            <a href="#">Contatos</a>
            </li>
        </ul>
      </nav>
        </header>
    )
}
export default Header