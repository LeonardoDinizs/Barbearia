# Generated by Django 5.0.3 on 2024-05-15 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('barbearia', '0005_usuario_contato_usuario_valor_pago'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='contato',
            field=models.CharField(default='', max_length=15),
        ),
    ]