import { MetadataRoute } from 'next';
import { getPosts } from '@/components/getmodels';

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
	const baseUrl = 'https://chansworld.vercel.app';
	const posts = await getPosts();

	const postUrls = posts.map((post) => ({
		url: `${baseUrl}/post/${post.id}`,
		lastModified: new Date(post.created_at),
		priority: 0.8,
	}));

	const routes = ['', '/posts'].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: 'daily' as const,
		priority: 1.0,
	}));

	return [...routes, ...postUrls];
}