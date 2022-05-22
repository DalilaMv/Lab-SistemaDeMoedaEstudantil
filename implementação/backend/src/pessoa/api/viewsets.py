from rest_framework.viewsets import ModelViewSet
from pessoa.models import *
from pessoa.api.serializers import *
from rest_framework.decorators import action
from rest_framework.response import Response


class PessoaViewSet(ModelViewSet):
    serializer_class = PessoaSerializer
    queryset = Pessoa.objects.all()
    pagination_class = None
    
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
        aluno = Aluno.objects.create(pessoa_id=pessoa.id,
                        rg=request.data["rg"],
                        curso=request.data["curso"])

        return Response("sucesso")


