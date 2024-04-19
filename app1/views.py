from django.shortcuts import render

# Create your views here.
def index_view(request):
    return render(request, 'app1/index.html')

def about_view(request):
    return render(request, 'app1/about.html')

def careers_view(request):
    return render(request, 'app1/careers.html')

def contact_view(request):
    return render(request, 'app1/contact.html')

def sap_view(request):
    return render(request, 'app1/sap_service.html')

def ai_automation_view(request):
    return render(request, 'app1/ai.html')