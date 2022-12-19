from rest_framework import serializers
from .models import Venue, Event


class EventSerializer(serializers.HyperlinkedModelSerializer):
    venue = serializers.HyperlinkedRelatedField(
        view_name='venue-detail',
        read_only=True
    )

    class Meta:
        model = Event
        fields = ('venue', 'eventname', 'datetime', 'price', 'details',)


class VenueSerializer(serializers.HyperlinkedModelSerializer):
    event = EventSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Venue
        fields = ('venuename', 'address', 'city',
                  'state', 'vaccinationrequired', 'event')
