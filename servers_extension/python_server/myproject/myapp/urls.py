from django.urls import path
from .views import process_post_request

urlpatterns = [
    path('api/endpoint/', process_post_request, name='process_post_request'),
]