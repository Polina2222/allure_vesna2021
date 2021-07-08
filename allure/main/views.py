from django.contrib.admin.views.decorators import staff_member_required
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import FormView, TemplateView

from .forms import CallbackForm
from .models import Order


class HomePageView(FormView):
    template_name = "pages/home.html"
    form_class = CallbackForm
    success_url = reverse_lazy("home")

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)


class StaffPageView(FormView):
    template_name = "pages/staff.html"
    form_class = CallbackForm
    success_url = reverse_lazy("staff")

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)


class PricesPageView(FormView):
    template_name = "pages/prices.html"
    form_class = CallbackForm
    success_url = reverse_lazy("prices")

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)


class DiscountsPageView(FormView):
    template_name = "pages/discounts.html"
    form_class = CallbackForm
    success_url = reverse_lazy("discounts")

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

class DiscountsDisabledPageView(TemplateView):
    template_name = "pages/discounts_disabled.html"


@staff_member_required
def requests_page_view(request):
    template_name = "pages/requests.html"

    orders = Order.objects.all()
    return render(request, template_name, {"orders": orders})
