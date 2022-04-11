from urllib import request
from django.http import HttpResponse, JsonResponse
from .utils import *
from rest_framework.response import Response
from rest_framework import permissions, status
from .serializer import *
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from rest_framework.views import APIView
import json

pcid_temp = 0

class getTempFlowLatest(APIView):
    def get(self, request):
        h = HX.objects.get(id=1)
        ser = GetHX(h)
        print(ser.data)
        return Response(ser.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        return HttpResponse("Bad Request.", status=406)

class writeTempLatest(APIView):
    def get(self, request):
        l = getLastLine('temp.csv')
        writeCurrTempValues(l)
        return Response(status=status.HTTP_200_OK)
    
    def post(self, request):
        return HttpResponse("Bad Request.", status=406)

class startTempLogs(APIView):
    def get(self, request):
        global pcid_temp
        pcid_temp = startTempReading()
        return Response(status=status.HTTP_200_OK)
    
    def post(self, request):
        return HttpResponse("Bad Request.", status=406)

class stopTempLogs(APIView):
    def get(self, request):
        global pcid_temp
        stopTempReading(pcid_temp)
        return Response(status=status.HTTP_200_OK)
    
    def post(self, request):
        return HttpResponse("Bad Request.", status=406)
