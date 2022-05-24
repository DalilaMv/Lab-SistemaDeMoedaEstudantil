from django.http import JsonResponse
from rest_framework.viewsets import ModelViewSet
from empresa.models import Empresa
from pessoa.models import *
from pessoa.api.serializers import *
from rest_framework.decorators import action
from rest_framework.response import Response

class PessoaViewSet(ModelViewSet):
    serializer_class = PessoaSerializer
    queryset = Pessoa.objects.all()
    pagination_class = None
    
    @action(methods=['post'], detail=False)
    def update_saldo(self, request, pk=None):
        user = self.request.user.id
        Pessoa.objects.filter(user_id=user).update(saldo=request.data["saldo"])
        return JsonResponse('Success', safe=False)
        
    @action(methods=['get'], detail=False)
    def get_saldo(self, request, pk=None):
        user = self.request.user.id
        saldo_user = Pessoa.objects.filter(user_id=user).select_related('saldo')
        return JsonResponse(saldo_user, safe=False)

class AlunoViewSet(ModelViewSet):
    serializer_class = AlunoSerializer
    queryset = Aluno.objects.all()
    pagination_class = None
    
    def list(self, request, *args, **kwargs):
        query_aluno = Aluno.objects.select_related('pessoa_id').values('id','curso','rg','pessoa__nome','pessoa__cpf','pessoa__instituicao__nome')
        return Response(query_aluno)
    
    def create(self, request, *args, **kwargs):
        user = User.objects.create(username=request.data["username"],
                                password=request.data["password"])
        pessoa = Pessoa.objects.create(nome=request.data["nome"],
                                    instituicao_id=request.data["instituicao"],
                                    cpf=request.data["cpf"], 
                                    user_id=user.id)
        Aluno.objects.create(pessoa_id=pessoa.id,
                        rg=request.data["rg"],
                        curso=request.data["curso"])

        return Response("sucesso")

class ProfessorViewSet(ModelViewSet):
    serializer_class = ProfessorSerializer
    querySet = Professor.objects.all()
    pagination_class = None

    def list(self, request, *args, **kwargs):
        query_professor = Professor.objects.select_related('pessoa_id').values('id','curso','rg','pessoa__nome','pessoa__cpf','pessoa__instituicao__nome')
        return Response(query_professor)
    
    def create(self, request, *args, **kwargs):
        user = User.objects.create(username=request.data["username"],
                                password=request.data["password"])
        pessoa = Pessoa.objects.create(nome=request.data["nome"],
                                    instituicao_id=request.data["instituicao"],
                                    cpf=request.data["cpf"], 
                                    user_id=user.id)
        Professor.objects.create(pessoa_id=pessoa.id,
                        departamento=request.data["departamento"])

        return Response("sucesso")
    
    
class ExtratoViewSet(ModelViewSet):
    serializer_class = ExtratoSerializer
    querySet = Extrato.objects.all()
    pagination_class = None
    
    # testar se funciona
    def create(self, request, *args, **kwargs):
        user_remetente = self.request.user.id
        destinatario = request.data["destinatario"]
        # testar se funciona
        id_destinatario = ''
        if request.data["destinatario_tipo"] == "aluno":
            id_destinatario = Aluno.objects.filter(id=destinatario).select_related('pessoa_id').values('pessoa__user__id')
        else:
            id_destinatario = Professor.objects.filter(id=destinatario).select_related('pessoa_id').values('pessoa__user__id')

        extrato = Extrato.objects.create(valor_enviado=request.data["valor_enviado"],
                                        destinatario_id=id_destinatario,
                                        remetente=user_remetente)
    

        return Response("sucesso")
    