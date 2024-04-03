"""
URL configuration for database280 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
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

# from django.contrib import admin
# from django.urls import path

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api-auth/', include('rest_framework.urls'))
# ]

from django.urls import path
from main import views

urlpatterns = [
    path('register', views.UserRegister.as_view(), name = 'register'),
    path('login', views.UserLogin.as_view(), name = 'login'),
    path('logout', views.UserLogout.as_view(), name = 'logout'),
    path('user', views.UserView.as_view(), name = 'user'),
    path('dbTest', views.DatabaseTest, name = 'dbTest'),

]
