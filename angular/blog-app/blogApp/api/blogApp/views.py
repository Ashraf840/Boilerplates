from django.http import HttpResponse
from rest_framework import generics, status
from rest_framework.response import Response
from .models import (Tag, Category, Post)
from .serializers import PostSerializer

class PostListCreate(generics.ListCreateAPIView):
    queryset = Post.objects.all().order_by('id')
    serializer_class = PostSerializer
