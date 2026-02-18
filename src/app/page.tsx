import { getAllPosts, getFeaturedPosts } from '@/utils/posts';
import type { Post } from '@/utils/types';
import Link from 'next/link'

export default async function Home() {
	const featured = getFeaturedPosts().slice(0, 5);
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
