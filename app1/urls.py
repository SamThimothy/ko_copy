from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.index_view, name='home'),
    path('about/', views.about_view, name='about'),
    path('careers/', views.careers_view, name='careers'),
    path('contact/', views.contact_view, name='contact'),
    path('sap-service/', views.sap_view, name='sap-service'),
]