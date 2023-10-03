import './Contato.css'
import '../header/Header'

 function Contato(){
    return(
       <>
            <form action="tela-contato">
                <div>
                    <label htmlFor="primeiro-nome">Primeiro Nome:</label>
                    <input type="texto" id="primeiro-nome" name="primeiro-nome-usuario"></input>
                </div>
                <div>
                    <label htmlFor="ultimo-nome">Último Nome:</label>
                    <input type="texto" id="ultimo-nome" name="ultimo-nome-usuario"></input>
                </div>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email-usuario"></input>
                </div>
                <div>
                    <label htmlFor="mensagem">Digite sua mensagem:</label>
                    <textarea  id="texto" name="mensagem-usuario"></textarea>
                </div>
                    <div className="botao-enviar">
                    <button type="submit">Enviar Mensagem</button>
                </div>
            </form>

       </>
    )
}
export default Contato      

