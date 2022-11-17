function recargar(){
    document.getElementById("usaldo").innerHTML = 250000; 
}
function agregarArticulo(boton,articulo){
    const precioN =document.getElementById(articulo).innerHTML
    const precioP = precioN.slice(1) // quitar el simbolo de precio
    if (document.getElementById(boton).innerHTML =="Agregado"){
        document.getElementById(boton).innerHTML = "Comprar"; 
        document.getElementById(boton).className = "btn btn-info";
        document.getElementById("pagar").innerHTML =  parseInt(document.getElementById("pagar").innerHTML)-parseInt(precioP); 

    }
    else if(document.getElementById(boton).innerHTML =="Comprar"){
        document.getElementById(boton).innerHTML = "Agregado"; 
        document.getElementById(boton).className = "btn btn-warning";
        document.getElementById("pagar").innerHTML =  parseInt(document.getElementById("pagar").innerHTML)+parseInt(precioP); 

    }

}
function asegurarcompra(){


    if (parseInt(document.getElementById("usaldo").innerHTML)-parseInt(document.getElementById("pagar").innerHTML)>=0){
        document.getElementById("usaldo").innerHTML=parseInt(document.getElementById("usaldo").innerHTML)-parseInt(document.getElementById("pagar").innerHTML); 
        document.getElementById("pagar").innerHTML =0;
        var elemento = document.getElementsByClassName('btn btn-warning'); 
        for (var i = 0; i < elemento.length; i++) {  
            document.getElementById(elemento[i].getAttribute('id')).innerHTML = "Comprado"; 
            document.getElementById(elemento[i].getAttribute('id')).className = "btn btn-danger";
          }
        var x = document.getElementById("apruebop");
        if (x.style.display === "none") {
            x.style.display = "block";
            document.getElementById("errorp").style.display = "none";
        } else {
            x.style.display = "none";
        }
    }
    else{
        var x = document.getElementById("errorp");
        if (x.style.display === "none") {
            x.style.display = "block";
            document.getElementById("apruebop").style.display = "none";
        } else {
            x.style.display = "none";
        }
        
        
    }
}