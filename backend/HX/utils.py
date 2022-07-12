import HX
import subprocess
import csv
import glob
from .models import *

def getLastLine(csvfile):
    with open(csvfile) as file:
        for line in file:
            pass
        print(line)
        return line.split('\n')[0]

def startTempReading():
    f = glob.glob('**/HX.py')[0]
    p = subprocess.Popen(['python', f])
    return p

def writeCurrTempValues(vals):
    """
    vals: comma seperated string
    Currently only store 1 set of values in the database.
    """
    t1, t2, t3, t4 = vals.split(',')
    h = HX.objects.get(id=1)
    h.T1 = t1
    h.T2 = t2
    h.T3 = t3
    h.T4 = t4
    h.save()

def stopTempReading(p):
    p.terminate()
