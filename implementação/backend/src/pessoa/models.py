from django.db import models
from django.contrib.auth.models import User
from instituicao.models import Instituicao, Departamento
# Create your models here.

class Pessoa(models.Model):
    nome = models.CharField(max_length=300)
    instituicao = models.ForeignKey(Instituicao, on_delete=models.CASCADE)
    cpf = models.CharField(max_length=11, unique=True)
    user = models.ForeignKey(User, models.PROTECT)
    
    class Meta:
        db_table = 'pessoa'
        
class Aluno(models.Model):
    pessoa = models.ForeignKey(Pessoa, on_delete=models.CASCADE)
    rg = models.CharField(max_length=300, unique=True)
    curso = models.CharField(max_length=300)
    
    class Meta:
        db_table = 'aluno'
        
class Professor(models.Model):
    pessoa = models.ForeignKey(Pessoa, on_delete=models.CASCADE)
    departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'professor'