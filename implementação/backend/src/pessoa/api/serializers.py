from rest_framework.serializers import ModelSerializer
from pessoa.models import *

        
class PessoaSerializer(ModelSerializer):

    class Meta:
        model = Pessoa
        fields = '__all__'
        
class AlunoSerializer(ModelSerializer):

    class Meta:
        model = Aluno
        fields = '__all__'

class ProfessorSerializer(ModelSerializer):

    class Meta:
        model = Professor
        fields = '__all__'

