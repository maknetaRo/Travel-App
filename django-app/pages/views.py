from django.shortcuts import render
from django.views import generic
import requests
from .models import TravelSetup
from .forms import TravelSetupForm

api = {
    "key": "e9d07734c340d3cdf5b8a1f520b8c2c7",
    "baseurl": "https://api.openweathermap.org/data/2.5/",
}

# url = f"{api.baseurl}forecast?q={}&units=metric&APPID={api.key}"
# city = "Las Vegas"


class IndexView(generic.TemplateView):
    form = TravelSetupForm
    template_name = "pages/index.html"
    success_url = "city"


def city(request):
    url = "https://api.openweathermap.org/data/2.5/weather?q={}&units=metric&appid=e9d07734c340d3cdf5b8a1f520b8c2c7"
    city = "Warsaw"
    r = requests.get(url.format(city)).json()
    print(r)
    city_weather = {
        "city": city,
        "temperature": r["main"]["temp"],
        "description": r["weather"][0]["description"],
        "icon": r["weather"][0]["icon"],
    }
    print(city_weather)
    context = {"city_weather": city_weather}
    return render(request, "pages/city.html", context)


# continue with DiOcean weather


# class CityView(generic.TemplateView):
#     template_name = "pages/city.html"
