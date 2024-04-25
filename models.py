from django.db import models

class usuario(models.Model):
    id_usuarios = models.AutoField(primary_key=True)
    nome = models.TextField(max_length=50)
    profissional= models.TextField(max_length=25)
    cabelo = models.IntegerField()
    barba = models.IntegerField()
    pagamento = models.DateField()
    