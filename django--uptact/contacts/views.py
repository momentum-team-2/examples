from django.shortcuts import render, redirect, get_object_or_404
from .models import Contact
from .forms import ContactForm, NoteForm


# Create your views here.
def list_contacts(request):
    contacts = Contact.objects.all()
    return render(request, "contacts/list_contacts.html",
                  {"contacts": contacts})


def show_contact(request, pk):
    contact = get_object_or_404(Contact, pk=pk)
    form = NoteForm()
    return render(request, "contacts/show_contact.html", {"contact": contact, "pk": pk, "form": form})


def add_contact(request):
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(data=request.POST)
        if form.is_valid():
            form.save()
            return redirect(to='list_contacts')

    return render(request, "contacts/add_contact.html", {"form": form})


def add_note(request, contact_pk):
    # get the associated contact
    contact = get_object_or_404(Contact, pk=contact_pk)
    # We need a form!

    form = NoteForm(data=request.POST)
    if form.is_valid():
        note = form.save(commit=False)
        note.contact = contact
        note.save()
        return redirect(to="show_contact", pk=contact.pk)

    return render(request, "contacts/show_contact.html", {
        "note_form": form,
        "contact": contact
    })


def edit_contact(request, pk):
    contact = get_object_or_404(Contact, pk=pk)
    if request.method == 'GET':
        form = ContactForm(instance=contact)
    else:
        form = ContactForm(data=request.POST, instance=contact)
        if form.is_valid():
            form.save()
            return redirect(to='list_contacts')

    return render(request, "contacts/edit_contact.html", {
        "form": form,
        "contact": contact
    })


def delete_contact(request, pk):
    contact = get_object_or_404(Contact, pk=pk)
    if request.method == 'POST':
        contact.delete()
        return redirect(to='list_contacts')

    return render(request, "contacts/delete_contact.html",
                  {"contact": contact})
