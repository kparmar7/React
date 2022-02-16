
from django.urls import path
from API.views import StudentView

urlpatterns = [
    path('student/', StudentView.as_view()),
]
