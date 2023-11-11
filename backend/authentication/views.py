from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from products.models import Products
from django.http import HttpResponse

def home(request):
    return render(request, 'authentication/home.html')

def signin(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        prod = Products.objects.all()
        context = {
            'product_list' : prod,
            'name' :request.user
        }
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request,user)
            return render(request, 'authentication/app.html', context)

        else:
            messages.error(request, "Wrong Credentials")
            return redirect('/signin')
    return render(request, 'authentication/app.html')

def signup(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        if User.objects.filter(username=username):
            messages.error(request, "Username already exist!")
            return redirect('/signin')
        if len(username)>10:
            messages.error(request, "Username less than 10 characters please")
            return redirect('/signup')
        if not username.isalnum():
            messages.error(request, "Username should be Alpha Numeric")
            return redirect('/signup')

        myuser = User.objects.create_user(username,' ',password)
        myuser.first_name = username
        myuser.save()
        messages.success(request, "Your account created successfully")
        return redirect('/signin')
    return render(request, 'authentication/register.html')

def signout(request):
    logout(request)
    messages.success(request, 'logout sucess')
    return redirect('/home')