from django.shortcuts import render
from time import sleep
from .tasks import send_email_task

def index(request):
    send_email_task.delay(
        subject="Mail sent using celery - Dynamic",
        message="This is a test mail (using Celery)",
        from_email="python4dia@gmail.com",
        recipient_list=["fewige2175@evimzo.com"],
    )
    return render(request, 'testApp/home.html')
