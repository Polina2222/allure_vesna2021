from typing import List

from django.shortcuts import get_object_or_404
from ninja import Router

from allure.main.api.schemas import GetOrderSchema, CreateOrderSchema, UpdateOrderSchema
from allure.main.models import Order

router = Router()


@router.post("/", response={200: GetOrderSchema, })
def create_order(request, payload: CreateOrderSchema):
    order = Order.objects.create(**payload.dict())
    return order


@router.get("/{order_id}", response={200: GetOrderSchema, })
def get_order(request, order_id: int):
    order = get_object_or_404(Order, id=order_id)
    return order


@router.get("/", response={200: List[GetOrderSchema], })
def list_order(request):
    orders = Order.objects.all()
    return orders


@router.put("/{order_id}", response={200: GetOrderSchema, })
def update_order(request, order_id: int, payload: UpdateOrderSchema):
    order = get_object_or_404(Order, id=order_id)

    for attr, value in payload.dict().items():
        setattr(order, attr, value)

    order.save()
    return order


@router.delete("/{order_id}")
def delete_order(request, order_id: int):
    order = get_object_or_404(Order, id=order_id)
    order.delete()
    return {"success": True}
