function recargar(){
    document.getElementById("usaldo").innerHTML = 250000; 
}
function agregarArticulo(boton,articulo){
    const precioN =document.getElementById(articulo).innerHTML
    const precioP = precioN.slice(1) // quitar el simbolo de precio
    if (document.getElementById(boton).innerHTML =="agregado"){
    }
    else{
        document.getElementById(boton).innerHTML = "agregado"; 
        document.getElementById(boton).className = "btn btn-warning";
        document.getElementById("pagar").innerHTML =  parseInt(document.getElementById("pagar").innerHTML)+parseInt(precioP); 

    }

}
function asegurarcompra(){


    if (parseInt(document.getElementById("usaldo").innerHTML)-parseInt(document.getElementById("pagar").innerHTML)>=0){
        document.getElementById("usaldo").innerHTML=parseInt(document.getElementById("usaldo").innerHTML)-parseInt(document.getElementById("pagar").innerHTML); 
        document.getElementById("pagar").innerHTML =0;
        
        var x = document.getElementById("apruebop");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    else{
        var x = document.getElementById("errorp");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        
        
    }
}