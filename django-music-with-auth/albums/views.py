from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import Album, Genre
from .forms import AlbumForm

def home(request):
    if request.user.is_authenticated:
        return redirect('list_albums')

    return render(request, 'albums/home.html')

@login_required
def list_albums(request):
    albums = Album.objects.all().order_by('title')
    return render(request, 'albums/list_albums.html', {"albums": albums})

@login_required
def add_album(request):
    if request.method == "POST":
        form = AlbumForm(data=request.POST)
        if form.is_valid():
            album = form.save(commit=False)
            album.save()
            return redirect('show_album', pk=album.pk)
    else:
        form = AlbumForm()

    return render(request, "albums/add_album.html", {"form": form})

@login_required
def show_album(request, pk):
    album = get_object_or_404(Album, pk=pk)
    return render(request, 'albums/show_album.html', {'album': album})

@login_required
def edit_album(request, pk):
    album = get_object_or_404(Album, pk=pk)
    if request.method == "GET":
        form = AlbumForm(instance=album)
    else:
        form =AlbumForm(data=request.POST, instance=album)
        if form.is_valid():
            form.save()
            return redirect('show_album', pk=pk)

    return render(request, "albums/edit_album.html", {"form": form, "album": album})

@login_required
def delete_album(request, pk):
    album = get_object_or_404(Album, pk=pk)

    if request.method == "POST":
        album.delete()
        messages.success(request, 'Album deleted.')
        return redirect('list_albums')

    return render(request, 'albums/delete_album.html', { "album": album })

def show_genre(request, slug):
    genre = get_object_or_404(Genre, slug=slug)
    albums = genre.albums.all()

    return render(request, 'albums/show_genre.html', { "genre": genre, "albums": albums })
