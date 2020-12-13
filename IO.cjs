var Med = require("./Med.cjs");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const url='http://localhost:8080/';
var xmlHttp = new XMLHttpRequest();

function saveVals() {
    comand = "save?" + Med.list;
    xmlHttp.open( "GET", url + comand, false ); // false for synchronous request
    xmlHttp.send( null );
}

function DrawLogGraph() {
    comand = "logGraph?" + Med.list;
    xmlHttp.open( "GET", url + comand, false ); // false for synchronous request
    xmlHttp.send( null );
}

function DrawGraph() {
    comand = "drawGraph?" + Med.list;
    xmlHttp.open( "GET", url + comand, false ); // false for synchronous request
    xmlHttp.send( null );
}
console.log("breathing");
saveVals();
DrawGraph();
DrawLogGraph();

