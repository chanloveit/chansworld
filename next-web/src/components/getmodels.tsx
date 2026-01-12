import { Post, Category } from '@/types/blog';

export async function getPosts(): Promise<Post[]>{
	const res = await fetch('https://chansworld-server.ap-northeast-2.arkain.site/api/posts/',
							{cache: 'no-store'});

	if(!res.ok){
		throw new Error('데이터 로딩 실패');
	}
	
	return res.json()
}

export async function getCategories(): Promise<Category[]>{
	const res = await fetch('https://chansworld-server.ap-northeast-2.arkain.site/api/categories/',
							{cache: 'no-store'});

	if(!res.ok){
		throw new Error('데이터 로딩 실패');
	}
	
	return res.json()
}

export async function getPostsByCategory(slug: string){
	const baseUrl = 'https://chansworld-server.ap-northeast-2.arkain.site/api/posts/';
	const url = `${baseUrl}?category=${slug}`;

	const res = await fetch(url, { cache: 'no-store' });
	if(!res.ok){
		throw new Error('데이터 로딩 실패');
	}
	
	return res.json();
}

export async function getPostDetail(id: string){
	const res = await fetch(`https://chansworld-server.ap-northeast-2.arkain.site/api/posts/${id}/`, { cache: 'no-store' });
	return res.json();
}