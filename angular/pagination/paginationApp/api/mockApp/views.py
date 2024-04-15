from django.http import HttpResponse
from rest_framework import generics, status
from .models import Product
from .serializers import ProductSerializer
from .utils import StandardResultsSetPaginationMixin

class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all().order_by('id')
    serializer_class = ProductSerializer
    pagination_class = StandardResultsSetPaginationMixin