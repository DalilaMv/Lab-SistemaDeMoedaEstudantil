from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from empresa.models import *
from empresa.api.serializers import *
from rest_framework.decorators import action

class EmpresaViewSet(ModelViewSet):
    serializer_class = EmpresaSerializer
    queryset = Empresa.objects.all()
    pagination_class = None
    
    @action(methods=['post'], detail=False)
    def save(self, request, *args, **kwargs):
        
    
        user = User.objects.create(username=request.data["username"],
                                password=request.data["password"]).save()
        
        empresa = Empresa.objects.create(nome=request.data["nome"],
                                    cnpj=request.data["cnpj"], 
                                    user_id=user.id).save()
    
        return Response(empresa)
