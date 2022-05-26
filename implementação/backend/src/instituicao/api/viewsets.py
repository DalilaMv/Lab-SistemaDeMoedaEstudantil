from rest_framework.viewsets import ModelViewSet
from instituicao.models import *
from instituicao.api.serializers import *


class InstituicaoViewSet(ModelViewSet):
    serializer_class = InstituicaoSerializer
    queryset = Instituicao.objects.all()
    pagination_class = None
    
class DepartamentoViewSet(ModelViewSet):
    serializer_class = DepartamentoSerializer
    queryset = Departamento.objects.all()
    pagination_class = None