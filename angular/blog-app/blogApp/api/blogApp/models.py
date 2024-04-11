from django.db import models
from django.urls import reverse
from authenticationApp.models import User

class Tag(models.Model):
    title=models.CharField(max_length=100, unique=True)
    
    class Meta:
        verbose_name = "Tag"
        verbose_name_plural = "Tags"

    def __str__(self):
        return self.title


class Category(models.Model):
    title=models.CharField(max_length=100, unique=True)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.title


POST_STATUS_CHOICES = [
    ("DRAFT", "Draft"),
    ("PUBLISHED", "Published"),
    ("ARCHIVED", "Archived"),
]


class Post(models.Model):
    title=models.CharField(max_length=255)
    content=models.TextField()
    readingTime=models.IntegerField()
    category=models.ManyToManyField(Category)
    tag=models.ManyToManyField(Tag)
    author=models.ForeignKey(User, on_delete=models.CASCADE, related_name="post")
    banner_image = models.ImageField(upload_to='blog/', verbose_name='Add Banner Image', blank=True, null=True)
    status=models.CharField(max_length=9, choices=POST_STATUS_CHOICES, default="PUBLISHED")
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Post"
        verbose_name_plural = "Posts"
    
    def __str__(self):
        return self.title