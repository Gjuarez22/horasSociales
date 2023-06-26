import { BotonCuerpo } from "./BotonCuerpo";
import { BuscadorCuerpo } from "./BuscadorCuerpo";

export function Cuerpo() {
  return (
    <div class="cuadro">

      <div class="row ">
        <div class="col-4  text-right">
          <BotonCuerpo
            urlIcono="../assets/icons/izquierda2ReColor.png"
            tamanioX="60"
            colorFondo="#EDEDED"
            coloLinea="#43B2DD"
            tamanioBtn="2"
            textoBtn="Atras"
          />
        </div>
        <div class="col-4 ">
          <div class="titulo-cuerpo">
            {" "}
            <h4>Plantillas de auditoría</h4>
          </div>
        </div>
        <div class="col-4 d-flex justify-content-end">
          <button
            class="align-self-end"
            style={{
              width: "70%",
              borderRadius: "20px",
              backgroundColor: "#EDEDED",
              border: "2px solid #43B2DD",
              alignItems: "center",
              fontSize: "2rem",
              display: "flex",
            }}
          >
            Adelante <img src="../assets/icons/derecha.png" alt="Icono" />{" "}
          </button>
        </div>
      </div>

            <br/>
            <BuscadorCuerpo/>

    </div>
  );
}
