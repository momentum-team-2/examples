from django.db import models


class Album(models.Model):
    YEARS = [(i, i) for i in range(1900, 2100)]

    title = models.CharField(max_length=255)
    artist_name = models.CharField(max_length=255)
    year = models.IntegerField(choices=YEARS)

    def __str__(self):
        return self.title
