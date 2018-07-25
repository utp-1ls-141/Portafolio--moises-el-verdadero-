var oracion2;

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var boto1 = document.getElementById("boto1");
var bnt = document.getElementById("secd");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];



// When the user clicks the button, open the modal 
function isomorfo(){
    var oracion,dato1,dato2,dato3;
    dato1=document.getElementById("txt1").value;
    dato2=document.getElementById("txt2").value;
    dato3=document.getElementById("txt3").value;

    ///determina si las oraciones son del mismo largo
    if (dato1.length !== dato2.length ) {
        oracion="no son oraciones del mismo largo";
    }
    else if (dato1.length !== dato3.length ) {
        return false;
    }
    else{   
        var map = {};
         for(var i = 0; i < dato1.length; i++) {
        var a = dato1[i]; 
        var b = dato2[i];
        var c = dato3[i];
        if (typeof map[a] === "undefined") {
            map[a] = b;
            map[a] = c;

        } else if (map[a] !== b ) {
            return oracion="1";
        }
        else if (map[a] !==c){
            return oracion="2";
        }

        for (var key in map) {
            if (key !== a && b === map[key]) {
                return  oracion="3";
            }
            else if (key !== a && c === map[key]){
               return oracion="4";
            }
        }
    }
}
return true;    
}

boto1.onclick = function() {
/*if (isomorfo()== true){
    oracion="es isomorfica"
}
else {
    oracion="no es isomorfica"
}*/
oracion2=isomorfo()
document.getElementById("sep").innerHTML = oracion2;
modal.style.display = "block";
}

bnt.onclick = function(){
    var arr = Math.floor((Math.random() * 10) + 1); ;
    document.getElementById("sep").innerHTML = "volatil"+ arr;
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}