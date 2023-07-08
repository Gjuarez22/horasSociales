import { BotonCuerpo } from "./BotonCuerpo";
import { BuscadorCuerpo } from "./BuscadorCuerpo";

export function CuerpoParteSuperior() {
  return (
    <div >
      <div class="row ">
        <div class="col-4  d-flex text-right">
          <BotonCuerpo
            urlIcono="../assets/icons/flecha.png"
            tamanioX="60%"
            colorFondo="#EDEDED"
            coloLinea="#43B2DD"
            tamanioLetra="1.5rem"
            textoBtn="Atras"
            tamanioImgX="100%"
            imagenDerecha={false}
            anchoDivImagen="col-6"
            anchoDivTexto="col-6"
          />
        </div>
        <div class="col-4 ">
          <div class="titulo-cuerpo">
            <h4>Plantillas de Auditoría</h4>
          </div>
        </div>

        <div class="col-4 d-flex  d-flex justify-content-end">
        <BotonCuerpo 
            urlIcono="../assets/icons/flecha.png"
            tamanioX="60%"
            colorFondo="#EDEDED"
            coloLinea="#43B2DD"
            tamanioLetra="1.2rem"
            textoBtn="Adelante"
            tamanioImgX="100%"
            rotar ="true"
            imagenDerecha={true}
            anchoDivImagen="col-6"
            anchoDivTexto="col-6"
          />
        </div>
      </div>

      <br />

      <BuscadorCuerpo />
      
      <br />
      <br />

      <div class=" d-flex justify-content-center">
        <div class="row" style={{ width: "60%", height: "80px" }}>
          <div class="col-4">
            <BotonCuerpo
              urlIcono="../assets/icons/icono_Auditoria.png"
              tamanioX="100%"
              tamanioY="100%"
              colorFondo="#F8DCFF"
              coloLinea="#A5A5A5"
              tamanioLetra="1rem"
              textoBtn="Total de Programas"
              tamanioImgX="100%"
              colorLetra="#A5A5A5"
              negrita="true"
              anchoDivImagen="col-5"
              anchoDivTexto="col-7 "
            />
          </div>
          <div class="col-4">
            {" "}
            <BotonCuerpo
              urlIcono="../assets/icons/icono_Auditoria.png"
              tamanioX="100%"
              tamanioY="100%"
              colorFondo="#F8DCFF"
              coloLinea="#A5A5A5"
              tamanioLetra="1rem"
              textoBtn="Total de Planes"
              tamanioImgX="30%"
              colorLetra="#A5A5A5"
              negrita="true"
            />
          </div>
          <div class="col-4">
            <BotonCuerpo
              urlIcono="../assets/icons/icono_Auditoria.png"
              tamanioX="100%"
              tamanioY="100%"
              colorFondo="#F8DCFF"
              coloLinea="#A5A5A5"
              tamanioLetra="1rem"
              textoBtn="KPI y resultados"
              tamanioImgX="30%"
              colorLetra="#A5A5A5"
              negrita="true"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class=" d-flex justify-content-center">
        <BotonCuerpo
        urlIcono="../assets/icons/icono_agregar.png"
        coloLinea="#A5A5A5"
        tamanioX="40%"
        tamanioY="50px"
        tamanioImgX="8%"
        colorFondo="#C1F7D3"
        textoBtn="Seleccionar Plantilla - Plan de Auditoría"
        colorLetra="#727380"
        negrita="true"
        espacioLetraImg="4%"
        />
      </div>
    </div>
  );
}
