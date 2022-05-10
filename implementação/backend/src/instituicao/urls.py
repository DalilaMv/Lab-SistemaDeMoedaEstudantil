from rest_framework.routers import DefaultRouter
from instituicao.api.viewsets import *
from django.urls import path


router = DefaultRouter()
router.register('instituicao', InstituicaoViewSet)
urlpatterns = []
urlpatterns += router.urls