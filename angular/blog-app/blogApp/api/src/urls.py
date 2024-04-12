from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', include(('blogApp.urls', 'app_name'), namespace='blogApplication')),
    path('user/', include(('authenticationApp.urls', 'app_name'), namespace='authenticationApplication')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

