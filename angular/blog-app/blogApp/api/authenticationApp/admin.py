from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

class UserAdmin(BaseUserAdmin):
    # list_display = ['id', 'email', 'username', 'first_name', 'last_name', 'gender', 'phone', 'date_joined', 'last_login', 'last_update', 'is_active', 'is_staff', 'is_author', 'is_admin', 'is_superuser']
    list_display_links = ['email', 'username']
    # search_fields = ['id', 'email', 'username', 'first_name', 'last_name', 'phone' ]
    # readonly_fields = ['password', 'date_joined', 'last_login', 'last_update']

admin.site.register(User)
