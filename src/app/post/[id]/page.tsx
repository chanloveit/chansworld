import { getAllPosts, getPostById, getAllCategories } from '@/utils/posts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryTag from '@/components/CategoryTag';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export async function generateMetadata({ params }: { params : Promise<{ id: string }>}): Promise<Metadata>{
	const { id } = await params;
	const post = getPostById(Number(id));
	if(!post){
		return{
			title: 'Not Found'
		};
	}

	return{
			title: post.title
	};
}

export default async function PostPage({ params }: { params : Promise<{ id: string }>}){
	const { id } = await params;
	const post = getPostById(Number(id));
	const categories = getAllCategories();
	const CATEGORIES = ['ALL', ...categories];
	
	if(!post){
		notFound();
	}
	
	return(
		<div className = 'max-w-4xl mx-auto px-10 pt-16 pb-24'>
			<header className = 'mb-14'>
				<div className = 'flex items-center gap-3 mb-5'>
					<CategoryTag category = {post.category} categories = {CATEGORIES} />
					<span className = 'text-[12px] text-text-3'>{post.created_at}</span>
				</div>

				<h1 className = 'text-[26px] font-bold text-text-1 leading-snug tracking-wide mb-6'>{post.title}</h1>
				<div className = 'h-[1px] bg-text-3' />
			</header>

			<article className = 'prose'>
				<MarkdownRenderer content = {post.content} />
			</article>
		</div>
		
		
	)
}