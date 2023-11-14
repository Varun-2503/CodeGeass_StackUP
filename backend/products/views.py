from django.shortcuts import render,redirect
from django.views import View
from .models import Products,CartItems


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

def cart(request):
    c=CartItems.objects.filter(user_c=request.user)
    context = {
        'product_list' : c,
        'name' :request.user
    }
    # product = get_object_or_404(Products, pk=product_id)
    # # Implement cart logic, e.g., using sessions
    # cart = request.session.get('cart', [])
    # cart.append(product.id)
    # request.session['cart'] = cart
    return render(request, 'products/cart.html', context)

def addtocart(request):
    customer=request.user
    cartprod=request.POST.get('title')
    c=CartItems.objects.create(product=cartprod,user_c=customer)
    c.save()
    return redirect(getval)