from django.db import models

class TextModel(models.Model):
    text_data = models.TextField()

    class Meta:
        app_label = 'myapp'