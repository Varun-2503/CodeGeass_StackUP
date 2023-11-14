from django.urls import path
from . import views
urlpatterns = [
    path('search',views.getval, name='search'),
    path('addcart',views.addtocart,name='cart'),
    path('viewcart',views.cart,name='thecart')
]