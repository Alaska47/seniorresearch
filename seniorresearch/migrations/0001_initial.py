# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-10 23:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Log',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('modal', models.TextField()),
                ('title', models.TextField()),
                ('text', models.TextField()),
                ('created_date', models.TextField()),
            ],
        ),
    ]
