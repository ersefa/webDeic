//Inicialización de Datepicker para Agenda UCM
$(function(){
	// Datepicker
	$('#agendaUCM').datepicker({
		inline: true,
		dateFormat: 'dd-mm-yy',
        defaultDate: "02-02-2011",
		onSelect: function(dateText, inst){
		            fech_arr=dateText.split('-');
		            url = "http://portal.ucm.es/web/agenda-complutense/agenda?p_p_id=8&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_8_struts_action=%2Fcalendar%2Fview&_8_month=" + eval(fech_arr[1]-1) +"&_8_day=" + fech_arr[0] + "&_8_year=" + fech_arr[2] + "&tabs1=summary";
		            window.location=url;
		          }
	});
});