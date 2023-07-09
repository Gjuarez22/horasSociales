export function Buscador() {
  const estiloCurva ={
    backgroundColor : "#7ACCE5",
    width :"100%",
    height: "60px",
    borderRadius: "100% 0 0 0",
    transformOrigin:" bottom",
    transform: "scaleY(0.5)", 
  }
  
  const estiloImg = {
    width:"5%",
    paddingTop:"10px"
  }

  const circulo = {
    width :"5%",
    height: "50px",
    borderRadius:"100px",
    backgroundColor :"#CCCCCC",
    paddingTop:"10px"
  }

  return (
<nav class="navbar row" style={{ border: '1px solid #CDCDCD' ,padding:0, paddingBlockEnd:0}}>
      <div class="col-2"><span style={{color:"#7ACCE5",fontSize:"2rem", fontWeight:'bold' }}>BEE</span><span style={{color:"#035A9D",  fontSize:"2rem", fontWeight:'bold' }}>contable</span>
      </div>
      <div style={{height:"100px"}} class="col-10">
        
        <div class="row" style={{height:"41px"}} >
          <div class=" d-flex justify-content-end" style={{alignItems:"center"}}>
            Config  {String.fromCharCode(160)}
            <img src="../assets/icons/configImg.png" alt="Icono" style={estiloImg} />
            {String.fromCharCode(160)}
            {String.fromCharCode(160)}
            {String.fromCharCode(160)}
           <div style={circulo}></div>
          </div>
        </div>

        <div class="row ">
          <div id="curva" style={estiloCurva}></div>
        </div>
        
      </div>

</nav>
   
  );
}

 {/** 
    <nav class="navbar navbar-expand-lg bg-blue" style={{ border: '1px solid #CDCDCD',}}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <span style={{color:"#7ACCE5",fontSize:"2rem", fontWeight:'bold' }}>BEE</span><span style={{color:"#035A9D",  fontSize:"2rem", fontWeight:'bold' }}>contable</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>  
    </nav>*/}