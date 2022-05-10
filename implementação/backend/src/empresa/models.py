from django.db import models

# Create your models here.
        
class Empresa(models.Model):
    nome = models.CharField(max_length=300)
    cnpj = models.CharField(max_length=12, unique=True)
    
    class Meta:
        db_table = 'empresa'
    
class Vantagem(models.Model):
    descricao = models.TextField()
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'vantagem'