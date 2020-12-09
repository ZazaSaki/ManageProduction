export var list = [6, 7, 3, 2, 8, 10, 9, 8, 9, 8,10];
export var tempList = [];
export var dayIgnoreList = [];


//Day ignore export functions
    export function addDayIgnore(index){
        dayIgnoreList.push(index);

        tempList = NonIgnoredDays();
    }

    export function RemoveDayIgnore(index){
        for (let i = 0; i < dayIgnoreList.length; i++) {
            var element = dayIgnoreList[i];
            
            if (element==index) {
                dayIgnoreList.splice(i,1);
                break;
            }  
        }

        tempList = NonIgnoredDays();
    
    }

    export function NonIgnoredDays(){
        var outList = list.slice();
        dayIgnoreList.forEach(element => {
            outList.splice(element,1);
        });

        return outList;
    }

    export function resetDayIgnore(){
        dayIgnoreList = [];
        tempList = NonIgnoredDays();
    }

    export function nDays(){
        return list.length;
    }

//Add or Remove Days
    export function addDay(dayval){
        list.push(dayval);
    }

    export function removeDay(index){
        list.splice(index,1);
    }

    export function addDayList(dayList){
        dayList.forEach(element => {
            list.push(element);
        });
    }

    export function switchindex(i1, i2){
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

//Med stats export functions
    export function GeneralMed(){ 
        var c = 0.0;
        var med = 0.0;
        tempList.forEach(element => {
            med+=element;
            c++;
        });

        return med/c;
    }

    export function LastDayMed(days){
        var med = 0.0;
        var c = 0.0;

        for (let i = tempList.length-1; (i > tempList.length-days) || i < 0; i--) {
            med += tempList[i];
            c++;   
        }

        return med/c, c;
    }

//Controll vars
    export function printList(name, arr){
        var prt = name + ": [";
        arr.forEach(element => {
            prt += " " + element +","; 
        });
        prt+="]"
        console.log(prt);
    }

//Save to File
    export export function listToText(list){
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

