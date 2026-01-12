from django.shortcuts import render
from rest_framework import viewsets
from .models import Category, Post
from .serializers import PostSerializer, CategorySerializer
# Create your views here.

class PostViewSet(viewsets.ReadOnlyModelViewSet):
	serializer_class = PostSerializer
	
	def get_queryset(self):
		queryset = Post.objects.all().order_by('-created_at')
		category_slug = self.request.query_params.get('category', None)

		if category_slug is not None:
			queryset = queryset.filter(category__slug = category_slug)
		return queryset

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer