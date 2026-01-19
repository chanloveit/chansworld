import { getPosts, getCategories } from '@/components/getmodels';
import PostCard from '@/components/postcard';
import CategoriesBar from '@/components/categoriesbar';
import AnimationWrapper from '@/components/animationwrapper';

export default async function AllPostsPage(){
	const posts = await getPosts();
	const categories = await getCategories();

	return (
		<main className = 'bg-white dark:bg-dark-bg text-black dark:text-white'>
			<AnimationWrapper>
				<CategoriesBar categories = {categories} />
				<hr className="mt-4 border-black dark:border-white border-1 mb-6" />
				<h2 className='text-3xl mb-6'>All Posts.</h2>
				<div className = "grid grid-cols-1 md:grid-cols-2 gap-8">
	            {posts.map((post) => (
	              <PostCard key={post.id} post={post} />
	            ))}
	          </div>
			</AnimationWrapper>
		</main>
	)
}