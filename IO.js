
export var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

export const url='http://localhost:8888/';
export var xmlHttp = new XMLHttpRequest();

export function saveVals(List) {
    comand = "save?" + List;
    xmlHttp.open( "GET", url + comand, false ); // false for synchronous request
    xmlHttp.send( null );
}

export function DrawLogGraph(List) {
    comand = "logGraph?" + List;
    xmlHttp.open( "GET", url + comand, false ); // false for synchronous request
    xmlHttp.send( null );
}

export function DrawGraph(List) {
    comand = "drawGraph?" + List;
    xmlHttp.open( "GET", url + comand, false ); // false for synchronous request
    xmlHttp.send( null );
}