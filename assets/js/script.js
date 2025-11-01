
/*   ---------------------------------------------   */

let Lv_Mensaje = "Este es mi Cuarto mensaje Alert - Externo - Antes del body"
alert(Lv_Mensaje);

/*   ---------------------------------------------   */
function mostrarAlert(){
	let Lv_Mensaje2 = "Este mensaje se muestra al presinar el botón 'Presioname 2' - Dentro Script interno";
	alert(Lv_Mensaje2);
}

window.addEventListener("DOMContentLoaded",function(){
	/*  
		Se usa constante para que ell vallor del id no sea modificado
		document hace referencia al HTML 
		getElementyById obtiene un valor por su ID 
	*/
	const Btn3 = document.getElementById("BtnPresioname3");
	Btn3.addEventListener("click", function(){
		let Lv_Mensaje_3 = "Este mensaje se muestra al presinar el botón 'Presioname 3' - Dentro Script interno ejecutado por medio de Id";
		alert(Lv_Mensaje_3);
	});
	
	/*  
		Modificar Párrafo uno de HTML
	*/
	let Parrafo="Este párrafo fue MODIFICADO en JavaScript (Externo), no se modificaron las fuentes.";
	const prrf_1 = document.getElementById("Parrafo_1");
	if (prrf_1){
		prrf_1.textContent=Parrafo;
	}
	/*  
		Aqui se hackeo un controll Button en HTM y generó un Alert al usuario
	*/
	const Btn4 = document.getElementById("BtnPresioname4");
	let Lv_Caption = "Tú fuiste hackeado";
	let Lv_Mensaje_4 = "Este Botón no tiene evento click - Script Externo";
	if(Btn4){
		Btn4.addEventListener("click", function(){
			Btn4.textContent= Lv_Caption;
			alert(Lv_Mensaje_4);
		});
	}
	
	/*  
		1. Métodos de JavaScript relacionado con una página HTML
		por puro ID: getElementById
	*/
	const Lv_Titulo= document.getElementById("Titulo");
	Lv_Titulo.textContent="Este valor cambió por medio del document.getElementById()";
	Lv_Titulo.style.color="red";
	/*  
		2. Solo por CLASS: getElementsByClassName
	*/
	const items = document.getElementsByClassName("item");
	for (let i=0; i<items.length; i++){
		items[i].textContent="Método #2: Este parrafo " +(i + 1)+ " con la clase 'item' fue modificado por el elemento: getElementsbyClassName.";
		items[i].style.fontWeight = "bold";
	};
/*  
		3. Solo por etiquetas: getElementsByTagName()
	*/
	const Ln_parrafo = document.getElementsByTagName("p");
	for (let i=0; i<Ln_parrafo.length; i++){
		Ln_parrafo[i].style.border = "3px solid black";
	};
	/*  
		4. querySelector()
	*/
	const ln_selector = document.querySelector("p");
	ln_selector.style.background = "green";

/*  
		5. querySelectorAll()
	*/
	const ln_elementos = document.querySelectorAll("div");
	for (let i=0; i<ln_elementos.length; i++){
		ln_elementos[i].style.background = "yellow";
	};
	



});