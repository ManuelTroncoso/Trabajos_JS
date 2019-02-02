
var diccionarios = diccionario;
QuitaSignos();
var todasLetras='';
var random = Math.floor(Math.random() * diccionarios.length)
var aleatoria = diccionarios[random];
aleatoria = aleatoria.toLowerCase();
QuitaMierda();
var barras = "";
var contador = 0;
var numeroLetras = 0;
var letrasPulsadas = [];
var vocales = ['a', 'e', 'i', 'o', 'u'];
var aciertos = 0;
var fallos = 0;

window.onload = function () {
	document.getElementById('siguiente').disabled=true;
	TodaslasLetras();
	CreaLineas();
	Pista();
	document.getElementById('contador').innerHTML = contador;
	document.getElementById('aciertos').innerHTML = '<span>'+ aciertos+'</span>';
	document.getElementById('Fallos').innerHTML = '<span>'+fallos+'</span>';
}



//Esta funcion crea el numero de guiones como numero de letras tiene una palabra
function CreaLineas () {
	
	for(i=0;i<aleatoria.length;i++){
		barras = barras + "-"
		
	}
	//document.getElementById('letras').innerHTML = barras 
}

//Esta funcion crea una pista
function Pista () {
	aleatoria = aleatoria.split("");
	var vocal = vocales[Math.floor(Math.random() * vocales.length)]
	while(!aleatoria.includes(vocal)){
		vocal = vocales[Math.floor(Math.random() * vocales.length)]
	}
	RemplazarLetra(vocal);
	//document.getElementById('LetrasSalidas').innerHTML = letrasPulsadas;
	//EscribeAbecedario();
}

//Esta funcion Remplaza un guión por una letra
function RemplazarLetra(letra){
	barras = barras.split("")
	for(i=0;i<aleatoria.length;i++){
		if(aleatoria[i] == letra){
			barras.splice(i,1 , letra);
		}
	}
	if(!letrasPulsadas.includes(letra)){letrasPulsadas.push(letra)}
	barras = barras.join("");
	document.getElementById('letras').innerHTML = barras;
	letrasPulsadas.sort();
	//document.getElementById('LetrasSalidas').innerHTML = letrasPulsadas; 
	document.getElementById(letra).style.color='red';
	if(!barras.includes("-")){
		document.getElementById('correct').style.display = 'block';
		aciertos++;
		document.getElementById('siguiente').disabled=false;
		if(contador>0){document.getElementById('a'+ contador).style.display = 'none'}}

}

//Esta funcion te comprueba que la tecla pulsada sea una letra 
function CompruebaLetra(evento){
	var key = evento.key;
	if(key>='a' && key<='z' || key == 'ñ'){
		// LetraPulsada(key)
		ContieneLetra(key);
		 control = setInterval('time()',10);
	}

	
}
//Esta función quita los acentos
function QuitaMierda(){
	res = aleatoria;
	res = res.replace(/ó/g, 'o');
    		res = res.replace(/í/g, 'i');
    		res = res.replace(/é/g, 'e');
    		res = res.replace(/á/g, 'a');
    		res = res.replace(/ú/g, 'u');
    		res = res.replace(/ü/g, 'u');
    aleatoria = res

	
}
function QuitaSignos(){
		var basura = ["[" , "]",'"'," ", ","]
		diccionarios = diccionarios.split(basura[0]);
	for(i = 1;i<basura.length;i++){
		diccionarios = diccionarios.join("")
		diccionarios = diccionarios.split(basura[i]);
	}
	console.log(diccionarios);

}

function ContieneLetra (letra) {
	if(barras.includes("-")){
		if(aleatoria.includes(letra)){
			if(contador<10){
				RemplazarLetra(letra)
			}
		//return true;
		}
	else {
			if(contador<10){	
				Fallos(letra);
			}
		}
	}
}
function Fallos(letra){
	if(!letrasPulsadas.includes(letra)){
		letrasPulsadas.push(letra)
		if(contador>0){document.getElementById('a'+ contador).style.display = 'none'}
		contador++;
		document.getElementById('contador').innerHTML = contador 
		letrasPulsadas.sort();
		//document.getElementById('LetrasSalidas').innerHTML = letrasPulsadas
		document.getElementById(letra).style.color='red'
		document.getElementById('a'+ contador).style.display = 'block'
	}
		if(contador== 10){
			Fin();
		}
	}

	function Fin(){
		document.getElementById('loser').style.display = 'block'
		document.getElementById('siguiente').disabled=false;
		var solucion = aleatoria.join("");
		document.getElementById('letras').innerHTML = solucion;
		fallos++;
	}
	function TodaslasLetras(){
		var abecedario =["A","B","C","D","E","F","G","H","I","J","K","L","M","N", "Ñ","O","P","Q","R", 
		"T","S","U","V","W","X","Y","Z"]
		for(i=0;i<abecedario.length;i++){
		todasLetras = todasLetras + '<span id="'+ abecedario[i].toLowerCase() + '">'  + abecedario[i] + " "  + '</span>'
		}
		document.getElementById('abecedario').innerHTML = todasLetras;

	}
	function NewWord(){
		//QuitaSignos();
		document.getElementById('siguiente').disabled=true;
		todasLetras='';
		random = Math.floor(Math.random() * diccionarios.length)
		aleatoria = diccionarios[random];
		aleatoria = aleatoria.toLowerCase();
		//QuitaMierda();
		barras = "";
		contador = 0;
		numeroLetras = 0;
		letrasPulsadas = [];
		vocales = ['a', 'e', 'i', 'o', 'u'];
		window.onload();
		for(i=1;i<11;i++){
			document.getElementById('a'+ i).style.display = 'none'
			console.log('hola')
		}
		document.getElementById('loser').style.display = 'none'
		document.getElementById('correct').style.display = 'none'
		
	}
