
document.addEventListener("mousemove",lineaMovimiento);
document.addEventListener("mousedown",lineaInicial); //Cuando haces click en el mouse
document.addEventListener("mouseup",lineaFinal);//Cuando sueltas el click en el mouse

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var rect=cuadrito.getBoundingClientRect();//POSICION CON RESPECTO A CANVAS
var x=0, y=0, color ="black", grosor=1;
let mouse= 0; //defino un boolean para que el mouse este desactivado o activado en el evento

//FUNCION PARA ELEGIR EL COLOR DEL DIBUJO
function defcolor(c) {
  color=c;
}

//FUNCION PARA ELEGIR EL GROSOR DEL LAPIZ PARA EL DIBUJO
function defgrosor (g){
  grosor=g;
}

//FUNCION PARA COMENZAR A DIBUJAR CON EL MOUSE
function lineaInicial(evento) {
  console.log('Estas haciendo mousedown');
  console.log(evento);
  mouse = 1; //Activo el mouse mientras este presionado

}

//FUNCION PARA FINALIZAR EL DIBUJO
function lineaFinal(evento) {
  console.log('Estas haciendo mouseup');
  console.log(evento);
  mouse = 0; //Desactivo el mouse cuando suelto el click

}

//FUNCION PARA DIBUJAR MIENTRAS SE MANTEGA EL MOUSE EN CLICK SOSTENIDO
function lineaMovimiento(evento) {
  console.log('Estas moviendo el mouse');
  console.log(evento);
  var movX = evento.layerX;
  var movY = evento.layerY;
  if (mouse == 1) {
    dibujarLinea(movX-1,movY-1,movX+1,movY+1); //Aqui en las variables las iniciales le restamos 1
                                                              // y a las variables finales se les aumentara
  }

}

//FUNCION PARA DIBUJAR EN EL PAPEL
function dibujarLinea(xinicial,yinicial,xfinal,yfinal) {
  papel.beginPath();
  papel.strokeStyle = color;
  papel.lineWidth= grosor;
  papel.moveTo(xinicial,yinicial);
  papel.lineTo(xfinal,yfinal);
  papel.stroke();
  papel.closePath();
}
