First 

> git pull : added the changes made by the other user to my clone of the repo

> git branch backend frontend : To create a branch called backend from already existing branch called frontend

> git checkout backend : We're switching to the branch called backend


main repo aayitt merge cheyyumbo readme.md, docs, resources, etc ennath main-il same aayirikkanam. Ath delete aavaan paadilla, basically

Since he hasn't merged the frontend with the origin, frontend folder is not visible in the origin files. After merging branch backend into the branch frontend, then we have to merge the same with the origin. 

Whenever we git pull, use npm install in the base file (In this case, it's CodeGeass_StackUP)

npm install is used to install all the dependencies in the code.
Since physical transfer of dependencies shouldn't be done, we use npm install to automatically install all the dependencies in the package.json dependencies section (React basics)


localhost:5173 = root page = login page
localhost:5173/register = registration page
localhost:5173/home = Home page

Endpoints are every page's address 

If any package errors come (If Bharath makes any changes and I get error), package.json enna file-il go to dependencies part and check which all are not installed. Install the same using "npm install NAME_OF_DEPENDENCIES". If confused, go to stack overflow. After installation, use npm run dev and verify absence of errors. 

After we installed all the dependencies, we used npm run dev and error onnum vannilla, 
login page -> registration page -> home page

Then inside the src folder, Home.jsx enna file-il we added a couple of more products under the "const products"

> To create a new Django Project, use django-admin startproject PROJECT_NAME

Django.contrib.admin, etc okke built-in django apps aan for admin(To database handling), etc so we use django.contrib.admin etc

Since we are creating the app called 'api', we need not give entire thread length. Similarly, to include other user-defined apps, we just give their names in the INSTALLED_APPS in settings.py

If we're using django for both frontend and backend, we can give like that but here since we are using react framework and django backend, we have to give like 'api.apps.ApiConfig'

rest_framework will be helping to create the "rest API"
It is an architecture which contains Header, body, http response and endpoints.

views.py is where we will attach the endpoints.

urls.py is the code where we will give the path to where the data should be given. urls.py in the project (ecommerce) will have the admin path (admin.site.urls) and connects the path in each of the apps (for example, api is the app here)

> Consider ecommerce-le urls as bigger function and inside it we are going to call api-le urls (Analogy)

path('',include("api.urls")) means that the root path of the project will be all the path present in the api app.

path('admin/',admin.site.urls) means that the path admin.site.urls will be used by the administrator under the name admin. If suppose path('administrator/',admin.site.urls) is given, it means that the path admin.site.urls will be used by the administrator under the name administrator

By cors, we give the project (ecommerce) a permission for data transfer.

We have hosted the react frontend page in 5173 host so we give that in the CORS_ALLOWED_ORIGIN.

My server is running on 8000 port
Frontend is running on 5173 port
CORS_ALLOWED_ORIGINS has given permission to 5173 to share data from/to 8000 

Login/Logout/Register

Whenever we create an app, add it in the installed apps list section in the settings.py file in the project (ecommerce in this case) and follow line number 35

AbstractBaseUser and BaseUserManager are default models in Django which identify the emails and help us authenticate.

Since we're using different front end, we have to give AbstractBaseUser. If only django was used for the whole thing, we need to have given only AbstractUser.

We created a superuser using python manage.py createsuperuser with username and password

In models.py, we're creating a new user in which if email and password are not provided, respective messages are to be popped up.

self.normalize_email(email) will normalize the email into email format removing any irregularities present in it

user=self.model(email=email) passes the email ID to check in the database 

user.set_password(password) creates a password for the particular user 

BaseUserManager-ne call cheyyaan aan we use self

class AppUserManager(AbstractBaseUser,PermissionsMixin):
    user_id=models.AutoField(primary_key=True)

We create an integerID to the user automatically, who have registered in the website.

email=models.EmailField(max_length=50,unique=True)
    username=models.CharField(max_length=50)
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username']

Here we assign diff permissible lengths of characters in email and username and provide a value True to an unique ID

USERNAME_FIELD='email'
REQUIRED_FIELDS=['username']

These 2 lines indicate that the username of the user is their email itself

Then we call the class in a variable called objects. Then we define a function to return the username back to the user

To integrate this and frontend, we have to convert this into a json file. 

Serializers.py converts the models into .json file

views.py will be where we integrate all the code written so far
post means we send data to a server (backend)
get means we request data from server (backend)

Registration and Login = Both are "post"
While we select a particular shoe, we use "get"

UserView (We use "get" To get the data after authentication)


