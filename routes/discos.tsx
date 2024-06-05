import { Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import Discos from "../components/discomo.tsx"


export const handler: Handlers = {
    async GET(req, ctx) {
    
        const respuesta= await axios.get("https://jsonplaceholder.typicode.com/photos")
        const datos=respuesta.data
return ctx.render({datos})
    },

  };


export default function discos(props:PageProps){
    const discs=props.data.datos
    return(
        <Discos
        discos={discs}/>
    );

}