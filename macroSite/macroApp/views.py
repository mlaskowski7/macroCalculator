from django.shortcuts import render, redirect
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

def delete_consume(request,id):
    consumed_food = Consumption.objects.get(id=id)
    if request.method == "POST":
        consumed_food.delete()
        return redirect('/')
    return render(request,'delete.html')