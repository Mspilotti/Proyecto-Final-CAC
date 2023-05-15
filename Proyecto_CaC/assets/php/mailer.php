<?php
  // Obtén los datos enviados desde el formulario
  $nombre = $_POST['nombre'];
  $apellido = $_POST['apellido'];
  $telefono = $_POST['telefono'];
  $mail = $_POST['mail'];

  // Configura los detalles del correo electrónico
  $destinatario = 'mmarcelo@spilotti.com.ar';
  $asunto = 'Nuevo formulario de contacto';
  $mensaje = "Nombre: $nombre\n";
  $mensaje .= "Apellido: $apellido\n";
  $mensaje .= "Teléfono: $telefono\n";
  $mensaje .= "Email: $mail\n";

  // Envía el correo electrónico
  $enviado = mail($destinatario, $asunto, $mensaje);

  // Verifica si el correo se envió correctamente
  if ($enviado) {
    // Si el envío fue exitoso, puedes enviar una respuesta al cliente
    echo 'ok';
  } else {
    // Si ocurrió un error en el envío, puedes enviar una respuesta al cliente
    echo 'error';
  }
?>