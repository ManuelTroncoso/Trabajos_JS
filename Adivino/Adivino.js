var random = Math.floor((Math.random() * 50) + 1);
console.log(random)
var inicio = 1;
var final = 51;
window.onload = function(){
    //Esta funcion se encarga de crear los botones en filas de 10
    for(var i=1;i<=50;i++){
       	//Creamos el boton
		var boton = document.createElement("button");
		//Añadirle un id
		boton.className = 'boton';
		//Le damos un valor al boton
        boton.innerHTML = i;
        boton.value = i;
		//Le damos valor al id
		boton.id = "boton"+i;
		//Le damos un color de inicio
		boton.style.background = "silver";
		//Lo añadimos al elemento con id = "Botones"
		document.getElementById('Botones').appendChild(boton);
		//Le atribuimos una funcion onclick
		boton.addEventListener('click', ColorBotones, false)
		if(i%10==0){
            //Creamos el br
        var salto = document.createElement("br");
            //Añadimos en el div el br
        document.getElementById('Botones').appendChild(salto);
        } 
    }
}
function ColorBotones(){
    if(this.value>random){
        for(var i = this.value;i<=50;i++){
            console.log("Entra en el bucle")
            document.getElementById('boton' + i).style.backgroundColor = 'lightblue';
            document.getElementById('boton' + i).style.disable = true;
            
        }
    }
    else{
        if(this.value<random){
            for(var i = 1;i<=this.value;i++){
                document.getElementById('boton' + i).style.backgroundColor = 'lightblue';
                document.getElementById('boton' + i).style.disable = true;
            }
        }
        else{
            Acierto();
        }
    }
    
    
}
function Acierto(){
    window.alert('Felicidades has acertado el número secreto')
    for(i = 1;i<51;i++){
         document.getElementById('boton' + i).style.background = "silver";
        document.getElementById('boton' + i).disabled=false;
    }
   
    inicio = 1;
    final = 51;
    random = Math.floor((Math.random() * 25) + 1);
    console.log(random)
}