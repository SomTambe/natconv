from django.db import models

class HX_setup(models.Model):
    Tcin_id = models.TextField(max_length=15)
    Tcout_id = models.TextField(max_length=15)
    Thin_id = models.TextField(max_length=15)
    Thout_id = models.TextField(max_length=15)
    Tsetpt_id = models.TextField(max_length=15)

class HX(models.Model):
    T1 = models.FloatField(default=.0)
    T2 = models.FloatField(default=.0)
    T3 = models.FloatField(default=.0)
    T4 = models.FloatField(default=.0)
