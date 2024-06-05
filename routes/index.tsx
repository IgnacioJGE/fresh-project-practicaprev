import { useSignal } from "@preact/signals";
import  Botonredirect from "../islands/buttonredirect.tsx"
export default function Home() {
  return (
    <div>
      <h1>Página de inicio</h1>
      <h2>Seleccione que desea hacer </h2>
      <Botonredirect
        direccion="/login">Login</Botonredirect>


    </div>

  );
}
