from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path
from .import views
urlpatterns = [

    path ('loginss',views.loginss,name='log')



]


