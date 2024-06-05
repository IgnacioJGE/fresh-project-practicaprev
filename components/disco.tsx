


export type propdisc={
    url:string,
    title:string
}

export default function Disco(disco:propdisc){
    return(
        <div>
            <img src={disco.url} alt="Imagen" />
            <p>{disco.title}</p>

        </div>
    )

}