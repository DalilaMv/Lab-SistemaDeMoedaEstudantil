from rest_framework.routers import DefaultRouter
from pessoa.api.viewsets import *
from django.urls import path


router = DefaultRouter()
router.register('alunos', AlunoViewSet)

urlpatterns = []
urlpatterns += router.urls