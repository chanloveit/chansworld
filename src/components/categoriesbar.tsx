import { Category } from '@/types/blog';
import Link from 'next/link';


export default function CategoriesBar({ categories }: {categories: Category[] }){
	return(
		<nav>
			<ul className = 'flex flex-wrap gap-3 mt-4 mb-4 md:mt-6 md:mb-6 px-4 justify-center max-w-lg mx-auto bg-white text-black dark:bg-dark-bg dark:text-white'>
				{categories.map((cat) => (
			<li key = {cat.id}>
				<Link href = {`/category/${cat.slug}`} className = 'hover:underline'>
					<span className = 'text-xl'>#{cat.name}</span>
					<span className = 'ml-1 text-sm'>({cat.post_count})</span>
				</Link>
			</li>
				))}
			</ul>
		</nav>
	)
}