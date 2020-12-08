from numpy.lib.type_check import common_type
import PredictionGraphGenerator as gmath

def extractRequest(path):
    request = path.split("/",1)[1].split("?",1)
    comand = request[0]
    args = request[1].split(";")

    print("comand : " + comand)
    print("args : ", args[0])

    return(comand, args)

def extractArray(string):
    Array =[]
    for target_list in string.split(","):
        Array.append(float(target_list))
    
    return Array

def saveFile(list):
    f = open("Days.json", "w")
    f.write("{\"List\":[" + list + "]}")
    f.close()
    pass


def ActionSetup(path):
    comand, args = extractRequest(path);

    if comand == "logGraph":
        Day, Predict = gmath.LogRegressionGraph(extractArray(args[0]))

    if comand == "drawGraph":
        gmath.DrawGraph(extractArray(args[0]));
        pass
    
    if comand == "save":
        saveFile(args[0])
        pass

    pass

