from rest_framework import serializers
from .models import Venue, Event


class VenueSerializer(serializers.HyperlinkedModelSerializer):
    event = serializers.HyperlinkedRelatedField(
        view_name='event_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Venue
        fields = ('venuename', 'address', 'city',
                  'state', 'vaccinationrequired', 'event')


class EventSerializer(serializers.HyperlinkedModelSerializer):
    venue = serializers.HyperlinkedRelatedField(
        view_name='venue_detail',
        read_only=True
    )

    class Meta:
        model = Event
        fields = ('venue', 'eventname', 'datetime', 'price', 'details',)
