
function EnviarMail(id,prof,b) {
url = "http://www.ucm.es/cont/directorio/enviamail.php?idp=" + escape(id) + "&" + b + "=" +  escape(prof) + "&t=" + (new Date()).getTime();
diremail = window.open(url,"DIRECTORIOIMAIL","resizable,scrollbars=yes,status=no,menubar=no,width=640,height=500");
diremail.focus();
}
function DatosIncorrectos() {
url = "https://www.ucm.es/info/ucmp/cont/directorio/datosincorrectos.php?t=" + (new Date()).getTime();
dirincorrecto = window.open(url,"DIRECTORIOINCORRECTO","resizable,scrollbars=auto,status=yes,menubar=no,width=710,height=640");
dirincorrecto.focus();
}
function SugerenciasCursor() {
if(window.event.keyCode == 13) {
Sugerencias()
}
}
function Sugerencias() {
url = "https://www.ucm.es/info/ucmp/cont/directorio/sugerencias.php?t=" + (new Date()).getTime();
dirincorrecto = window.open(url,"DIRECTORIOINCORRECTO","resizable,scrollbars=auto,status=yes,menubar=no,width=710,height=600");
dirincorrecto.focus();
}


