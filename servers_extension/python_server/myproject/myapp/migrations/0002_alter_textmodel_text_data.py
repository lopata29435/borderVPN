# Generated by Django 5.0 on 2023-12-08 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='textmodel',
            name='text_data',
            field=models.CharField(max_length=255),
        ),
    ]