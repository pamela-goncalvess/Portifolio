import './Trabalhos.css'

type TrabalhosProps={
    titulo:string,
    resumo:string,
    imagem:string
}

export default function Trabalhos(props:TrabalhosProps){
    return(
        <div className="trabalho_content">
            <div className="foto_trabalho">
                <img src={props.imagem} alt=""/>
            </div>
            <div className="texto_foto">
                <h1>{props.titulo}</h1>
                <p className="resumo">
                    {props.resumo}
                </p>
            </div>
        </div>
    )
}