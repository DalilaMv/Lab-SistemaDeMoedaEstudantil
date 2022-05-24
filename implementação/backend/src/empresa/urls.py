from rest_framework.routers import DefaultRouter
from empresa.api.viewsets import *
from django.urls import path


router = DefaultRouter()
router.register('empresas', EmpresaViewSet, basename='empresas')
router.register('vantagens', VantagemViewSet, basename='vantagens')
urlpatterns = []
urlpatterns += router.urls