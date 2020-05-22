from django.forms import ModelForm, TextInput
from .models import TravelSetup


class TravelSetupForm(ModelForm):
    class Meta:
        model = TravelSetup
        fields = ["name", "arrive_date", "departure_date"]
