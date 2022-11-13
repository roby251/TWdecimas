function cargaJson(name){

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
    document.getElementById("usaldo").innerHTML= objson.cliente[1][1];
    document.getElementById("uname2").innerHTML= objson.cliente[1][0];
}

function productos(ename,objson){
    //products = document.getElementsByName(ename); //para cuando quiera hacer que se creen los cuadritos dependiendo de cantidad de elementos en json
    for (i in objson.productos){
        for (let j = 0; j < 2; j++){
            document.getElementById(i.toString()+"."+(j+1).toString()).innerHTML = objson.productos[i][j];
        }
        document.getElementById(i.toString()+".3").innerHTML = "$ " + objson.productos[i][2];
    }
}

cargaJson("user");
cargaJson("card");