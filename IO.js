
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const url='https://jsonplaceholder.typicode.com/posts';
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", url, false ); // false for synchronous request
xmlHttp.send( null );
