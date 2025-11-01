
window.addEventListener("DOMContentLoaded", function(){
	
	
	const textoNombre = document.getElementById("TxtName");
	const textoCorreo = document.getElementById("TxtEmail");
	const selectorPais = document.getElementById("Sltpais");
	
	textoNombre.addEventListener("click", function(){
		let Lv_Mensaje_3 = "Escribiendo nombre...";
		alert(Lv_Mensaje_3);
	});
	
	textoCorreo.addEventListener("click", function(){
		let Lv_Mensaje_4 = "Escribiendo correo...";
		alert(Lv_Mensaje_4);
	});
	
	selectorPais.addEventListener("click", function(){
		let Lv_Mensaje_5 = "Escogiendo pais...";
		alert(Lv_Mensaje_5);
	});

});

