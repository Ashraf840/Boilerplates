from django.urls import path
from .views import PostListCreate, PostDetailUpdateDestroy

app_name = 'blogApp'

urlpatterns = [
    path('api/', PostListCreate.as_view(), name='PostListCreate'),
    path('api/<int:pk>/', PostDetailUpdateDestroy.as_view(), name='PostDetailUpdateDestroy'),
]
