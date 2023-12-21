from django.shortcuts import render
from .models import Food, Consumption

# Create your views here.

def index(request):

    if request.method == 'POST':
        food_consumed = request.POST['food_consumed']
        consume = Food.objects.get(name=food_consumed)
        user = request.user
        consumption = Consumption(user=user,food_consumed=consume)
        consumption.save()
    consumed_food = Consumption.objects.filter(user=request.user)
    foodData = Food.objects.all()
    context = {'foodData':foodData,'consumed_food':consumed_food}
    return render(request,'index.html',context)