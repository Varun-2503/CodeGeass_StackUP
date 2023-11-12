from django.shortcuts import render, get_object_or_404
from django.shortcuts import render
from django.views import View
from .models import Products


# Create your views here.
def getval(request):
    prod = Products.objects.all()
    context = {
        'product_list' : prod,
        'name' :request.user
    }

    if(request.method == "POST"):
        category = request.POST.get('category')
        anime = request.POST.get('anime')
        prod = Products.objects.filter(subcategories=anime,categories = category)
        context = {
            'product_list' : prod,
            'name' : request.user
        }
    return render(request,'products/index.html',context)

def add_to_cart(request, product_id):
    product = get_object_or_404(Products, pk=product_id)
    # Implement cart logic, e.g., using sessions
    cart = request.session.get('cart', [])
    cart.append(product.id)
    request.session['cart'] = cart
    return render(request, 'templates/cart.html', {'cart': cart})