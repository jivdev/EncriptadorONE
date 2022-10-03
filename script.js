function encriptar(){
	validar();
	var texto = document.querySelector("#area-texto").value;
	var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
	document.querySelector("#area-encriptada").value = textoCifrado;
	document.querySelector("#area-texto").value = "";
}

function desencriptar(){
	validar();
	var texto = document.querySelector("#area-texto").value;
	var textoDes = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
	document.querySelector("#area-encriptada").value = textoDes;
	document.querySelector("#area-texto").value = "";
}

function copiar(){
	var textoCopiado = document.querySelector("#area-encriptada");
	textoCopiado.select();
	document.execCommand("copy");
}

function validar(){
	var texto = document.querySelector("#area-texto");
	var validacionTexto = /^[a-z]+(\s+[a-z]+)*$/;
	var verificarTexto = new RegExp(validacionTexto);
	if (!verificarTexto.test(texto.value)){
		texto.style.color = "#F00";
		document.querySelector(".leyenda").style.color = "#F00";
		document.querySelector("#botonEncriptador") = null;
		document.querySelector("#botonDesencriptador") = null;
	}
	else{
		texto.style.color = "#000";
		document.querySelector(".advertencia").style.color = "#000";
	}
}

var btnEncrip = document.querySelector("#botonEncriptador");
btnEncrip.onclick = encriptar;

var btnDesencrip = document.querySelector("#botonDesencriptador");
btnDesencrip.onclick = desencriptar;

var btnCopiar = document.querySelector("#botonCopiar");
btnCopiar.onclick = copiar;