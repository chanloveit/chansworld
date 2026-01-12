import { getPostsByCategory } from '@/components/getmodels';
import PostCard from '@/components/postcard';
import { Post } from '@/types/blog';
import AnimationWrapper from '@/components/animationwrapper.tsx'
import Link from 'next/link';

export default async function CategoryPage({ params }: { params: { slug: string } }){
	const { slug } = await params;
	const posts = await getPostsByCategory(slug);

	return(
		<main className = 'bg-white dark:bg-dark-bg text-black dark:text-white'>
			<AnimationWrapper>
				<h1 className = 'px-4 py-6 text-center text-xl'>
					#{posts[0].category.name}
					<p className = 'text-sm'>{posts.length} posts</p>
				</h1>
	
				<hr className = 'mb-4'></hr>
				<section className = 'grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>
					{posts.map((post) => (
						<PostCard key = {post.id} post = {post}></PostCard>
					))}
				</section>
			</AnimationWrapper>
		</main>
	)
}