import requests

from django.shortcuts import render


def index(request):
    return render(request, 'home/index.html')


def about(request):
    return render(request, 'home/about.html')


def contact(request):
    return render(request, 'home/contact.html')


def logistics(request):
    return render(request, 'home/logistics-page.html')


def imports(request):
    return render(request, 'home/imports-page.html')


def exports(request):
    return render(request, 'home/exports-page.html')


def solutions(request):
    return render(request, 'home/solutions-page.html')
