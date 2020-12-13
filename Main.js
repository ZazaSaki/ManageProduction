var Med = require("./Med.cjs");
var IO = require("./IO.cjs");

var localList = [32, 37, 41, 44, 46];

console.log("breathing");
console.log("Changing List");
Med.setList(localList);

console.log(Med.getList());


IO.saveVals(Med.listToText(Med.getList()));
IO.DrawGraph(Med.listToText(Med.getList()));
IO.DrawLogGraph(Med.listToText(Med.getList()));