from django.db import models

class Product(models.Model):
    productName = models.CharField(max_length=150)
    color = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    price = models.FloatField()
