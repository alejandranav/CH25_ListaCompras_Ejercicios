// El código va aquí -> 
let txtNombre= document.getElementById("Name");
let txtNumber= document.getElementById("Number");
let btnAgregar= document.getElementById("btnAgregar");
let btnClear= document.getElementById("btnClear");

let alertaValidaciones= document.getElementById("alertValidaciones")
let alertaValidacionesTexto= document.getElementById("alertValidacionesTexto");
btnClear.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.value="";
    txtNumber.value="";
});

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    alertaValidacionesTexto.innerHTML=""
    alertaValidaciones.style.display="none";
    let lista= "los siguientes campos deben ser llenados correctamente:<ul>"
    if (txtNombre.value.length==0){
        txtNombre.style.border="solid thin red";
        lista+= "<li>Se debe escribir un nombre válido</li>"
        alertaValidaciones.style.display="block"; 
    } else{
        txtNombre.style.border="";
    }

    if (txtNumber.value.length==0){
        txtNumber.style.border="solid thin red";
        lista+= "<li>Se debe escribir una cantidad válida</li>";
        alertaValidaciones.style.display="block"; 
    } else{
        txtNumber.style.border="";
    }
    lista+="</ul>"
    alertaValidacionesTexto.insertAdjacentHTML("beforeend", lista)
});

txtNumber.addEventListener("blur", function(event){
    event.preventDefault();
    txtNumber.value= txtNumber.value.trim();
});

txtNombre.addEventListener("blur", function(event){
    event.preventDefault();
    txtNombre.value= txtNombre.value.trim();
});