function cargaJson(name){
    //var elementype = document.getElementByName(name).value;
    // var value = document.getElementById(id).value;

    // switch (value) {
    //     case "user":
    //         jsonFile = "json/cliente.json";
    //         break;
    //     case "card":
    //         jsonFile = "json/productos.json";
    //         break;
    //     default:
    //         console.log("Nada");
    //         break;
    // }

    jsonFile = "json/tienda.json";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var myObJson = JSON.parse(this.responseText);
            updateContent(name, myObJson);
        }
    };
    xhttp.open("GET", jsonFile, true);
    xhttp.send();
}

function updateContent(ename, objson){
    switch (ename) {
        case "user":
            cliente(objson);
            break;
        case "card":
            productos(ename, objson);
            break;
        default:
            console.log("Nada");
            break;
    }
}

function cliente(objson){
    document.getElementById("uname").innerHTML= "Usuario: " + objson.cliente[1][0];
    document.getElementById("usaldo").innerHTML= "Saldo: " + objson.cliente[1][1];
}

function productos(ename,objson){
    //products = document.getElementsByName(ename); //para cuando quiera hacer que se creen los cuadritos dependiendo de cantidad de elementos en json
    for (i in objson.productos){
        for (let j = 0; j < 3; j++){
            document.getElementById(i.toString()+"."+(j+1).toString()).innerHTML = objJson.productos[i][j];
        }
    }
}

cargaJson("user");
cargaJson("productos");