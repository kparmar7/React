from django.contrib import admin
from API.models import Student

@admin.register(Student)
class Student(admin.ModelAdmin):
    list_display = ['id', 'name', 'email']
