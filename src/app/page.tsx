import { Post, Category } from '@/types/blog';
import { getPosts, getCategories } from '@/components/getmodels';
import CategoriesBar from '@/components/categoriesbar';
import PostCard from '@/components/postcard';
import AnimationWrapper from '@/components/animationwrapper'
import CardSwiper from '@/components/cardswiper'
import Link from 'next/link';

export default async function Home() {
	const posts = await getPosts();
	const categories = await getCategories();
	const latestPosts = posts.slice(0, 10);
	return (
		<main className = 'bg-white dark:bg-dark-bg text-black dark:text-white'>
			<AnimationWrapper>
				<CategoriesBar categories = {categories} />
				<hr className = 'mb-4 border-1'></hr>
				<section className = 'flex flex-col gap-6'>
					<h2 className='text-3xl'>Featured Posts.</h2>
					<CardSwiper posts = {posts} />
				</section>


				<hr className = 'mt-16 mb-4 border-1'></hr>
				<section className = 'flex flex-col gap-6'>
					<div className = 'flex justify-between items-center'>
						<h2 className='text-3xl'>Latest Posts.</h2>
						<Link href = "/allposts" className='text-sm text-center hover:underline'>
			              ALL POSTS →
			            </Link>
					</div>
					
					<section className = 'grid grid-cols-1 md:grid-cols-2 gap-8 justify-center'>
						{latestPosts.map(post => (
							<PostCard key = {post.id} post = {post}/>
						))}
					</section>
				</section>
			</AnimationWrapper>
		</main>
	)
}
