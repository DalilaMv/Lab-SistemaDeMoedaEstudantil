from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from empresa.models import *
from empresa.api.serializers import *
from rest_framework.decorators import action

class VantagemViewSet(ModelViewSet):
    serializer_class = VantagemSerializer
    queryset = Vantagem.objects.all()
    pagination_class = None
    
    def list(self, request, *args, **kwargs):
        user = self.request.user.id
        empresa_logada = Empresa.objects.get(user=user)
        vantagem = Vantagem.objects.filter(empresa_id=empresa_logada.id)
        serializer = VantagemSerializer(vantagem, many=True)
        return Response(serializer.data)
    
    def create(self, request, *args, **kwargs):
        user = self.request.user.id
        empresa_logada = Empresa.objects.get(user_id=user)
        vantagem = Vantagem.objects.create(descricao=request.data["descricao"], 
                                    img=request.data["img"],
                                    titulo=request.data["titulo"],
                                    empresa_id=empresa_logada.id)
        return Response("sucesso")

class EmpresaViewSet(ModelViewSet):
    serializer_class = EmpresaSerializer
    queryset = Empresa.objects.all()
    pagination_class = None
    
    # def create(self, request, *args, **kwargs):
    
    #     user = User.objects.create(username=request.data["username"],
    #                             password=request.data["password"])
        
    #     empresa = Empresa.objects.create(nome=request.data["nome"],
    #                                 cnpj=request.data["cnpj"], 
    #                                 user_id=user.id)
    
        # return Response(empresa)
