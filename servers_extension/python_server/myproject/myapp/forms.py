from django import forms

class TextForm(forms.Form):
    text_data = forms.CharField(widget=forms.Textarea)