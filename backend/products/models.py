from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

categories_choices=(
    ('t-shirts','Tees'),
    ('figurines','Figurines'),
    ('posters','Posters')

)

anime_choices=(
    ('one-piece','OnePiece'),
    ('bleach','Bleach'),
    ('aot','AttackOnTitan'),
    ('baki','Baki'),
    ('jjk','Jujutsu Kaisen'),
    ('bnha','MHA'),
    ('yourname','YourName')
)

class Products(models.Model):
    title=models.TextField()
    url=models.CharField(max_length=200)
    desc=models.TextField()
    categories=models.CharField(max_length=30,choices=categories_choices)
    subcategories=models.CharField(max_length=40,choices=anime_choices)

    def __str__(self):
        return (self.title)
