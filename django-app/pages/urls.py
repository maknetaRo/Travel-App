from django.urls import path
from . import views


urlpatterns = [
    path("", views.IndexView.as_view(), name="home"),
    path("city", views.CityView.as_view(), name="city"),
]
