import Link from 'next/link';
import type { Post } from '@/utils/types';
import CategoryTag from '@/components/CategoryTag';

export default function PostRow({ post, index }: {post: Post; index: number }){
	return(
		<Link href = {`/post/${post.id}`}>
			<div style = {{ gridTemplateColumns: '36px 1fr auto' }} className = 'grid items-center py-4 px-2 border-b border-border-1 cursor-pointer rounded-sm transition-colors duration-200 hover:bg-bg-2 group'>
				<span className = 'text-[12px] text-text-3 text-right tabular-nums group-hover:hidden'>
					{String(index + 1).padStart(2, '0')}
				</span>
				<span className = 'text-[12px] text-text-3 text-right hidden group-hover:block'>→</span>
				<span className = 'text-sm text-text-2 overflow-hidden text-ellipsis whitespace-nowrap px-4 group-hover:text-text-1 transition-colors duration-150'>
					{post.title}
				</span>

				<div className = 'flex items-center gap-4 shrink-0'>
					<span className = 'text-[12px] text-text-3 min-w-20 text-right'>{post.created_at}</span>
					<CategoryTag category = {post.category} />
				</div> 
			</div>
		</Link>
	)
}