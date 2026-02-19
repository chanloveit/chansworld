import { getAllPosts, getFeaturedPosts, getAllCategories } from '@/utils/posts';
import type { Post } from '@/utils/types';
import Link from 'next/link'
import CategoryTag from '@/components/CategoryTag';
import PostList from '@/components/PostList';

export default async function Home() {
	const posts = getAllPosts();
	const featured = getFeaturedPosts().slice(0, 5);
	const latest = posts

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

			<PostList posts = {latest} categories = {getAllCategories()}/>
		</div>
	);
}

function FeaturedRow({ post }: {post: Post}){
	const CATEGORIES = getAllCategories();
	
	return(
		<Link href = {`/post/${post.id}`}>
			<div className = 'py-5 border-b border-border-1 transition-all duration-200 hover:pl-4 cursor-pointer'>
				<div className = 'flex items-center gap-3 mb-2'>
					<CategoryTag category = {post.category} categories = {CATEGORIES}/>
					<span className = 'text-[12px] text-text-3'>{post.created_at}</span> 
				</div>
				<p className = 'text-[20px] text-text-1 tracking-wide'>{post.title}</p>
			</div>
		</Link>
	)
}
