from django.db import models


class TravelSetup(models.Model):
    name = models.CharField(max_length=25)
    arrive_date = models.DateField()
    departure_date = models.DateField()

    def __str__(self):
        return self.name
