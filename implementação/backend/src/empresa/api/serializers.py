from rest_framework.serializers import ModelSerializer
from empresa.models import *

        
class EmpresaSerializer(ModelSerializer):

    class Meta:
        model = Empresa
        fields = '__all__'
        

class VantagemSerializer(ModelSerializer):

    class Meta:
        model = Vantagem
        fields = '__all__'



