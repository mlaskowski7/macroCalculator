from django.contrib import admin
from . import models
# Register your models here.
# superuser : username-admin, password-admin123
admin.site.register(models.Food)
admin.site.register(models.Consumption)