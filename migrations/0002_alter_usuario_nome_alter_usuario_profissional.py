# Generated by Django 5.0.3 on 2024-03-31 22:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('barbearia', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='nome',
            field=models.TextField(max_length=50),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='profissional',
            field=models.TextField(max_length=25),
        ),
    ]
