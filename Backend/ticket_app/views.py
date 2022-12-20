from rest_framework import generics
from .serializers import VenueSerializer, EventSerializer
from .models import Venue, Event

# Create your views here.


class VenueList(generics.ListCreateAPIView):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer


class VenueDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer


class EventList(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

# class DeleteEvent(generics.RetrieveUpdateDestroyAPIView):
#     def delete(self, request, id, format=None):
#         event = self.get_object(id)
#         event.delete()