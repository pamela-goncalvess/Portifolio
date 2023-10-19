import './Contato.css'
import '../header/Header'
import {useState} from "react"

 function Contato(){
    const [nome, setNome] = useState("")  
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  function mudaNome(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setNome(e.target.value)
  }
  function mudaEmail(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setEmail(e.target.value)
  }
  function mudaMensagem(e:React.ChangeEvent<HTMLInputElement>){
    console.log(e.target.value)
    setMensagem(e.target.value)
  }

    return(
       <>
       <div className='titulo-contato'>
            <p>Entre em contato:</p>       
       </div>
        <form className="tela-contato">
                <div>
                    <label htmlFor="nome">Nome: {nome}</label>
                    <input type="texto" id="nome" name="nome-usuario" onChange={mudaNome}></input>
                </div>
                <div>
                    <label htmlFor="email">Email:{email}</label>
                    <input type="email" id="email" name="email-usuario"  onChange={mudaEmail}></input>
                </div>
                <div>
                    <label htmlFor="mensagem">Digite sua mensagem: {mensagem} </label>
                    <input  id="texto" name="mensagem-usuario" onChange={mudaMensagem}></input>
                </div>
                <div >
                    <button className="botao" type="submit">Enviar Mensagem</button>
                </div>
        </form>
       </>
    )
}
export default Contato