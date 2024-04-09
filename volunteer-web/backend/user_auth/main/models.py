from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

# Create your models here.
class AppUserManager(BaseUserManager):
    def create_user(self, email, password = None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required')
        email = self.normalize_email(email)
        user = self.model(email = email)
        user.set_password(password)
        user.save() 
        return user
    
    def create_superuser(self, email, username, password = None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required')
        if not username:
            raise ValueError('A username is required')
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save() 
        return user
    
class AppUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=50)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    objects = AppUserManager()
    def __str__(self):
        return self.username

class DatabaseTestCharity(models.Model):
    charity_id = models.IntegerField()
    charity_name = models.CharField(max_length=45)
    overview = models.TextField()
    about_charity = models.TextField()
    profile_image = models.BinaryField()
    location_id = models.IntegerField(default=0)

    def __str__(self):
        return self.overview