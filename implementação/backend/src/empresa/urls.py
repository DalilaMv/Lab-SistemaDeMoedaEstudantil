from rest_framework.routers import DefaultRouter
from empresa.api.viewsets import *
from django.urls import path


router = DefaultRouter()
router.register('empresas', EmpresaViewSet)
urlpatterns = []
urlpatterns += router.urls