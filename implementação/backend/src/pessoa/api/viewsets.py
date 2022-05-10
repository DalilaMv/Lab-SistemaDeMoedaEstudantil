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
    
    @action(methods=['post'], detail=False)
    def save(self, request, *args, **kwargs):
        request.data["username"]
        user = User.objects.create(username=request.data["username"],
                                password=request.data["password"]).save()
        pessoa = Pessoa.objects.create(nome=request.data["nome"],
                                    instituicao_id=request.data["instituicao"],
                                    cpf=request.data["cpf"], 
                                    user_id=user.id).save()
        aluno = Aluno.objects.create(pessoa_id=pessoa,
                        rg=request.data["rg"],
                        curso=request.data["curso"]).save()

        return Response(aluno)


