import { Botones } from "./Botones";
export function Contenedor() {
    return (
      <div class="cuadro cuadro-botones">

        <div class="row">
          <div class="col-3"> 
          <Botones urlIcono="../assets/icons/icono_Auditoria.png" textoBtn="Plantillas de
            Planes de Auditoría" tamanioImgX="70px"  colorBg="#FFF1A1"/> </div>
          <div class="col-3">
            <Botones urlIcono="../assets/icons/icono_programas.png" textoBtn="Plantillas de
              Planes de Auditoría" colorBg="#C0EAFF" tamanioImgX="70px"/>
          </div>
          <div class="col-3">
            <Botones urlIcono="../assets/icons/Icono_planes.png" textoBtn="Plantillas de
              Planes de Auditoría" colorBg="#C0EAFF" tamanioImgX="70px"/>
          </div>
          <div class="col-3">
            <Botones urlIcono="../assets/icons/Icono_elementos.png" textoBtn="Plantillas de
              Planes de Auditoría" colorBg="#C0EAFF" tamanioImgX="70px"/> 
          </div>
        </div>

      </div>
    );
  }
  