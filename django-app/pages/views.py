from django.shortcuts import render
from django.views import generic

# api = {
#     "key": "e9d07734c340d3cdf5b8a1f520b8c2c7",
#     "baseurl": "https://api.openweathermap.org/data/2.5/",
# }

# url = f"{api.baseurl}forecast?q={}&units=metric&APPID={api.key}"
# city = "Las Vegas"


class IndexView(generic.TemplateView):
    # form_class = CitySearchForm
    template_name = "pages/index.html"
    success_url = "pages/city.html"


# continue with DiOcean weather


class CityView(generic.TemplateView):
    template_name = "pages/city.html"
