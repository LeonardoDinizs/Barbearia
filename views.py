from django.shortcuts import render
from .models import usuario

def home(request):
    return render(request, 'usuarios/home.html')

def usuarios(request):
    novo_usuario = usuario()
    novo_usuario.nome = request.POST.get('nome')
    novo_usuario.profissional = request.POST.get('profissional')
    novo_usuario.cabelo = request.POST.get('cabelo')
    novo_usuario.barba = request.POST.get('barba')
    novo_usuario.pagamento = request.POST.get('pagamento')
    novo_usuario.save()

    usuarios = {
       'usuarios': usuario.objects.all() 
    }
    return render(request,'usuarios/usuarios.html',usuarios)