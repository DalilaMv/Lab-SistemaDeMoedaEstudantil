from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Empresa(models.Model):
    nome = models.CharField(max_length=300)
    cnpj = models.CharField(max_length=12, unique=True)
    user = models.ForeignKey(User, models.PROTECT, null=True, blank=True)
    
    class Meta:
        db_table = 'empresa'
    
class Vantagem(models.Model):
    descricao = models.TextField()
    img = models.TextField(blank=True, null=True)
    titulo = models.CharField(max_length=200, null=True, blank=True)
    valor = models.IntegerField(null=True, blank=True)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'vantagem'