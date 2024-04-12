from django.http import HttpResponse
from rest_framework import generics, status
from rest_framework.response import Response
from .models import (Tag, Category, Post)
from .serializers import PostSerializer

class PostListCreate(generics.ListCreateAPIView):
    queryset = Post.objects.all().order_by('id')
    serializer_class = PostSerializer


class PostDetailUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_fields = ('pk',)
