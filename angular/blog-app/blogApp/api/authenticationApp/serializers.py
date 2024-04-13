from rest_framework import serializers
from .models import User
from blogApp.models import Post
from django.core import serializers as djc_serializer

# Since the PostSerializer is getting redundant information about the blog post, I defined the minified version of that serializer here.
class PostSerializer(serializers.ModelSerializer):

    category = serializers.StringRelatedField(many=True)
    banner_image_absolute_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Post
        fields = ['id', 'banner_image_absolute_url', 'category', 'title', 'created_at', 'content']

    def get_banner_image_absolute_url(self, obj):
        banner_image_url = obj.banner_image

        request = self.context.get('request', None)

        if request is not None and request.scheme and request.get_host():
            complete_image_url = f"{request.scheme}://{request.get_host()}/media/{banner_image_url}"
            banner_image_url = complete_image_url
            return banner_image_url
        else:
            return banner_image_url

class AuthorSerializer(serializers.ModelSerializer):

    author_articles = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'profile_pic', 'date_joined', 'author_articles']

    def get_author_articles(self, obj):
        articles = Post.objects.filter(author__username=obj.username)
        request = self.context['request']
        article_serializer = PostSerializer(articles, many=True, context={'request': request})
        return article_serializer.data
        articles_data = djc_serializer.serialize('json', articles)
        return articles_data