# Generated by Django 4.2.7 on 2023-11-14 17:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0003_alter_cartitems_user_c'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartitems',
            name='user_c',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
