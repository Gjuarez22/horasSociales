
  export function Item({titulo, bgColor}) {
      const estilo = {
          borderRadius: '10px',
          backgroundColor: bgColor,
          fontWeight:'bold'  ,
          border: "2px solid #ACACAC",
          height:"50px",
          alignItems :" center",
          marginBottom: "10px",
          width:"100%",
      }
    /* style={{
          width: "70%",
          borderRadius: "20px",
          backgroundColor: "#EDEDED",
        
          alignItems: "center",
          fontSize: "2rem",
          display: "flex",
        }}*/
      return (
          <div class="row" style={estilo}>
              <div class="col-2 text-center" style={{ height:"40px",  borderRight: "2px solid #ACACAC" }}>Categoria</div>
              <div class="col-3 text-center" style={{ height:"40px",  borderRight: "2px solid #ACACAC" }}>Mediana empresa</div>
              <div class="col-3 text-center" style={{ height:"40px",  borderRight: "2px solid #ACACAC" }}>{titulo}</div>
              <div class="col-2 contenedor-item d-flex justify-content-end" style={{ height:"40px",  borderRight: "2px solid #ACACAC" }}><img class="align-self-center" src="../assets/icons/icono_agregar.png" alt="" width="20%" />
                <img class="align-self-center" src="../assets/icons/Icono_editar.png" alt="" width="20%" /></div>
              <div class="col-2 row text-center">
                <div class="col-6"><img  src="../assets/icons/Icono_Eliminar.png" alt="" width="70%" /> </div> 
                <div class="col-6"><img  src="../assets/icons/flechaAbajo.png" alt="" width="100%" /> </div> 
                 </div>
          </div>
      );
    }
    