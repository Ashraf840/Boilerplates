from django.shortcuts import render
from time import sleep
from .tasks import heavy_task

def index(request):
    heavy_task.delay()
    return render(request, 'testApp/home.html')
