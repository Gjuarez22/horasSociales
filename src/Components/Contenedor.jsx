import { Botones } from "./Botones";
export function Contenedor() {
    return (
      <div class="cuadro cuadro-botones">

        <div class="row">
          <div class="col-3"> 
          <Botones urlIcono="../assets/icons/agregar.png" textoBtn="Plantillas de
            Planes de Auditoría"  /> </div>
          <div class="col-3">
            <Botones urlIcono="../assets/icons/crear_programas.png" textoBtn="Plantillas de
              Planes de Auditoría" />
          </div>
          <div class="col-3">
            <Botones urlIcono="../assets/icons/crear_Plane.png" textoBtn="Plantillas de
              Planes de Auditoría" />
          </div>
          <div class="col-3">
            <Botones urlIcono="../assets/icons/configurar_elemmentos.png" textoBtn="Plantillas de
              Planes de Auditoría" /> 
          </div>
        </div>

      </div>
    );
  }
  