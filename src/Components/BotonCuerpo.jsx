export function BotonCuerpo({anchoDivTexto, anchoDivImagen,imagenDerecha, rotar, tamanioImgX,tamanioImgY,negrita, tamanioLetra, urlIcono, textoBtn, coloLinea, tamanioX, tamanioY, colorLetra, colorFondo}) {
   
   const estilo = {
      width: tamanioX,
      height: tamanioY,
      borderRadius: '10px',
      backgroundColor : colorFondo,
      color:colorLetra,
      fontWeight: negrita ? 'bold' : 'normal',
      border: '2px solid'+coloLinea,
      fontSize:tamanioLetra,
      alignItems :" center"
      
   }
   return (
     <button class="row"style={estilo} > 
       
      {imagenDerecha &&  <div class={anchoDivTexto} >{textoBtn}</div>}  
      <div class={anchoDivImagen} > <img src={urlIcono} alt="Icono"  style={{transform: rotar ? "rotate(180deg)" :"rotate(0deg)", width: tamanioImgX, height:tamanioImgY}}/></div> 
       {!imagenDerecha &&  <div class={anchoDivTexto} >{textoBtn}</div> }
     </button>
    );
  }
  