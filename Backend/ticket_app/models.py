from django.db import models

# Create your models here.


class Venue(models.Model):
    venuename = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    vaccinationrequired = models.BooleanField(blank=False)

    def __str__(self):
        return self.venuename


class Event(models.Model):
    venue = models.ForeignKey(
        Venue, on_delete=models.CASCADE, related_name="events")

    eventname = models.CharField(max_length=100)
    datetime = models.DateTimeField(null=True)
    price = models.FloatField()
    details = models.TextField()

    def __str__(self):
        return self.eventname
