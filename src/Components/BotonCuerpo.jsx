export function BotonCuerpo({negrita, tamanioBtn, urlIcono, textoBtn, coloLinea, tamanioX, tamanioY, colorLetra, colorFondo}) {
   tamanioX = tamanioX+"%";
   tamanioY = tamanioY+"px";
  tamanioBtn = tamanioBtn+"rem" 

   const estilo = {
      width: tamanioX,
      height: tamanioY,
      borderRadius: '20px',
      backgroundColor : colorFondo,
      color:colorLetra,
      fontWeight: negrita ? 'bold' : 'normal',
      border: '2px solid'+coloLinea,
      display :'flex',
      alignItems:"center",
      fontSize:tamanioBtn
   }

   return (
     <button style={estilo} >
        <img src={urlIcono} alt="Icono" />
        {textoBtn}
     </button>
    );
  }
  