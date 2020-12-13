var Med = require("./Med.cjs");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const url='http://localhost:8080/';
var xmlHttp = new XMLHttpRequest();

function saveVals(args) {
    comand = "save?" + args;
    xmlHttp.open( "GET", url + comand, false ); // false for synchronous request
    xmlHttp.send( null );
}

function DrawLogGraph(args) {
    comand = "logGraph?" + args;
    xmlHttp.open( "GET", url + comand, false ); // false for synchronous request
    xmlHttp.send( null );
}

function DrawGraph(args) {
    comand = "drawGraph?" + args;
    xmlHttp.open( "GET", url + comand, false ); // false for synchronous request
    xmlHttp.send( null );
}

module.exports = {saveVals, DrawGraph, DrawLogGraph}

