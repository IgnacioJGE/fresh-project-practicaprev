import { PageProps } from "$fresh/server.ts";
import Disco from "./disco.tsx"
import {propdisc} from "./disco.tsx"

type arraydiscos={
    discos:propdisc[];
}



export default function Discos(discs:arraydiscos){

    return(
        <div>
            {discs.discos.map((char)=>(
                <div>
                <Disco
                url={char.url}
                title={char.title}/>
                </div>
            ))}
        </div>
    );
}