# Generated by Django 3.2.13 on 2022-05-25 01:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('empresa', '0003_empresa_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='vantagem',
            name='img',
            field=models.TextField(blank=True, null=True),
        ),
    ]
