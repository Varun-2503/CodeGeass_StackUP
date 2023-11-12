from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

categories_choices=(
    ('Tees','Tees'),
    ('Figurines','Figurines'),
    ('Posters','Posters')

)

anime_choices=(
    ('OnePiece','OnePiece'),
    ('Bleach','Bleach'),
    ('AttackOnTitan','AttackOnTitan'),
    ('Baki','Baki'),
    ('Jujutsu Kaisen','Jujutsu Kaisen'),
    ('MHA','MHA'),
    ('YourName','YourName')
)

productprice = (
    ('699','699'),
    ('899','899'),
    ('599','599'),
    ('800','800'),
    ('12000','12000'),
    ('1000','1000'),
    ('8999','8999'),
    ('299','299'),
    ('399','399'),
    ('149','149'),
)

class Products(models.Model):
    title=models.TextField()
    url=models.CharField(max_length=200)
    desc=models.TextField()
    categories=models.CharField(max_length=30,choices=categories_choices)
    subcategories=models.CharField(max_length=40,choices=anime_choices)
    price=models.IntegerField(default=500)

    def __str__(self):
        return (self.title)
