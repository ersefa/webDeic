
function menu(element){
	ulElementList = element.getElementsByTagName('ul');
	ulElement = ulElementList[0];
			
	if ((ulElement.style.display == '') || (ulElement.style.display == 'none')) {
		ulElement.style.display = 'block';
	}
	else {
		ulElement.style.display = 'none';
	}
 }
 
 function ocultar(){
	var div1 = document.getElementById('ocultame1');
	div1.style.display = 'none';
	
	var div2 = document.getElementById('ocultame2');
	div2.style.display = 'none';
	
 }