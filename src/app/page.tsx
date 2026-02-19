import { getAllPosts, getFeaturedPosts } from '@/utils/posts';
import type { Post } from '@/utils/types';
import Link from 'next/link'
import CategoryTag from '@/components/CategoryTag';

export default async function Home() {
	const featured = getFeaturedPosts().slice(0, 5);
	const latest = getAllPosts().slice(0, 10);

	return(
		<div className = 'max-w-4xl mx-auto px-10 pt-18 pb-24'>
			{featured.length > 0 && (
				<section className = 'mb-18'>
					<p className = 'text-text-3 text-[12px] tracking-widest  mb-5'>// featured</p>
					{featured.map((post) => (
						<FeaturedRow key = {post.id} post = {post}>{post.title}</FeaturedRow>
					))}
				</section>
			)}

			<section>
				<div className = 'flex items-baseline justify-between mb-6'>
					<p className = 'text-text-3 text-[12px] tracking-widest  mb-5'>// latest - {latest.length} entries</p>
					<Link href = '/posts' className = 'text-[12px] text-text-3 tracking-widest hover:text-accent transition-colors duration-200'>all posts →</Link>
				</div>

				{latest.map((post, index) => (
					<PostRow key = {post.id} post = {post} index = {index} />
				))}
			</section>
		</div>
	);
}

function FeaturedRow({ post }: {post: Post}){
	return(
		<Link href = {`/post/${post.id}`}>
			<div className = 'py-5 border-b border-border-1 transition-all duration-200 hover:pl-4 cursor-pointer'>
				<div className = 'flex items-center gap-3 mb-2'>
					<CategoryTag category = {post.category} />
					<span className = 'text-[12px] text-text-3'>{post.created_at}</span> 
				</div>
				<p className = 'text-[20px] text-text-1 tracking-wide'>{post.title}</p>
			</div>
		</Link>
	)
}

function PostRow({ post, index }: {post: Post; index: number }){
	return(
		<Link href = {`/post/${post.id}`}>
			<div style = {{ gridTemplateColumns: '36px 1fr auto' }} className = 'grid items-center py-4 px-2 border-b border-border-1 cursor-pointer rounded-sm transition-colors duration-200 hover:bg-bg-3 group'>
				<span className = 'text-[12px] text-text-3 text-right tabular-bums group-hover:hidden'>
					{String(index + 1).padStart(2, '0')}
				</span>
				
			</div>
		</Link>
	)
}