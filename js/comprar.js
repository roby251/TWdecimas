function recargar(){
    document.getElementById("sueldo").innerHTML = 250000; 
}
function agregarArticulo(boton,articulo){
    const precioN =document.getElementById(articulo).innerHTML
    const precioP = precioN.slice(1) // quitar el simbolo de precio
    if (document.getElementById(boton).innerHTML =="agregado"){
        document.getElementById(boton).innerHTML = "Comprar"; 
        document.getElementById(boton).className = "btn btn-info";
        document.getElementById("pagar").innerHTML =  parseInt(document.getElementById("pagar").innerHTML)-parseInt(precioP); 
    }
    else{
        document.getElementById(boton).innerHTML = "agregado"; 
        document.getElementById(boton).className = "btn btn-warning";
        document.getElementById("pagar").innerHTML =  parseInt(document.getElementById("pagar").innerHTML)+parseInt(precioP); 

    }

}
function asegurarcompra(){
    const all = document.getElementsByClassName("btn btn-warning");
    alert(all.totring());


    if (parseInt(document.getElementById("sueldo").innerHTML)-parseInt(document.getElementById("pagar").innerHTML)>0){
        document.getElementById("sueldo").innerHTML=parseInt(document.getElementById("sueldo").innerHTML)-parseInt(document.getElementById("pagar").innerHTML); 
        document.getElementById("pagar").innerHTML =0;
    }
    else{
        alert("ERROR");
    }
}