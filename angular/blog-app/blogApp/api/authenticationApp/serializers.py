from rest_framework import serializers
from .models import User
from blogApp.models import Post
from django.core import serializers as djc_serializer

# Since the PostSerializer is getting redundant information about the blog post, I defined the minified version of that serializer here.
class PostSerializer(serializers.ModelSerializer):

    category = serializers.StringRelatedField(many=True)
    
    class Meta:
        model = Post
        fields = ['id', 'banner_image', 'category', 'title', 'created_at', 'content']

class AuthorSerializer(serializers.ModelSerializer):

    author_articles = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'profile_pic', 'date_joined', 'author_articles']

    def get_author_articles(self, obj):
        articles = Post.objects.filter(author__username=obj.username)
        article_serializer = PostSerializer(articles, many=True)
        return article_serializer.data
        articles_data = djc_serializer.serialize('json', articles)
        return articles_data