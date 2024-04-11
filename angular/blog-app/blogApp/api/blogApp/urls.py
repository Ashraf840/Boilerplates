from django.urls import path
from .views import PostListCreate

app_name = 'blogApp'

urlpatterns = [
    path('api/', PostListCreate.as_view(), name='PostListCreate'),
]
