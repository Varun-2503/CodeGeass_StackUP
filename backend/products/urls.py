from django.urls import path
from . import views
urlpatterns = [
    path('home',views.getval, name='home')
]