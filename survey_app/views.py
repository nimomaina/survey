from django.shortcuts import render
from django.http import JsonResponse
import json

# Create your views here.
def home(request):
    json_data = open('survey_app/data.json')
    data = json.load(json_data)
  
    return render(request,'home.html',locals())

        
