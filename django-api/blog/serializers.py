from rest_framework import serializers
from .models import Post, Category
import re

class CategorySerializer(serializers.ModelSerializer):
	post_count = serializers.SerializerMethodField()
	class Meta:
		model = Category
		fields = ['id', 'name', 'slug', 'post_count']

	def get_post_count(self, obj):
		return obj.post_set.count()


class PostSerializer(serializers.ModelSerializer):
	category = CategorySerializer(read_only = True)
	auto_head_image = serializers.SerializerMethodField()
	
	class Meta:
		model = Post
		fields = ['id', 'title', 'content', 'created_at', 'category', 'auto_head_image']

	def get_auto_head_image(self, obj):
		image_match = re.search(r'!\[.*?\]\((.*?)\)', obj.content)

		if(image_match):
			return image_match.group(1)