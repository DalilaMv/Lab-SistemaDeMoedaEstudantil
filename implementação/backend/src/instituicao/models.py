from django.db import models

# Create your models here.

class Instituicao(models.Model):
    nome = models.CharField(max_length=300)
    
    class Meta:
        db_table = 'instituicao'
        
class Departamento(models.Model):
    nome = models.CharField(max_length=300)
    
    class Meta:
        db_table = 'departamento'