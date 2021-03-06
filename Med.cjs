var list = [6, 7, 3, 2, 8, 10, 9, 8, 9, 8,10];
var tempList = [];
var dayIgnoreList = [];


//Iniciate vars
    function setList(outval){
        list = outval;
        console.log("this interlist");
        console.log(list);
        resetDayIgnore();
    }

    function getList(){
        return list;
    }


//Day ignore functions
    function addDayIgnore(index){
        dayIgnoreList.push(index);

        tempList = NonIgnoredDays();
    }

    function RemoveDayIgnore(index){
        for (let i = 0; i < dayIgnoreList.length; i++) {
            var element = dayIgnoreList[i];
            
            if (element==index) {
                dayIgnoreList.splice(i,1);
                break;
            }  
        }

        tempList = NonIgnoredDays();
    
    }

    function NonIgnoredDays(){
        var outList = list.slice();
        dayIgnoreList.forEach(element => {
            outList.splice(element,1);
        });

        return outList;
    }

    function resetDayIgnore(){
        dayIgnoreList = [];
        tempList = NonIgnoredDays();
    }

    function nDays(){
        return list.length;
    }

//Add or Remove Days
    function addDay(dayval){
        console.log(listToText(list));
        list.push(dayval);
        console.log(listToText(list));
    }

    function removeDay(index){
        list.splice(index,1);
    }

    function addDayList(dayList){
        dayList.forEach(element => {
            list.push(element);
        });
    }

    function switchindex(i1, i2){
        var hold1 = [];
        var hold2 = [];
        var hold3 = [];
        
        var holdi1 = list[i1];
        var holdi2 = list[i2];
            
        temp1 = i1;
        temp2 = i2;
        
        if (i1>i2) {
            temp1 = i2;
            temp2 = i1;
        }
        

        for (let i = 0; i < temp1; i++) {
            hold1.push(list[i]);
        }
        
        if (i1>i2) {
            hold1.push(holdi1);
            hold1.push(holdi2);
        }

        for (let i = temp1 + 1; i < temp2; i++) {
            hold1.push(list[i]);
        }

        

        if (i2>i1) {
            hold1.push(holdi2);
            hold1.push(holdi1);
        }

        for (let i = temp2+1; i < list.length; i++) {
            hold1.push(list[i]);
        }

        

        if (i2!=i1) {
            list = hold1.slice();
        }
    }

//Med stats functions
    function GeneralMed(){ 
        tempList = NonIgnoredDays();

        var c = 0.0;
        var med = 0.0;
        tempList.forEach(element => {
            med+=element;
            c++;
        });
        console.log(med);
        return med/c;
    }

    function LastDayMed(days){
        var med = 0.0;
        var c = 0.0;

        for (let i = tempList.length-1; (i > tempList.length-days) || i < 0; i--) {
            med += tempList[i];
            c++;   
        }

        return med/c, c;
    }

//Controll vars
    function printList(name, arr){
        var prt = name + ": [";
        arr.forEach(element => {
            prt += " " + element +","; 
        });
        prt+="]"
        console.log(prt);
    }

//Save to File
    function listToText(list){
        var wrt = "";

        for (let index = 0; index < list.length; index++) {
            
            var element = list[index];
            wrt+=element;
            
            if (index < list.length-1) {
                wrt += ",";
            }

        }

        return wrt;
    }

module.exports = {getList,setList, addDay, addDayIgnore, addDayList, GeneralMed, LastDayMed, listToText, nDays, NonIgnoredDays, printList, removeDay, RemoveDayIgnore, resetDayIgnore, switchindex};