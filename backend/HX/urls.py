from django.urls import path

from . import views

urlpatterns = [
    path('startTemp', views.startTempLogs.as_view(), name='startTemp'),
    path('stopTemp', views.stopTempLogs.as_view(), name='stopTemp'),
    path('writeTemp', views.writeTempLatest.as_view(), name='writeTemp'),
    path('getTempFlow', views.getTempFlowLatest.as_view(), name='getTempFlow'),
]
