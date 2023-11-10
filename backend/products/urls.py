from django.urls import path
from . import views
urlpatterns = [
    path('/product/search',views.getval, name='search')
]