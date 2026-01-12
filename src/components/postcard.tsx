import { Post } from '@/types/blog';
import Link from 'next/link';

export default function PostCard({ post }: { post: Post }) {
	let imgUrl = post.auto_head_image;

	return (
	    <>	
			<div className='relative overflow-hidden bw-card w-full max-w-sm aspect-square border-black dark:border-white border-1 mx-auto'>
	        <Link href={`/post/${post.id}`} className='group block w-full h-full'>
			    <div className='absolute inset-0 z-0'>
		        <img 
			        src={imgUrl} 
		            alt={post.title}
	                className='w-full h-full object-cover' 
	            />
				<div className = 'absolute inset-0 bg-white/80 dark:bg-dark-bg/80'></div>
		        </div>
				
				<div className='relative z-10 flex flex-col justify-between h-full p-5 text-black dark:text-white'>
	            <div>
		            <h3 className='text-xl mb-1 break-keep leading-tight'>{post.title}</h3>
		            <time className='text-base opacity-50'>
				        {new Date(post.created_at).toLocaleDateString('ko-KR')}
		            </time>
		        </div>
		            <div>
			            <h4 className='text-base border-b-2 border-black dark:border-white pb-0.5'>
				            #{post.category.name}
			            </h4>
					</div>
		        </div>
	        </Link>
	      </div>
    </>);
}