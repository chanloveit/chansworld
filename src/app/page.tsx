import { Post, Category } from '@types/blog';
import { getPosts, getCategories } from '@/components/getmodels';
import CategoriesBar from '@/components/categoriesbar';
import PostCard from '@/components/postcard';
import AnimationWrapper from '@/components/animationwrapper.tsx'
import Link from 'next/link';

export default async function Home() {
	const posts = await getPosts();
	const categories = await getCategories();
	const latestPost0 = posts[0];
	
	return (
		<main className = 'bg-white dark:bg-dark-bg text-black dark:text-white'>
			<AnimationWrapper>
				<CategoriesBar categories = {categories} />
				<hr className = 'mb-4'></hr>
				<section className = 'flex flex-col gap-6'>
					<h2 className='text-3xl'>Latest Post.</h2>
					<PostCard key = {latestPost0.id} post = {latestPost0} />
				</section>


				<hr className = 'mt-16 mb-4'></hr>
				<section className = 'flex flex-col gap-6'>
					<h2 className='text-3xl'>Every Post.</h2>
					<section className = 'grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>
						{posts.map(post => (
							<PostCard key = {post.id} post = {post} />
						))}
					</section>
				</section>
			</AnimationWrapper>
		</main>
	)
}
