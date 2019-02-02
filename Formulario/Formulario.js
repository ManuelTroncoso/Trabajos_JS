var seleccionadas = [[], "", "", ""];
var puntuacion = 0;
var correcta = [[1,0,1,0], 'Opcion 1',  '2', 'like "juan%"']
var pregunta = 1;
var bloquear = true;
//Crea los botones del numero de la pregunta
window.onload = function(){

    for (var i = 1; i <= 4; i++){
        var boton = document.createElement("button")
        boton.className = 'boton';
        boton.innerHTML = i;
        boton.id = "boton"+i;
        boton.style.background = "silver";
        document.getElementById('preg').appendChild(boton);
        boton.setAttribute("onclick","proximapregunta(this)")    
        if(boton. id == 'boton1'){
            boton.style.background = 'grey';
        }    
    }
}



function analizarRespuesta(){
    CambiarTextBoton();
    Seleccionado();
    CompruebaRespuesta();
}
//Esta función nos permite cambiar el nombre el botón
//y tambien nos permite borrar los datos guardados de formulario
function CambiarTextBoton(){
    
    if(document.getElementById('rev').innerHTML == 'Reintentar'){
    Reintentar();
    }
    else{
        document.getElementById('rev').innerHTML = 'Reintentar';

    }
}
//Comprueba que datos estan seleccionados
function Seleccionado(){
    for(var i=0;i<4;i++){
        if (document.getElementById('c' + (i+1)).checked)
        {
            seleccionadas[0].push('1')
        }else{
            seleccionadas[0].push('0');
        }
        if (document.getElementById('r' + (i+1)).checked)
        {
            seleccionadas.splice(1,1, document.getElementById('r' + (i+1)).value)
        }
    }
    if(seleccionadas[1] == '-1'){
        seleccionadas.splice(1,1,"")
    }
    if(document.getElementById('s1').value != -1){
        seleccionadas.splice(2,1,document.getElementById('s1').value)
    }
    if(document.getElementById('ct1').value != "Escribe aquí la respuesta"){
        var min = document.getElementById('ct1').value
        min = min.toLowerCase();
        seleccionadas.splice(3,1, min)
    }
}
//Comprueba que las respuestas son correctas y las puntua
function CompruebaRespuesta(){
    puntuacion = 0;
    for(var i = 0; i< 4;i++){
        if(seleccionadas[0][i] == correcta[0][i]){
            puntuacion = puntuacion + 0.25;
        }
        else{
            puntuacion = puntuacion - 0.25
            if(document.getElementById('c' + (i+1)).checked){
                Erronea(i);
            }
        }
        if(seleccionadas[i] == correcta[i] && i > 0 ){
            puntuacion = puntuacion +1;
        }
        else if(seleccionadas[i] != correcta[i] && i > 0 && seleccionadas[i] != "" ){
           
            puntuacion = puntuacion -0.5
            if(i == 3){
                Erronea('ct1')
            }
            else{
                Erronea('s1');
            }
            
        }
        if(i!= 0 && document.getElementById('r' + (i+1)).checked){
            Erronea(i+4);
        }
        //Una vez contestado se bloquean las respuestas
        if(bloquear){
            document.getElementById('c' + (i+1)).disabled = true;
            document.getElementById('r' + (i+1)).disabled = true;
            
        }
    }
    if(bloquear){
        document.getElementById('s1').disabled=true;
        document.getElementById('ct1').disabled=true;
    }
    if(bloquear == false){
        bloquear = true;
    }
    else{
        bloquear = false;
    }
    if(puntuacion<0){
        puntuacion = 0;
    }
    puntuacion = (puntuacion/4)*10
    document.getElementById('punt').innerHTML = 'Puntuación: ' + puntuacion;
    // console.log(puntuacion)
}
//Esconde y muestra la pregunta y cambia el boton de color
function proximapregunta(x){
   if(x.id == 'sig'){
        document.getElementById('p'+pregunta).className='hidden';
        document.getElementById('boton'+ pregunta).style.background = 'silver'
        pregunta++;
        document.getElementById('p'+ pregunta).className = 'show'
        document.getElementById('boton'+ pregunta).style.background = 'grey'
        
   }
   else if(x.id == 'ant'){
    document.getElementById('p'+ pregunta).className = 'hidden'    
    document.getElementById('boton'+ pregunta).style.background = 'silver'
    pregunta--;
    document.getElementById('p'+pregunta).className='show';
    document.getElementById('boton'+ pregunta).style.background = 'grey'
   }else if(x.className == 'boton'){
    document.getElementById('boton'+ pregunta).style.background = 'silver'
    document.getElementById('p'+pregunta).className='hidden';
    pregunta = x.innerHTML;
    document.getElementById('p'+ pregunta).className = 'show'
    x.style.background = 'grey'
}
    if(pregunta==4){
        document.getElementById('sig').disabled = true;
    }
    else{
        document.getElementById('sig').disabled = false;
        if(pregunta==1){
            document.getElementById('ant').disabled=true;
        }
        else{
            document.getElementById('ant').disabled =false;
        }
        
    }
    
}
function Erronea(x){
    if(x == "ct1" || x == "s1"){
        document.getElementById(x).style.boxShadow = "0px 0px 15px red";
    }
    else{
        var myNodelist = document.querySelectorAll("label");
        myNodelist[x].style.backgroundColor = "red";
    }
}

function Reintentar(){
    seleccionadas = [[], '-1', "",""];
    puntuacion = 0;
    for(i=0;i<4;i++){
        document.getElementById('c' + (i+1)).removeAttribute("disabled")
        if(bloquear==false){
            document.getElementById('c' + (i+1)).checked = false;
            document.getElementById('r' + (i+1)).checked = false;
            document.getElementById('s1').value = -1;
            document.getElementById('ct1').value = "Escribe aquí la respuesta";
        }
        document.getElementById('r' + (i+1)).disabled = false;
        document.getElementById('s1').removeAttribute("disabled")
        document.getElementById('ct1').removeAttribute("disabled")
    }
    
    var myNodelist = document.querySelectorAll("label");
    for(i=0;i<myNodelist.length;i++){
        myNodelist[i].style.backgroundColor = "silver";
    }
    document.getElementById('ct1').style.boxShadow = "0px 0px 15px white";
    


}