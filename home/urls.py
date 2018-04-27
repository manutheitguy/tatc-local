from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'about/$', views.about, name='about'),
    url(r'contact/$', views.contact, name='contact'),
    url(r'imports/$', views.imports, name='imports'),
    url(r'exports/$', views.exports, name='exports'),
    url(r'logistics/$', views.logistics, name='logistics'),
    url(r'solutions/$', views.solutions, name='solutions'),
]
