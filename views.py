from django.shortcuts import render
from .models import Usuario

def home(request):
    return render(request, 'usuarios/home.html')

def usuarios(request):
    if request.method == 'POST':
        novo_usuario = Usuario()
        novo_usuario.nome = request.POST.get('nome')
        novo_usuario.contato = request.POST.get('contato')
        novo_usuario.profissional = request.POST.get('profissional')
        novo_usuario.cabelo = request.POST.get('cabelo')
        novo_usuario.barba = request.POST.get('barba')
        novo_usuario.pagamento = request.POST.get('pagamento')
        novo_usuario.valor_pago = request.POST.get('valor_pago')
        novo_usuario.save()

    usuarios = {
       'usuarios': Usuario.objects.all() 
    }
    return render(request,'usuarios/usuarios.html', usuarios)
