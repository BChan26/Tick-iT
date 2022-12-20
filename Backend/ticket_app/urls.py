from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import ( TokenObtainPairView, TokenRefreshView, TokenVerifyView)

urlpatterns = [
    path('venues/', views.VenueList.as_view(), name='venue_list'),
    path('venues/<int:pk>', views.VenueDetail.as_view(), name='venue-detail'),
    path('events/', views.EventList.as_view(), name="event_list"),
    path('events/<int:pk>', views.EventDetail.as_view(), name="event-detail"),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), # unused - need client refesh token code
    # path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'), # unused
    # path('events/delete/:id', views.DeleteEvent.as_view(), name="delete-event")
]
