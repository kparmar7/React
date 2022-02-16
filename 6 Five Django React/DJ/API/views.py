from django.shortcuts import render
from API.serializers import StudentSerializer
from rest_framework.generics import ListAPIView
from API.models import Student

class StudentView(ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
