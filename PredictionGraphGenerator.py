import math
from os import error
from matplotlib.pyplot import plot
import numpy as np
from numpy.lib.function_base import _calculate_shapes
import scipy
import matplotlib.pyplot as plt

def DrawVals(Y):
    c=0
    for target_list in Y:
        plot(c+1,target_list, 'r+')
        c = c + 1
    pass

def getXValsFormYVals(YVals):
    #Setting y values
    xArray = []

    for target_list in YVals:
        xArray.append(len(xArray)+1) 

    XVals = np.array(xArray)

    return XVals

def LogImage(a,b,x):
    return a * math.log(x) + b

def PredictError(a,b, realList):
    count = 1.0
    med = 0.0
    for target_list in realList:
        med += abs(target_list - LogImage(a, b, count))/target_list
        count+=1
    

    return med/count

def DrawPrediction(XVals, YVals, a, b):
    #Calculate Error 
    ErrorMed = PredictError(a,b,YVals)
    #Printing Error
    plot(XVals.size + 4, LogImage(a,b, XVals.size + 4) * (1.0-abs(ErrorMed)), 'bo')

    print("random stuff")
    print(str(ErrorMed) + "tested")

    return (XVals.size + 4, LogImage(a,b, XVals.size + 4) * (1.0-abs(ErrorMed)))

def logRegressionFromList(YVals):
    XVals = getXValsFormYVals(YVals)
    
    #logarithmic regression
    a, b = np.polyfit(np.log(XVals), YVals, 1)
    return XVals,a,b

def drawLogGraph(XVals,a,b):

    #drawing Function
    xs = np.linspace(1, XVals.size + 4, 4*XVals.size + 4)
    ys = a * np.log(xs) + b
    plt.plot(xs, ys, '-gD')

#"""


def LogRegressionGraph(List):
    #Setting y values
    YVals = np.array(List)

    #Logarithmic Regression
    XVals,a,b = logRegressionFromList(YVals)

    #Drawing Graph
    drawLogGraph(XVals,a,b)

    #Drawing Real Points
    DrawVals(YVals)

    #Draw Error
    Day, Predict = DrawPrediction(XVals,YVals, a, b)

    #Saving Results graph
    plt.grid()
    
    Path = './' + 'graphPredict.png';
    
    plt.savefig(Path)

    
    
    return(Day, Predict, Path)    

def DrawGraph(List):
    YVals = np.array(List)
    DrawVals(YVals)
    
    Path = './' + 'graphVals.png';

    plt.savefig(Path)

    return Path







