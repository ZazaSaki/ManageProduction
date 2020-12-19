var debuger = 0;
var listId = 0;
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
	 
	var Production = document.getElementById("Production");
	var Day = document.getElementById("Day");

	 
	if ((parseInt(Day.value) + "")== "NaN"){
		listId++;
		ul.appendChild(createItem(Production.value, listId));
	}else {
		ul.appendChild(createItem(Production.value, Day.value));
		
	}
	sort();
	console.log(listId);
	 
}

function updateListId() {
	var ul = document.getElementById("dynamic-list");
	listId = parseInt(ul.lastElementChild.id);
}

function sort() {
	var Elist = []
	
	ul = document.getElementById("dynamic-list");
	temp = document.getElementById("dynamic-list").firstElementChild;
	
	
	Elist.push(temp);
	while (temp.nextElementSibling != null) {
		temp = temp.nextElementSibling;
		Elist.push(temp);
		console.log(temp.id);
	};

	
	Elist.sort((a,b)=>{return parseInt(a.id) - parseInt(b.id)})

	ul.firstElementChild.remove();

	Elist.forEach(element => {
		ul.appendChild(element)
	});

	updateListId();
}

function ExistDay(d) {
	temp = document.getElementById("dynamic-list").firstElementChild;

	if (temp == null) {
		return false;
	}

	if (parseInt(temp.id) == d) {
		return true;
	}
	
	while (temp.nextElementSibling != null) {
		temp = temp.nextElementSibling;
		if (parseInt(temp.id) == d) {
			return true;
		}
	};

	return false;
}

function createItem(value, thisId) {
	//validating vars
	
	if (value+"" == "" || ExistDay(thisId)) {
		return;
	}
	
	//create item
	var li = document.createElement("li");
	li.setAttribute('id',value);
	li.appendChild(document.createTextNode("Dia " + thisId + " : " + value));
	li.id = thisId;
	
	//create ignore button
	var IgnoreBt = createButton("ignore", thisId, null);

	//adding button
	li.appendChild(IgnoreBt);

	//create delete button
	var DeleteBt = createButton("delete", thisId, function(){li.remove(); removeItem(li.id);});

	//adding button
	li.appendChild(DeleteBt);
	
	return li;
}

function createButton(name, parentId, event){
	var Button = document.createElement("button");
	Button.id = name + "_" + parentId;
	Button.appendChild(document.createTextNode(name));
	Button.onclick = event;

	return Button;
}



function removeItem(id){
	updateListId();
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