window.addEventListener("load", cargarPagina);
var mensajes = document.getElementById("mensajes");
var chat = document.getElementById("chat");
var icon = document.getElementById("icon");
var mensaje = document.getElementById("mensaje");
function cargarPagina(){	
	// var avatar = document.getElementByClassName(avatar);
	// avatar.addEventListener("click", limpiarChat);
	mensajes.addEventListener("keydown", enviarMensaje);
};
function enviarMensaje(e){
	if(e.keyCode ==13){
		var caja = document.createElement("div");
		var div = document.createElement("div");
		var txt = document.createElement("p");
		var reloj = document.createElement("div");
		chat.appendChild(caja); 
		caja.appendChild(div);
		div.appendChild(txt);
		div.appendChild(reloj);
		div.classList.add("div");
		caja.classList.add("w-message");
		txt.innerText = mensajes.value;
		mensajes.value = "";
		mensaje.innerText = txt.innerText;
		reloj.classList.add("time");

		var fecha = new Date();
		var hora = fecha.getHours();
		var minuto = fecha.getMinutes();
		if (minuto < 10){
			minuto = "0" + minuto; 
		}
		var mostrarHora = hora + ":" + minuto;
		reloj.innerText = mostrarHora;
	}
};
// function limpiarChat(){
//}