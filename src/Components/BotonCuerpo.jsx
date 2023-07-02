export function BotonCuerpo({espacioLetraImg, tamanioImgX,tamanioImgY,negrita, tamanioLetra, urlIcono, textoBtn, coloLinea, tamanioX, tamanioY, colorLetra, colorFondo}) {
 const estilo = {
      width: tamanioX,
      height: tamanioY,
      borderRadius: '10px',
      backgroundColor : colorFondo,
      color:colorLetra,
      fontWeight: negrita ? 'bold' : 'normal',
      border: '2px solid'+coloLinea,
      display :'flex',
      alignItems:"center",
      fontSize:tamanioLetra
   }
   const estiloDivLetra = {
      paddingLeft:espacioLetraImg
   }
   return (
     <button style={estilo} >

        <img src={urlIcono} alt="Icono"  width={tamanioImgX} height={tamanioImgY}/>
       <div style={estiloDivLetra}> {textoBtn} </div>
     </button>
    );
  }
  