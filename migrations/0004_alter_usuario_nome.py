# Generated by Django 5.0.3 on 2024-05-14 22:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('barbearia', '0003_alter_usuario_nome'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='nome',
            field=models.TextField(max_length=50),
        ),
    ]
