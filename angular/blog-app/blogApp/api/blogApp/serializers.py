from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):

    tag = serializers.StringRelatedField(many=True)
    category = serializers.StringRelatedField(many=True)
    author = serializers.StringRelatedField()
    
    class Meta:
        model = Post
        fields = '__all__'
