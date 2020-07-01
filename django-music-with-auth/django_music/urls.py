"""django_music URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.urls import include, path
from albums import views as album_views

urlpatterns = [
    path('', album_views.home, name="home"),
    path('albums/', album_views.list_albums, name="list_albums"),
    path('albums/new', album_views.add_album, name="add_album"),
    path('albums/<int:pk>', album_views.show_album, name="show_album"),
    path('albums/<int:pk>/edit', album_views.edit_album, name="edit_album"),
    path('albums/<int:pk>/delete', album_views.delete_album, name="delete_album"),
    path('genres/<slug:slug>', album_views.show_genre, name="show_genre"),
    path('admin/', admin.site.urls),
    path('accounts/', include('registration.backends.simple.urls')),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),

        # For django versions before 2.0:
        # url(r'^__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
