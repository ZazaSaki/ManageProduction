from numpy.lib.type_check import common_type
import PredictionGraphGenerator as gmath

def extractRequest(path):
    request = path.split("/",1)[1].split("?",1)
    comand = request[0]
    print(request[1].split(";"))
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
    comand, args = "", []
    release = False
    filePath = ""
    
    try:
        comand, args = extractRequest(path)
        print(comand)
    except:
        print(comand + " ::: ")

    if comand == "logGraph":
        Day, Predict, ImagePath = gmath.LogRegressionGraph(extractArray(args[0]))
        release = True;
        filePath = ImagePath;

    if comand == "drawGraph":
        filePath = gmath.DrawGraph(extractArray(args[0]));
        release = True;
        pass
    
    if comand == "save":
        saveFile(args[0])
        pass

    if comand == "get":
        release = True
        filePath = args[0].split(":")[0]
        pass

    return release, filePath

