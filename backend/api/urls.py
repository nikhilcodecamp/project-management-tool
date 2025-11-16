from rest_framework import routers
from .views import ProjectViewSet, TaskViewSet
from django.urls import path, include

router = routers.DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
