var mint = 00;
var sec = 00;
var mil = 00;
var tiempo = 'Ultimos registros';
var total;
var start = false;
var contador = 0;
function Start(){
    if(!start){
       control = setInterval('time()',10);
       document.getElementById('start').innerHTML = 'STOP';
       start = true;
        
    }
    else{
        clearInterval(control);
        if(contador>5){
            tiempo = "Ultimos registros" + '<br>' + total;
            document.getElementById('ultimos').innerHTML = tiempo
            contador = 0;
        }
        else tiempo = tiempo + '<br>' + total;
        document.getElementById('ultimos').innerHTML = tiempo
        start = false;
        mint = 0;
        sec = 0;
        mil = 0;
        document.getElementById('start').innerHTML = 'START';
        contador++;
    }
 
}
function time(){
    
    mil = mil + 1;
    //console.log(mil)
    if(mil == 99){
        mil = 0;
        sec = sec + 1;
        if(sec == 59){
            sec=0;
            mint = mint + 1;
        }
    }
    if(mil<10){
        var a = document.getElementById('mil').innerHTML = ':0' + mil;
    }
    else var a = document.getElementById('mil').innerHTML = ':'+mil;
    if(sec<10){
        var b = document.getElementById('sec').innerHTML = ':0'+sec;
    }else var b = document.getElementById('sec').innerHTML = ':' + sec;
    if(mint<10){
        var c = document.getElementById('mint').innerHTML = '&nbsp;0'+mint;
    } else var c = document.getElementById('mint').innerHTML = mint;
    
    total = c + b+ a;
}
