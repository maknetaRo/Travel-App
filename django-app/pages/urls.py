from django.urls import path
from . import views


urlpatterns = [
    path("", views.MainView.as_view(), name="main"),
    # path("", views.index, name="home"),
    # path("city", views.CityView.as_view(), name="city"),
    path("city", views.city, name="city"),
]
