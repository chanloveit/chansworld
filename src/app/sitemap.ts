import { MetadataRoute } from 'next';
import { getAllPosts } from '@/utils/posts';

export default function sitemap(): MetadataRoute.Sitemap{
	const posts = getAllPosts();
	const baseUrl = 'https://chansworld.vercel.app';
	
	const postUrls = posts.map((post) = ({
		url: `${baseUrl}/post${post.id}`,
		lastModified: new Date(post.created_at)
	}));

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		...postUrls,
	];
}