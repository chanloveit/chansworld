from django.db import models
from markdownx.models import MarkdownxField
# Create your models here.
class Category(models.Model):
	name = models.CharField(max_length = 50, unique = True)
	slug = models.SlugField(max_length = 50, unique = True, allow_unicode = True)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name_plural = 'Categories'


class Post(models.Model):
	title = models.CharField(max_length = 200)
	content = MarkdownxField()
	created_at = models.DateTimeField(auto_now_add = True)
	category = models.ForeignKey(Category, on_delete = models.SET_NULL, null = True, blank =True)
	def __str__(self):
		return self.title

