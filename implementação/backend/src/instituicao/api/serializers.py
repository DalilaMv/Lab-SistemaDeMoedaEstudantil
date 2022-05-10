from rest_framework.serializers import ModelSerializer
from instituicao.models import *

        
class InstituicaoSerializer(ModelSerializer):

    class Meta:
        model = Instituicao
        fields = '__all__'


