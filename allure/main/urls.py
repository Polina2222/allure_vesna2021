from django.urls import path

from .views import HomePageView, StaffPageView, DiscountsPageView, PricesPageView, requests_page_view, DiscountsDisabledPageView

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("staff", StaffPageView.as_view(), name="staff"),
    path("discounts", DiscountsPageView.as_view(), name="discounts"),
    path("prices", PricesPageView.as_view(), name="prices"),
    path("requests", requests_page_view, name="requests"),
    path("discounts_disabled", DiscountsDisabledPageView.as_view(), name="discounts_disabled")
]
