# Generated by Django 4.1.7 on 2023-06-23 16:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='room',
            old_name='create_at',
            new_name='created_at',
        ),
    ]
