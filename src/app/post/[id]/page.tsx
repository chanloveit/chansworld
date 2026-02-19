import { getAllPosts, getPostById } from '@/utils/posts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import CategoryTag from '@/components/CategoryTag';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default async function PostPage({ params }: Promise<{ id: string }>){
	const { id } = await params;
	const post = getPostById(Number(id));

	if(!post){
		notFound();
	}
	
	return(
		<article className = 'prose'>
			<MarkdownRenderer content = {post.content} />
		</article>
	)
}