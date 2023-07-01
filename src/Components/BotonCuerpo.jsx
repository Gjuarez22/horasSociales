export function BotonCuerpo({tamanioImgX,tamanioImgY,negrita, tamanioBtn, urlIcono, textoBtn, coloLinea, tamanioX, tamanioY, colorLetra, colorFondo}) {
   tamanioX = tamanioX+"%";
   tamanioY = tamanioY+"px";
  tamanioBtn = tamanioBtn+"vw"; 

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
        <img src={urlIcono} alt="Icono"  width={tamanioImgX} height={tamanioImgY}/>
        {textoBtn}
     </button>
    );
  }
  