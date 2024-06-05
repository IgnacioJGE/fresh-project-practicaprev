import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";


export type propsboton={
    direccion: string,
    children:string,
}

export default function  Botonredirect (cosas:propsboton){

    function handleclick(direcion:string){
         window.location.href=direcion;
    }

    return(
            <button onClick={(e)=>{handleclick(cosas.direccion)}}>{cosas.children}</button>
    );
}