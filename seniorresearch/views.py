from django.http import HttpResponse
from django.shortcuts import render
from django.conf import settings
from .models import Log
import os
from django_markup.markup import formatter
import markdown2

def load_logs():
	a = open(os.path.join(settings.PROJECT_ROOT, 'logs.md')).read().split("~~~")
	for x in range(len(a)):
		a[x] = a[x].strip()
	b = []
	for each in a:
		aa = each.split("\n")
		b.append((aa[0], aa[1:-1], aa[-1]))
	return b

def index(request):
	i = 0
	Log.objects.all().delete()
	h = load_logs()[::-1]
	for each in h:
		Log.objects.create(modal="modal" + str(i), title=each[0], text=markdown2.markdown('\n'.join(each[1]).replace("***", "\n").replace(" - ", " - &emsp;&bull;&nbsp;")), created_date=each[2])
		i += 1
	return render(request, 'seniorresearch/index.html', {"logs": Log.objects.all()})
