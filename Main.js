
const Med = require("./Med.cjs");
const IO = require("./IO.cjs");

var localList = [32, 37, 41, 44, 46];

console.log("breathing");
console.log("Changing List");
Med.setList(localList);

console.log(Med.getList());


IO.saveVals(Med.listToText(Med.getList()));
IO.DrawGraph(Med.listToText(Med.getList()));
IO.DrawLogGraph(Med.listToText(Med.getList()));
/*** */


//________________________________html scripts_________________
var debuger = 0;
var listId = 0;
var sendVals = [];

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
	//getting list
	var ul = document.getElementById("dynamic-list");
	
	//getting vals
	var Production = document.getElementById("Production");
	var Day = document.getElementById("Day");

	
	//checking DayVal == null
	if ((parseInt(Day.value) + "")== "NaN"){
		listId++;
		ul.appendChild(createItem(Production.value, listId));
		
	}else {
		ul.appendChild(createItem(Production.value, Day.value));
		
	}

	
	//sorting List
	sort();
	 
}


//updating the value of last day inserted
function updateListId() {
	var ul = document.getElementById("dynamic-list");
	listId = parseInt(ul.lastElementChild.id);
}

//Sort intern list
function sortInternList(){
	sendVals.sort((a,b)=>{return parseInt(a.id) - parseInt(b.id)});
}


//Sort html an js lists
function sort() {
	var Elist = []
	
	//getting list a the first element
	ul = document.getElementById("dynamic-list");
	temp = document.getElementById("dynamic-list").firstElementChild;
	
	//Feeding the array with list's elements
	Elist.push(temp);
	while (temp.nextElementSibling != null) {
		temp = temp.nextElementSibling;
		Elist.push(temp);
		console.log(temp.id);
	};

	
	//sorting values by day
	Elist.sort((a,b)=>{return parseInt(a.id) - parseInt(b.id)});
	
	//cleanning list
	ul.firstElementChild.remove();
	
	//refilling list with sorted elements
	Elist.forEach(element => {
		ul.appendChild(element);
	});

	//sort intern list
	sortInternList();

	//updating last day in list
	updateListId();

	console.log(sendVals);
}

//verify if day d already exists in list
function ExistDay(d) {
	temp = document.getElementById("dynamic-list").firstElementChild;

	//checking if list is empty
	if (temp == null) {
		return false;
	}

	//checkin if there is a repeated id(day)
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

//create list item 
function createItem(value, thisId) {
	//validating vars
	if (value+"" == "" || ExistDay(thisId)) {
		return;
	}
	
	//adding to intern list
	sendVals.push({"id" : parseInt(thisId), "value" : parseFloat(value)});

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


//remove items from intern list
function removeItem(id){
	rmIndex = sendVals.findIndex((a) => {return a.id == parseInt(id)});
	sendVals.splice(rmIndex,1);

	console.log(sendVals);

	updateListId();
}

//update graphs
function loadgraph(){
	replaceImage("predict", "graphPredict.png");
	replaceImage("vals", "graphVals.png")
	console.log("reloaded");
}

//remove graphs 
function remove(){
	document.getElementById("predict").lastElementChild.remove();
	document.getElementById("vals").lastElementChild.remove();
	console.log("remove");
}

//update a single image by id
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

