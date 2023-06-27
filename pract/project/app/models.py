from django.db import models

# Create your models here.


class React(models.Model):
    employee = models.models.CharField(max_length=50)
    department = models.models.CharField(max_length=200)