from django.db import models
from django.utils import timezone


class Log(models.Model):
    modal = models.TextField()
    title = models.TextField()
    text = models.TextField()
    created_date = models.TextField()
    
    def __str__(self):
        return self.title + ": " + self.text + "\t\t\tcreated on " + self.created_date + ":" + modal
