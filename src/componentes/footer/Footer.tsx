import './Footer.css'

function Footer(){
    return(
        <footer className='rodape' >
            <h1 className='info1' >Pamela Gonçalves</h1>
            <div className='div1'>
                <h2>Sobre Mim</h2>
                <a href="#">Informações</a>
                <a href="#">Currículo</a>
                <a href="#">Cursos</a>
            </div>
            <div className='div2'>
                <h2>Suporte</h2>
                <a href="#">Política de Privacidade</a>
                <a href="#">Termos e Condições</a>
            </div>
        </footer>
    )
}
export default Footer