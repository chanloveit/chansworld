import { getAllPosts, getFeaturedPosts } from '@/utils/posts';
import type { Post } from '@/utils/types';
import Link from 'next/link'

export default async function Home() {
	const featured = getFeaturedPosts();
	const latest = getAllPosts().slice(0, 10);

	return(
		<div className = 'pt-72 pb-100'>
			{featured.length > 0 && (
				<section className = 'mb-72'>
					<p className = 'text-text-3'>// featured</p>
					{featured.map((post) => (
						<p key = {post.created_at}>{post.title}</p>
					))}
				</section>
			)}
		</div>
	);
}

function FeaturedRow({ post }: { post: Post }){
	return(
		<Link href = {`/post/${post.id}`}>
			<div className = 'border border-b border-border-1'></div>
		</Link>	
	);
}