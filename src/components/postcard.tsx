import { Post } from '@/types/blog';
import Link from 'next/link';

export default function PostCard({ post }: { post: Post }) {
	let imgUrl = post.auto_head_image || '';

	return (
		<Link href = {`/post/${post.id}`} className = 'block group'>
			<article className = 'p-2 w-full max-w-sm mx-auto overflow-hidden transition-transform duration-400 hover:-translate-y-1'>
				<div className = 'aspect-square overflow-hidden'>
					{imgUrl && (
						<img src = {imgUrl} className = 'w-full h-full object-cover rounded-xl'></img>
					)}
				</div>

				<div className = 'mt-2 border border-b-1 dark:white'></div>
				
				<div className = 'flex flex-col gap-2 text-black dark:text-white mt-4'>
					<h3 className = 'text-xl font-medium leading-snug line-clamp-2'>{post.title}</h3>
					<div className = 'flex justify-between'>
						<time className = 'text-sm opacity-60'>{new Date(post.created_at).toLocaleDateString('ko-KR')}</time>
						<span className = 'text-sm'>#{post.category.name}</span>
					</div>
				</div>
			</article>
		</Link>
	);
}
