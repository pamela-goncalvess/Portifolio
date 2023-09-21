import { useState } from "react";
import Trabalhos from "../trabalhos/Trabalhos";
import './Main.css'
type TrabalhosType = {
    id: number,
    titulo:string,
    resumo:string,
    imagem:string
}
export default function Main(){
    //Hook
    const [texto,setTexto] = useState("")

    const trabalhos:TrabalhosType[] = [
        {
            id:1,
            titulo:" Bairro Inteligente",
            resumo:"Trabalho sobre Bairro Inteligente, feito em 2023.",
            imagem:"/Trabalho_bairroInteligente.png"
        },
        {
            id:2,
            titulo:"Boutique Modas",
            resumo:"Protótipo de wireframe de baixa fidelidade do cadastro de uma loja de roupas , feito em  2022.",
            imagem:"/Trabalho_boutique.png"
        },
        {
            id:3,
            titulo:"Trabalho de Conclusão de Curso",
            resumo:"Trabalho de conclusão de curso sobre um aplicativo de coleta seletiva para Naviraí-MS , que está sendo feito em 2023.",
            imagem:"Trabalho_tcc.png"
        },
        {
            id:4,
            titulo:"Tabuleiro - Poluição Hídrica",
            resumo:"Protótipo de wireframe de alta fidelidade de um tabuleiro de poluição hídrica, feito em 2023.",
            imagem:"Trabalho_tabuleiro.png"
        },
        {
            id:5,
            titulo:"CinePipoca",
            resumo:"Protótipo de wireframe de alta fidelidade sobre um site de filmes, feito em 2022.",
            imagem:"Trabalho_cine.png"
        },
        {
            id:6,
            titulo:"Fenóis e Éteres",
            resumo:"Slide de apresentação sobre Fenóis e Éteres, feito em 2023.",
            imagem:"Trabalho_fenolEter.png"
        },
        {
            id:7,
            titulo:"Irrigação",
            resumo:"Trabalho em sala sobre o arduino no sistema de irrigação, feito em 2023.",
            imagem:"Trabalho_irrigação.png"
        },
        {
            id:8,
            titulo:"Virtual Book Store",
            resumo:"Protótipo de wireframe de alta fidelidade sobre um site de livraria, feito em 2022.",
            imagem:"Trabalho_livraria.png"
        },
        {
            id:9,
            titulo:"Pet's Love Brasil",
            resumo:"Protótipo de wireframe de alta fidelidade sobre um site de petshop, feito em 2022.",
            imagem:"Trabalho_petshop.png"
        },
        {
            id:10,
            titulo:"Química das Drogas",
            resumo:"Slide de apresentação sobre Cocaína, Crack e Ecstasy, feito em 2023.",
            imagem:"Trabalho_quimicaDrogas.png"
        }

    ]
    //A função recebe um atributo chamado de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
            <div className="pesquisa">
                
                <p>Qual trabalho deseja ver?</p>
                <input className='barrapesquisa' type="text" onChange={mudaTexto} />
                <div>
                    <p className='texto_digitado'>pesquisa: {texto}</p>
                </div>
            </div>
            <main className="content-main">
                {trabalhos.filter((trabalho)=>trabalho.titulo.toLowerCase().includes(texto.toLowerCase())).map((trabalho:TrabalhosType)=>
                    <Trabalhos key={trabalho.id} 
                           titulo={trabalho.titulo} 
                           resumo={trabalho.resumo} 
                           imagem={trabalho.imagem}
                    />
                    )
                }
            </main>
        </>
    )
}