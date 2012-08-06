<!--

function ValidarFormSugerencias() {
   var f = document.forms[0];
   var msg = "";
   var camposcom = new Array("sugerenciaerror");
   var eticamposcom = new Array("Sugerencia")
   for (var i = 0; i < camposcom.length;i++) {
        var e = MM_findObj(camposcom[i]);
        if (vacio(e.value) || e.value == 'Escriba aquí su sugerencia') {
           msg += "Es necesario que escriba la sugerencia que desea transmitir\n";
        }
    }
//   if(vacio(f.idemailcom.value)) {
//       msg += "Es necesario que nos especifique su correo electrónico para comunicarle el resultado de su sugerencia\n";
//   } else {
//   }
   if(vacio(msg)) {
      var vinculacion = MM_findObj("tipocom");
      if(vinculacion.selectedIndex == '3') {
         var pet = "";
         while(vacio(pet)) {
           var pet = prompt('¿Especifique cual es la otra vinculación con la Universidad Complutense?',"");
           if(pet==null)
              return;
         }
         f.otrotipo.value = pet;
      }
//      f.submit();
        return true;
   } else {
      alert(msg);
      return false;
   }
}

function ValidarFormPersonas() {
   var f = document.forms[0];
   var msg = "";
   var camposcom = new Array("nombrecom","apellidoscom","emailcom","telefonocom");
   var eticamposcom = new Array("Nombre del comunicante","Apellidos del comunicante","Correo electrónico del comunicante","Teléfono del comunicante")
   for (var i = 0; i < camposcom.length;i++) {
        var e = MM_findObj(camposcom[i]);
        if (vacio(e.value)) {
           msg += "El campo " + eticamposcom[i] + "\n";
        }
    }
   var camposiden = new Array("nombreiden","apellidosiden");
   var eticamposiden = new Array("Nombre de la persona con datos incorrectos","Apellidos de la persona con datos incorrectos")
   for (var i = 0; i < camposiden.length;i++) {
        var e = MM_findObj(camposiden[i]);
        if (vacio(e.value)) {
           msg += "El campo " + eticamposiden[i] + "\n";
        }
    }
    var c = MM_findObj("centroiden");
    if(c.selectedIndex == 0) {
           msg += "El campo centro de la persona con datos erroneos\n";
    }
    datosincorrectos = false;
    for (var i=0; i < f.elements.length;i++) {
        var viendo = f.elements[i];
        var n = viendo.name;
        if(vacio(n)) 
           continue;
        if(n.indexOf("error") != -1) {
           if(viendo.type == 'select-one' && viendo.selectedIndex != 0) {
                datosincorrectos=true;
           }
           if((viendo.type == 'text' || viendo.type == 'textarea') && !vacio(viendo.value)) {
              datosincorrectos=true;
           }
        }
    }
   if(!datosincorrectos) {
      msg += "Especificar algún dato que deba figurar en el directorio\n";
   }
   if(vacio(msg)) {
//      f.submit();
     return true;
   } else {
      alert("Para modificar un registro en el Directorio de personal es necesario:\n\n" + msg);
      return false;
   }
}

function ValidarFormEntidades() {
   var f = document.forms[0];
   var msg = "";
   var camposcom = new Array("nombrecom","apellidoscom","emailcom","telefonocom");
   var eticamposcom = new Array("Nombre del comunicante","Apellidos del comunicante","Correo electrónico del comunicante","Teléfono del comunicante");
   for (var i = 0; i < camposcom.length;i++) {
       var e = MM_findObj(camposcom[i]);
       if (vacio(e.value)) {
          msg += "El campo " + eticamposcom[i] + "\n";
       }
   }
   var zradio = MM_findObj("accion");
   for (var h = 0; h < zradio.length; h++) {
       if (zradio[h].checked) zaccion=zradio[h].value;
   }
   var camposiden = new Array();
   var eticamposiden = new Array();
   if(zaccion != 'Añadir') {
      camposiden = new Array("nombreiden");
      eticamposiden = new Array("Nombre del Centro/Servicio con datos incorrectos o a eliminar");
   } else {
      camposiden = new Array("nombreerror","telefonoerror");
      eticamposiden = new Array("Nombre del nuevo centro/servicio","Télefono del nuevo centro/servicio");
   }
   for (var i = 0; i < camposiden.length;i++) {
        var e = MM_findObj(camposiden[i]);
        if (vacio(e.value)) {
           msg += "El campo " + eticamposiden[i] + "\n";
        }
    }
    if(zaccion == 'Eliminar') {
       datosincorrectos = true;
    } else {
       datosincorrectos = false;
       for (var i=0; i < f.elements.length;i++) {
           var viendo = f.elements[i];
           var n = viendo.name;
           if(vacio(n)) 
              continue;
           if(n.indexOf("error") != -1) {
              if(viendo.type == 'select-one' && viendo.selectedIndex != 0) {
                   datosincorrectos=true;
              }
              if((viendo.type == 'text' || viendo.type == 'textarea') && !vacio(viendo.value)) {
                 datosincorrectos=true;
              }
           }
       }
   }
   if(!datosincorrectos) {
      msg += "Especificar algún dato que deba figurar en el directorio\n";
   }
   if(vacio(msg)) {
      if(zaccion == 'Eliminar') {
         var pet = "";
         while(vacio(pet)) {
           var pet = prompt('¿Cual es el motivo por el que hay que eliminar el Centro/Servicio del Directorio?',"");
           if(pet==null)
              return;
         }
         f.observacion.value = pet;
      }
//      f.submit();
      return true;

   } else {
      alert('Para ' + zaccion + " un registro en el Directorio de Centros/Servicios es necesario:\n\n" + msg);
      return false;
   }
}

function ValidarFormCargos() {
   var f = document.forms[0];
   var msg = "";
   var camposcom = new Array("nombrecom","apellidoscom","emailcom","telefonocom");
   var eticamposcom = new Array("Nombre del comunicante","Apellidos del comunicante","Correo electrónico del comunicante","Teléfono del comunicante");
   for (var i = 0; i < camposcom.length;i++) {
       var e = MM_findObj(camposcom[i]);
       if (vacio(e.value)) {
          msg += "El campo " + eticamposcom[i] + "\n";
       }
   }
   var zradio = MM_findObj("accion");
   for (var h = 0; h < zradio.length; h++) {
       if (zradio[h].checked) zaccion=zradio[h].value;
   }
   var camposiden = new Array();
   var eticamposiden = new Array();
   if(zaccion != 'Añadir') {
      var c = MM_findObj("cargoiden");
      if(c.selectedIndex == 0) {
           msg += "El campo cargo con datos erroneos\n";
      } else {
          var zn = c.options[c.selectedIndex].value;
          if(zn.indexOf("Vicede") != -1 || zn.indexOf("Vicerre") != -1) {
             camposiden = new Array("tituloiden");
             eticamposiden = new Array("Título del cargo con datos incorrectos o a eliminar");
          }
      }
   } else {
      var c = MM_findObj("cargoerror");
      if(c.selectedIndex == '0') {
           msg += "Debe especificar el nuevo cargo\n";
      }
      camposiden = new Array("telefonoerror");
      eticamposiden = new Array("Télefono del nuevo cargo");
   }
   for (var i = 0; i < camposiden.length;i++) {
        var e = MM_findObj(camposiden[i]);
        if (vacio(e.value)) {
           msg += "El campo " + eticamposiden[i] + "\n";
        }
    }
    if(zaccion == 'Eliminar') {
       datosincorrectos = true;
    } else {
       datosincorrectos = false;
       for (var i=0; i < f.elements.length;i++) {
           var viendo = f.elements[i];
           var n = viendo.name;
           if(vacio(n)) 
              continue;
           if(n.indexOf("error") != -1) {
              if(viendo.type == 'select-one' && viendo.selectedIndex != 0) {
                   datosincorrectos=true;
              }
              if((viendo.type == 'text' || viendo.type == 'textarea') && !vacio(viendo.value)) {
                 datosincorrectos=true;
              }
           }
       }
   }
   if(!datosincorrectos) {
      msg += "Especificar algún dato que deba figurar en el directorio\n";
   }
   if(vacio(msg)) {
      if(zaccion == 'Eliminar') {
         var pet = "";
         while(vacio(pet)) {
           var pet = prompt('¿Cual es el motivo por el que hay que eliminar el cargo?',"");
           if(pet==null)
              return;
         }
         f.observacion.value = pet;
      }
//      f.submit();
        return true;
   } else {
      alert('Para ' + zaccion + " un registro del Directorio de cargos es necesario:\n\n" + msg);
      return false;
   }
}

function ValidarEnvio() {
   var f = document.forms[0];
   if(vacio(f.emailor.value) || vacio(f.mensaje.value))
     return false;
   f.submit();
}

function ValidarContinuar() {
   var f = document.forms[0];
   var base = false;
   var zradio = f.tipo;
   for (var h = 0; h < zradio.length; h++) {
       if (zradio[h].checked) base=true;
   }
   if(base) {
//     f.submit();
       return true;
   } else {
      alert("Seleccione la base de donde desea comunicar los datos incorrectos");
      return false;
   }
}

function vacio(s) {
    if (s == null || s == "" || esblanco(s))
       return true;
    return false;
}

function esblanco(s) {
    for (var i = 0; i < s.length; i++) {
       var c = s.charAt(i);
       if ((c != ' ') && (c != '\n') && (c != '\t')) return false;
    }
    return true;
}

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document;
  if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);
  }
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

// -->