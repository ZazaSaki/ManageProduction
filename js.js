//Abre o Menu
  function openNav() {
  document.getElementById("myNav").style.width ="100%";
}
//Fecha o Menu
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function hidden(){
	
	if(Med.nDays()==0){
	  button.hide=true;
	}else
	  button.hide=false;
}