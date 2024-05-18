from django.db import models

class Usuario(models.Model):
    id_usuarios = models.AutoField(primary_key=True)
    nome = models.TextField(max_length=50)
    contato = models.CharField(max_length=15, default='')
    profissional = models.TextField(max_length=25)
    cabelo = models.IntegerField()
    barba = models.IntegerField()
    pagamento = models.DateField()
    valor_pago = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
