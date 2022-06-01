from django.http import JsonResponse
from rest_framework.viewsets import ModelViewSet
from empresa.models import Empresa
from app.utils.email_notification import send_email
from pessoa.models import *
from pessoa.api.serializers import *
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q

class PessoaViewSet(ModelViewSet):
    serializer_class = PessoaSerializer
    queryset = Pessoa.objects.all()
    pagination_class = None
    
    @action(methods=['post'], detail=False)
    def update_saldo(self, request, pk=None):

        id_destinatario = request.data["destinatario"]
        if request.data["tipo_destinatario"]=="aluno":
            dest = Aluno.objects.get(id=id_destinatario)
        else:
            dest = Professor.objects.get(id=id_destinatario)
        

        Pessoa.objects.filter(id=dest.pessoa_id).update(saldo=request.data["saldo_destinatario"])
        id_rem = self.request.user.id

        Pessoa.objects.filter(user_id=id_rem).update(saldo=request.data["saldo_remetente"])
        return JsonResponse('Success', safe=False)
        
    @action(methods=['get'], detail=False)
    def get_saldo(self, request, pk=None):
        user = self.request.user.id
        saldo_user = Pessoa.objects.get(user_id=user).saldo
        return JsonResponse(saldo_user, safe=False)

class AlunoViewSet(ModelViewSet):
    serializer_class = AlunoSerializer
    queryset = Aluno.objects.all()
    pagination_class = None
    
    @action(methods=['post'], detail=False)
    def get_vantagem(self, request, pk=None):
        aluno_user =  self.request.user
        #atualiza o saldo do aluno para o novo valor que o front envia
        aluno_p = Pessoa.objects.filter(user_id=aluno_user.id).update(saldo=request.data["novo_saldo"])
        empresa = Empresa.objects.get(id=request.data["empresa"])
        Extrato.objects.create(valor_enviado=request.data["valor_enviado"],
                                remetente_id=aluno_user.id,
                                destinatario_id=empresa.id
                            )
        
        # email para o aluno
        assunto = 'Código de troca de vantagem'
        destinatario = aluno_user.email
        mensagem = 'Olá, para resgatar sua vantagem informe o seguinte código: {}.'.format(request.data["vantagem"])
        send_email(self, assunto, destinatario, mensagem)
        # email para a empresa 
        
        destinatario = User.objects.get(id=Empresa.objects.get(id=empresa.id).user_id).email
        mensagem = 'Olá, o código da sua vantagem é {}, favor confirmar na hora do resgate'.format(request.data['vantagem'])
        send_email(self, assunto, destinatario, mensagem)
        return JsonResponse('Success', safe=False)
    
    def list(self, request, *args, **kwargs):
        query_aluno = Aluno.objects.select_related('pessoa_id').values('id','curso','rg','pessoa__nome','pessoa__cpf','pessoa__instituicao__nome', 'pessoa__saldo')
        return Response(query_aluno)
    
    def create(self, request, *args, **kwargs):
        user = User.objects.create(username=request.data["username"],
                                password=request.data["password"],
                                email=request.data["email"])
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
        query_professor = Professor.objects.select_related('pessoa_id').values('id','departamento','pessoa__nome','pessoa__cpf','pessoa__instituicao__nome')
        return Response(query_professor)
    
    # def create(self, request, *args, **kwargs):
    #     user = User.objects.create(username=request.data["username"],
    #                             password=request.data["password"])
    #     pessoa = Pessoa.objects.create(nome=request.data["nome"],
    #                                 instituicao_id=request.data["instituicao"],
    #                                 cpf=request.data["cpf"], 
    #                                 user_id=user.id)
    #     Professor.objects.create(pessoa_id=pessoa.id,
    #                     departamento=request.data["departamento"])

    #     return Response("sucesso")
    
    
class ExtratoViewSet(ModelViewSet):
    serializer_class = ExtratoSerializer
    querySet = Extrato.objects.all()
    pagination_class = None

    def list(self, request, *args, **kwargs):
        user_remetente = self.request.user.id
        lista_extrato = Extrato.objects.filter(Q(remetente = user_remetente) | Q(destinatario = user_remetente))

        query = lista_extrato.select_related('destinatario_id','remetente_id').values('destinatario__pessoa__nome','remetente__pessoa__nome','valor_enviado')
        return Response(query)
    
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
                                        remetente_id=user_remetente)
    

        return Response("sucesso")
    