from django.db import models


class Genre(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=75)

    def __str__(self):
        return self.name



class Album(models.Model):
    YEARS = [(i, i) for i in range(1900, 2100)]

    title = models.CharField(max_length=255)
    artist_name = models.CharField(max_length=255)
    year = models.IntegerField(choices=YEARS)
    genres = models.ManyToManyField(Genre, related_name="albums")

    def __str__(self):
        return self.title
