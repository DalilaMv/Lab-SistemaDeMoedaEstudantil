# Generated by Django 3.0.8 on 2022-05-10 02:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('empresa', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='empresa',
            name='cnpj',
            field=models.CharField(max_length=12, unique=True),
        ),
    ]
