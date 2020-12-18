var debuger = 0;
//Abre o Menu
  function openNav() {
	loadgraph();
  document.getElementById("myNav").style.width ="100%";
}
//Fecha o Menu
function closeNav() {
	document.getElementById("myNav").style.width = "0%";
	remove();
}

function addItem(){
	 var ul = document.getElementById("dynamic-list");
	 var candidate = document.getElementById("candidate");
	 var li = document.createElement("li");
	 li.setAttribute('id',candidate.value);
	 li.appendChild(document.createTextNode(candidate.value));
	 ul.appendChild(li);
	}
	
	function removeItem(){
		var ul = document.getElementById("dynamic-list");
		var candidate = document.getElementById("candidate");
		var item = document.getElementById(candidate.value);
		ul.removeChild(item);
	}

function loadgraph(){
	replaceImage("predict", "graphPredict.png");
	replaceImage("vals", "graphVals.png")
	console.log("reloaded");
}

function remove(){
	document.getElementById("predict").lastElementChild.remove();
	document.getElementById("vals").lastElementChild.remove();
	console.log("remove");
}


function replaceImage(htmlId, name) { 
	console.log(htmlId);
	var img = document.createElement('img');
	img.alt = "Graph";
	img.width = 500;
	img.src = ("http://localhost:8080/get?./Work/imagens/" + name + ":" + (debuger++));
	img.height = 400;
	console.log(img.src + " this");
	document.getElementById(htmlId).appendChild(img);
}