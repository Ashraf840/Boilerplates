from django.urls import path
from .views import AuthorDetailUpdateDestroy

app_name = 'authenticationApp'

urlpatterns = [
    path('api/author/<str:username>/', AuthorDetailUpdateDestroy.as_view(), name='AuthorDetailUpdateDestroy'),
]
