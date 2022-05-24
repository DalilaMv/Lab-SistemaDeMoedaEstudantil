from rest_framework.routers import DefaultRouter
from pessoa.api.viewsets import *
from django.urls import path


router = DefaultRouter()
router.register('alunos', AlunoViewSet)
router.register('professores', ProfessorViewSet)
router.register('extrato', ExtratoViewSet)
router.register('pessoas', PessoaViewSet)

urlpatterns = []
urlpatterns += router.urls