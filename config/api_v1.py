from ninja import NinjaAPI

from allure.main.api.views import router as order_router

api = NinjaAPI(version="1.0.0", urls_namespace="internal_api", auth=None)

api.add_router("/orders/", order_router)
