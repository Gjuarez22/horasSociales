export function Botones({urlIcono, textoBtn, tamanioImgX, tamanioImgY, colorBg}) {
   const styleImg ={
      width: tamanioImgX,
       height: tamanioImgY
   } 

   const  styleBtn = {
      backgroundColor : colorBg
   }

   return (
     <button style={styleBtn} class="tamanio-boton" >
        <img style={styleImg} src={urlIcono} alt="Icono" />
        <br></br>
        {textoBtn}
     </button>
    );
  }
  