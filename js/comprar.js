function recargar(){
    document.getElementById("sueldo").innerHTML = 250000; 
}
function agregarArticulo(articulo){
    if (document.getElementById(articulo).innerHTML =="agregado"){
        document.getElementById(articulo).innerHTML = "Comprar"; 
        document.getElementById(articulo).className = "btn btn-info";
    }
    else{
        document.getElementById(articulo).innerHTML = "agregado"; 
        document.getElementById(articulo).className = "btn btn-warning";

    }

}