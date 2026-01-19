'use client';
import { Post }from '@/types/blog'
import PostCard from '@/components/postcard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';

export default function CardSwiper({ posts }: { posts: Post[] }){
	const featuredPosts = posts.filter(post => post.featured);
	if(featuredPosts.length == 0){
		return null;
	}

	return(
		<section>
			<Swiper
				modules = {[Autoplay]}
				slidesPerView = {1}
				loop = {true}
				autoplay = {{ delay: 5000, disableOnInteraction: false}}
				className = 'max-w-xl w-full h-auto'>
				{featuredPosts.map(post => (
					<SwiperSlide key = {post.id}>
						<FeaturedSlide post = {post} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

function FeaturedSlide({ post }: { post: Post }){
	return(
		<Link href = {`/post/${post.id}`} className = 'group block'>
			<article className = "relative h-[420px] md:h-[480px] overflow-hidden">
				<span className = "absolute inset-0 pointer-events-none">
					<span className = 'absolute top-0 left-0 h-0.5 w-full bg-black dark:bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100' />
					<span className = 'absolute bottom-0 left-0 h-0.5 w-full bg-black dark:bg-white scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100' />
				</span>

				
				<div className="relative z-10 h-full p-3">
					<div className = 'relative h-full rounded-2xl overflow-hidden'>
					{post.auto_head_image && (
						<img src = {post.auto_head_image}
							className = 'absolute inset-0 w-full h-full object-cover'>
						</img>
					)}
					<div className = 'absolute inset-0 bg-black/40'></div>
	
					<div className = 'relative z-10 h-full flex flex-col justify-end p-8 text-white'>
						<h3 className = 'text-2xl md:text-3xl font-semibold mb-2'>
							{post.title}
						</h3>
	
						<div className = 'flex gap-4 text-sm opacity-80'>
							<time>
								{new Date(post.created_at).toLocaleDateString('ko-KR')}
							</time>
							{post.category && (
								<span>#{post.category.name}</span>
							)}
						</div>
					</div>
					</div>
				</div>
			</article>
		</Link>
	)
}