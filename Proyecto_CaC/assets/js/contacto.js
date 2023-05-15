document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    
    //Valida nombre
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
      alert('Por favor ingrese un nombre valido');
      return;
    }
    
    //Valida apellido
    var apellido = document.getElementById('apellido').value;
    if (apellido.length == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
      alert('Por favor ingrese un apellido valido');
      return;
    }
    
    //Valida telefono
    var valor = document.getElementById("telefono").value;
       if( !(/^\d{8}$/.test(valor)) ) 
      { 
          alert('El telefono debe contener 8 numeros, sin codigo de area ni 0 en la caracteristica. Ejemplo: 55556666');
          return;
      }
  
    
    //Valida email
    var mail = document.getElementById('mail').value;
    if (mail.length == 0) {
      alert('Por favor ingrese una direccion de mail');
      return;
    }
    
   //Valida Terminos y Condiciones
   var elemento = document.getElementById("termcond");
   if( !elemento.checked ) { 
   alert('Debe aceptar los Terminos y Condiciones');
   return;
   }
    
    alert("Muchas gracias por enviar el formulario");
    this.submit();
  }
