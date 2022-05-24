from rest_framework.routers import DefaultRouter
from pessoa.api.viewsets import *
from django.urls import path


router = DefaultRouter()
router.register('alunos', AlunoViewSet, basename='alunos')
router.register('professores', ProfessorViewSet, basename='professores')
router.register('extrato', ExtratoViewSet, basename='extrato')
router.register('pessoas', PessoaViewSet, basename='pessoas')

urlpatterns = []
urlpatterns += router.urls