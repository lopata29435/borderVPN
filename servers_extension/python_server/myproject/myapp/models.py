from django.db import models

class TextModel(models.Model):
    text_data = models.CharField(max_length=255)