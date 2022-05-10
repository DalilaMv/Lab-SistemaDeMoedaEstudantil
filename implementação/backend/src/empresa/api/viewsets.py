from rest_framework.viewsets import ModelViewSet
from empresa.models import *
from empresa.api.serializers import *


class EmpresaViewSet(ModelViewSet):
    serializer_class = EmpresaSerializer
    queryset = Empresa.objects.all()
    pagination_class = None
    