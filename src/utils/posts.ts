import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Post } from './types'

const POSTS_DIR = path.join(process.cwd(), 'posts/post');

export function getAllPosts(): Post[]{
	if(!fs.existsSync(POSTS_DIR)){
		return [];
	}

	const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md'));
	const posts = files.map((file) => {
		const filepath = path.join(POSTS_DIR, file);
		const raw = fs.readFileSync(filepath, 'utf-8');
		const { data, content } = matter(raw);

		return{
			id: data.id,
			title: data.title,
			created_at: data.created_at,
			category: data.category,
			featured: data.featured ?? false,
			content
		} as Post;
	});

	return posts.sort((a, b) => b.id - a.id);
}


export function getPostById(id: number): Post | null{
	const posts = getAllPosts();
	return posts.find((p) => p.id === id) ?? null;
}

export function getFeaturedPosts(): Post[]{
	return getAllPosts().filter((p) => p.featured);
}