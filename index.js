const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

//  API  //

function traducir() {
  const text = document.getElementById('Text').value;
  const target = 'eng';
  const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' + target + '&dt=t&q=' + encodeURI(text);
  fetch(url)
      .then(response => response.json())
      .then(data => {
         document.getElementById("Result").value = data[0][0][0];
      })
      .catch(error => console.error(error))
}

// VALIDACION DEL FORMULARIO //

let nombre = document.getElementById('nombre');
 let apellido = document.getElementById('apellido');
 let calle = document.getElementById('calle');
 let numeracion = document.getElementById('numeracion');
 let piso = document.getElementById('piso');
 let localidad = document.getElementById('localidad');
 let tel = document.getElementById('tel');
 let email = document.getElementById('email');
 let error = document.getElementById('error');
 error.style.color = 'red';
 
let form = document.getElementById('formulario');
form.addEventListener('submit' , function(event){
  event.preventDefault(); 
  let mensajeError = [];
  if(nombre.value === null || nombre.value === ''){
     mensajeError.push('Ingresa tu nombre');
  }
  if(apellido.value === null || apellido.value === ''){
    mensajeError.push('Ingresa tu apellido');
 }
 if(calle.value === null || calle.value === ''){
  mensajeError.push('Ingresa tu calle');
} if(numeracion.value === null || numeracion.value === ''){
  mensajeError.push('Ingresa la numeracion');
}
if(piso.value === null || piso.value === ''){
  mensajeError.push('Ingresa el piso');
}
if(localidad.value === null || localidad.value === ''){
  mensajeError.push('Ingresa la Localidad');
}
if(tel.value === null || tel.value === ''){
  mensajeError.push('Ingresa tu telefono');
}
if(email.value === null || email.value === ''){
  mensajeError.push('Ingresa tu email');
}
 error.innerHTML = mensajeError.join(', ');
});
