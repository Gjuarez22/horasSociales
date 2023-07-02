
export function BuscadorCuerpo() {
const estiloDiv = {
    backgroundColor:'#EAEAEA',
    borderRadius: '20px',
    width: "60%",
    alignItems:"center",
}

const estiloTxt={
    backgroundColor:'#EAEAEA',
    width: "100%",
    borderColor :"transparent",
    outlineColor:"transparent"
}
    return (
        <div class="d-flex justify-content-center">
            <div class="row d-flex justify-content-start" style= {estiloDiv} >
                <div class="col-1"><i class=" fa-solid fa-magnifying-glass"></i></div> 
                <div class="col-11"><input  type="text" placeholder ="Buscar en software de auditoria "style={estiloTxt}/></div>
          </div>   
        </div>
        
        
           
     );
   }
   