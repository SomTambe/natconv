from rest_framework import serializers
from .models import *

class GetHX(serializers.ModelSerializer):
    class Meta:
        model = HX
        fields = ('T1', 'T2', 'T3', 'T4')
