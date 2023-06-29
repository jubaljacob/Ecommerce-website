from django.shortcuts import render
from django.contrib import admin

def home(request):
    # Logic for handling the home page
    return render(request, 'Home.js')
