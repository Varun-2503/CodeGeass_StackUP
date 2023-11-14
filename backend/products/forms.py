from django import forms
from .models import Products

class Products(forms.ModelForm):
    title = forms.CharField(
        
        label='',
        widget=forms.Textarea(attrs={
        'class' : 'productname',
        'rows' : '1',
        'placeholder': 'Add Title'
        })
    )
    ingredients = forms.CharField(
        
        label='',
        widget=forms.Textarea(attrs={
        'class' : 'productlist',
        'rows' : '9',
        'placeholder': 'addproducts'
        })
    )
    # preptime = forms.DecimalField(
        
    #     label='Add prep time in min',
    #     decimal_places= 0,

        
    # )
    body = forms.CharField(
        
        label='',
      widget=forms.Textarea(attrs={
        'class' : 'productcontent',
        'rows' : '15',
        'placeholder': 'Write about the process'
        })
    ) 

    class Meta:
        model = Products
        fields = ['body', 'title','ingredients']

