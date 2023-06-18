export function Botones({urlIcono, textoBtn}) {
    return (
     <button class="tamanio-boton" >
        <img src={urlIcono} alt="Icono" />
        <br></br>
        {textoBtn}
     </button>
    );
  }
  