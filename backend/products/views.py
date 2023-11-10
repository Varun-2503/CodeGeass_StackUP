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
        prod = Products.objects.filter(anime=anime,categories = category)
        context = {
            'product_list' : prod,
            'name' : request.user
        }
    return render(request,'products/index.html',context)