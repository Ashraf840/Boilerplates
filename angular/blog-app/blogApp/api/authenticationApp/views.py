from django.shortcuts import render
from rest_framework import generics
from .models import User
from .serializers import AuthorSerializer

class AuthorDetailUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = AuthorSerializer
    lookup_field = 'username'

