//Funcion Login

  function check(form)/*Función para verificar usuario y contraseña*/
  {
   /*
  el siguiente código verifica si el ID de usuario y la contraseña ingresados ​​coinciden*/
   if(form.userid.value == "Administrativo" && form.pswrd.value == "123")
    {
      window.open('Administrativo.html')/*abre la página de destino mientras que Id y contraseña coinciden*/
    }
    if(form.userid.value == "Mecanico" && form.pswrd.value == "123")
     {
       window.open('Mecanico.html')/*abre la página de destino mientras que Id y contraseña coinciden*/
     }
     if(form.userid.value == "Administrador" && form.pswrd.value == "123")
      {
        window.open('Administrador.html')/*abre la página de destino mientras que Id y contraseña coinciden*/
      }
   else
   {
     alert("Error Password or Username")/*displays error message*/
    }
  }
//FUNCIONES DE ALERTAS
  function alertaEliminar() {
    confirm("Confirme para eliminar");
  }

  function alertaCrear(){
    alert("Creado con Exito");
  }

  function alertaEditar(){
    alert("Editado con exito");

  }

  function alertaEnviado(){
    alert("Enviado a Diagnostico con exito");
  }

  function alertaEnviado(){
    alert("Enviado a Diagnostico con exito");
  }

  function alertaPresupuestoAceptado(){
    alert("Vehiculo Ingresado a Reparaciones");
  }

  function alertaPresupuestoRechazado(){
    alert("Presupuesto Rechazado!");
  }

  function alertaEnviarPresupuesto(){
    alert("Presupuesto Guardado");
  }

  function alertaReparacion(){
    alert("Reparacion Enviada");
  }

  function alertaRetiro(){
    alert("Vehiculo Retirado");
  }

  function alertaDiagnostico(){
    alert("Diagnostico Enviado");
  }

  function AlertaOrdenDeCompra(){
    alert("Orden De Compra Enviada");
  }
//FUNCIONES OCULTAR MOSTRAR MENU
  function MostrarCliente(){
    document.getElementById('Cliente').style.display='block';
    document.getElementById('Inventario').style.display='none';
    document.getElementById('Compra').style.display='none';
    document.getElementById('Stock').style.display='none';
  }
  function MostrarInventario(){
    document.getElementById('Inventario').style.display='block';
    document.getElementById('Cliente').style.display='none';
    document.getElementById('Compra').style.display='none';
    document.getElementById('Stock').style.display='none';
  }
  function MostrarCompra(){
    document.getElementById('Compra').style.display='block';
    document.getElementById('Cliente').style.display='none';
    document.getElementById('Inventario').style.display='none';
    document.getElementById('Stock').style.display='none';
  }
  function MostrarStock(){
    document.getElementById('Stock').style.display='block';
    document.getElementById('Cliente').style.display='none';
    document.getElementById('Inventario').style.display='none';
    document.getElementById('Compra').style.display='none';
  }
  function MostrarDiagnostico(){
    document.getElementById('Diagnostico').style.display='block';
    document.getElementById('Reparacion').style.display='none';
  }

  function MostrarReparacion(){
    document.getElementById('Reparacion').style.display='block';
    document.getElementById('Diagnostico').style.display='none';
  }

  function MostrarClienteAdministrador(){
    document.getElementById('ClienteAdmnistrador').style.display='block';
    document.getElementById('TrabajadorAdmnistrador').style.display='none';
    document.getElementById('ProveedorAdministrador').style.display='none';
  }

  function MostrarTrabajadorAdministrador(){
    document.getElementById('TrabajadorAdmnistrador').style.display='block';
    document.getElementById('ClienteAdmnistrador').style.display='none';
    document.getElementById('ProveedorAdministrador').style.display='none';
  }
  function MostrarProveedorAdministrador(){
    document.getElementById('ProveedorAdministrador').style.display='block';
    document.getElementById('ClienteAdmnistrador').style.display='none';
    document.getElementById('TrabajadorAdmnistrador').style.display='none';
  }
// Averiguar para que sirve el resto del codigo
 // Obtener el modal
  var modal = document.getElementById("myModal");

  // Consigue el botón que abre el modal.
  var btn = document.getElementById("myBtn");

  // Obtén el elemento <span> que cierra el modal
  var span = document.getElementsByClassName("close")[0];

  // Cuando el usuario haga clic en el botón, abra el modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // Cuando el usuario haga clic en <span> (x), cierre el modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérrelo
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


//pop up//
// Cuando el usuario haga clic en <div>, abra la ventana emergente
function Popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}



function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}

function closepop() {
  document.getElementsByClassName('popupBoxOnePosition').style.display="none";
}
function closepop() {
  document.getElementsByClassName('EdicionClientePopup').style.display="none";
}


function EstadoVehiculotext() {
  alert("1");
  document.getElementById('EstadoVehiculo').stay.display='block';
  alert("nofunciona");
}
