import { Botones } from "./Botones";
export function Contenedor() {
  return (
    <div class="cuadro cuadro-botones">
      <div class="row">
        <div class="col-3">
          <Botones
            urlIcono="../assets/icons/icono_Auditoria.png"
            textoBtn="1. Plantillas de
            Planes de Auditoría"
            tamanioImgX="70px"
            colorBg="#FFF1A1"
          />{" "}
        </div>
        <div class="col-3">
          <Botones
            urlIcono="../assets/icons/icono_programas.png"
            textoBtn="2. Plantillas de
              Planes de Auditoría"
            colorBg="#C0EAFF"
            tamanioImgX="70px"
          />
        </div>
        <div class="col-3">
          <Botones
            urlIcono="../assets/icons/Icono_planes.png"
            textoBtn="3. Plantillas de
              Planes de Auditoría"
            colorBg="#C0EAFF"
            tamanioImgX="70px"
          />
        </div>
        <div class="col-3">
          <Botones
            urlIcono="../assets/icons/Icono_elementos.png"
            textoBtn="4. Plantillas de
              Planes de Auditoría"
            colorBg="#C0EAFF"
            tamanioImgX="70px"
          />
        </div>
      </div>
        <br />
      <div class="d-flex justify-content-center">
        <img  src="../assets/icons/flechaAbajo.png" alt="flecha " width="5%" />
      </div>
    </div>
  );
}
