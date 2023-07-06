
export function Item({titulo, bgColor}) {
    const estilo = {
        borderRadius: '10px',
        backgroundColor: bgColor,
        fontWeight:'bold' 
        
    }

    return (
        /*<div style={estilo}>
        </div>*/
        <tr style={estilo}>
            <td>Categoria</td>
            <td>Mediana empresa</td>
            <td>{titulo}</td>
            <td><img src="../assets/icons/icono_agregar.png" alt="" width="10%" />
            <img src="../assets/icons/Icono_editar.png" alt="" width="10%" /></td>
            <td><img src="../assets/icons/Icono_Eliminar.png" alt="" width="10%" />   </td>
        </tr>
    );
  }
  