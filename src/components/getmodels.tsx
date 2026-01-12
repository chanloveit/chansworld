import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, Category } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'posts/post');

export async function getPosts(): Promise<Post[]>{
	const fileNames = fs.readdirSync(postsDirectory);

	const allPostsData = fileNames
		.filter((fileName) => fileName.endsWith(".md"))
		.map((fileName) => {
			const fullPath = path.join(postsDirectory, fileName);
			const fileContents = fs.readFileSync(fullPath, 'utf-8');

			const { data } = matter(fileContents);

			return {
                id: Number(data.id), 
                title: data.title,
                content: "",
                auto_head_image: data.auto_head_image, 
                created_at: data.created_at,
                category: {
                    id: 0, 
                    name: String(data.category || "미분류"),
                    slug: String(data.category || "default"),
                    post_count: 0 
                }
            } as Post;
        });
	return allPostsData.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
}

export async function getCategories(): Promise<Category[]> {
    const posts = await getPosts();
    const categoryNames = Array.from(new Set(posts.map(p => p.category.name)));

    return categoryNames.map((name, index) => {
        const count = posts.filter(p => p.category.name === name).length;
        return {
            id: index + 1,
            name: name,
            slug: name,
            post_count: count
        };
    });
}

export async function getPostsByCategory(slug: string): Promise<Post[]> {
    const decodedSlug = decodeURIComponent(slug);
    const allPosts = await getPosts();
    return allPosts.filter(p => p.category?.name === decodedSlug);
}

export async function getPostDetail(id: string): Promise<Post> {
    const fileNames = fs.readdirSync(postsDirectory);
    
    const fileName = fileNames.find(name => {
        const fullPath = path.join(postsDirectory, name);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        return String(data.id) === id;
    });

    if (!fileName) throw new Error('게시글을 찾을 수 없습니다.');

    const { data, content } = matter(fs.readFileSync(path.join(postsDirectory, fileName), 'utf8'));

    return {
        id: Number(data.id),
        title: data.title,
        content: content,
        auto_head_image: data.auto_head_image,
        created_at: data.created_at,
        category: {
            id: 0,
            name: data.category,
            slug: data.category,
            post_count: 0
        }
    } as Post;
}