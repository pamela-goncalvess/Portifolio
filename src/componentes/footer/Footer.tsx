import './Footer.css'

function Footer(){
    return(
        <footer className='rodape' >
            <h1 className='info1' >Pamela Gonçalves</h1>
            <h2  className='info2'>Portfólio</h2>
            <div className='div1'>
                <h2>Sobre Mim</h2>
                <a className='infos' href="#">Informações</a>
                <a className='infos' href="#">Currículo</a>
                <a className='infos' href="#">Cursos</a>
            </div>
            <div className='div2'>
                <h2>Suporte</h2>
                <a className='infos2' href="#">Política de Privacidade</a>
                <a className='infos2' href="#">Termos e Condições</a>
            </div>
        </footer>
    )
}
export default Footer