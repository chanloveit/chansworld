export interface Category {
	id: number;
	name: string;
	slug: string;
	post_count: number;
}

export interface Post {
	id: number;
	title: string;
	content: string;
	created_at: string;
	category: Category | null;
	featured?: boolean;
}