from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):

    tag = serializers.StringRelatedField(many=True)
    category = serializers.StringRelatedField(many=True)
    author = serializers.StringRelatedField()
    author_profile_picture = serializers.SerializerMethodField()
    author_username = serializers.StringRelatedField(source='author.username')
    
    class Meta:
        model = Post
        fields = [
            'id', 'tag', 'category', 'author', 'title', 'content', 
            'readingTime', 'banner_image', 'status', 'created_at',
            'updated_at', 'author_profile_picture', 'author_username',
        ]

    def get_author_profile_picture(self, obj):
        # 'author' is the foreign key field in the 'Post' model which points to 'User' model, thus accessing user 'profile_pic' URL using 'traversing relations'.
        profile_picture_url = obj.author.profile_pic.url

        # Since the user profile_pic URL is not returning the absolute URL unlike banner_image of the blog post, I'm programatically getting the request schema & request host to append them with the profile_pic URL at the end.
        request = self.context.get('request', None)

        if request is not None and request.scheme and request.get_host():
            complete_image_url = f"{request.scheme}://{request.get_host()}{profile_picture_url}"
            profile_picture_url = complete_image_url
            return profile_picture_url
        else:
            return profile_picture_url