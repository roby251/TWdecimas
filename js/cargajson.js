function cargaJson(id){
    var value = document.getElementById(id).value;

    switch (value) {
        case "1":
            jsonFile = "json/cliente.json";
            break;
        case "2":
            jsonFile = "json/productos.json";
            break;
        default:
            console.log("Nada");
            break;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var myObJson = JSON.parse(this.responseText);
            updateContent(id, value, myObJson);
        }
    };
    xhttp.open("GET", jsonFile, true);
    xhttp.send();
}

function updateContent(pId, valor, objJson){
    switch (valor) {
        case "1":
            cliente(pId, objJson);
            break;
        case "2":
            productos(pId, objJson);
            break;
        default:
            limpiarBtn(pId);
            break;
    }
}