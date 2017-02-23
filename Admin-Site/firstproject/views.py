from django.http import HttpResponse
import datetime
def hello(request):
	return HttpResponse("Hello World")
def current_time(request):
	now=datetime.datetime.now()
	html="It is now %s ." % now
	return HttpResponse(html)
