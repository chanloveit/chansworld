import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getPostDetail } from '@/components/getmodels';
import AnimationWrapper from '@/components/animationwrapper';
import YoutubeEmbed from '@/components/youtubeembed'
import Comments from '@/components/comments'
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({ params }) : Promise<Metadata> {
	const { id } = await params;
	const post = await getPostDetail(id);

	const description = post.content.replace(/[#*`\[\]]/g, '').slice(0, 150).trim();

	return {
		title: `${post.title}`,
		description: description,
		openGraph: {
			title: post.title,
			description: description,
			images: post.auto_head_image,
			publishedTime: post.created_at,
		},
	};
}

export default async function PostPage({ params }){
	const { id } = await params;
	const post = await getPostDetail(id);
	
	return(
		<main className = 'min-h-screen bg-white dark:bg-dark-bg text-black dark:text-white'>
			<AnimationWrapper>
				<header className="mt-12 mb-12 border-b-2 border-black dark:border-white pb-4">
					<h1 className = 'text-4xl mb-4 break-keep'>
						{post.title}
					</h1>
					<span className = 'text-base dark:border-white py-3'>
						#{post.category.name}
					</span>
					<time className = 'text-base opacity-60 px-3'>
						{new Date(post.created_at).toLocaleDateString('ko-KR')}
					</time>
				</header>

				<div className = 'prose dark:prose-invert max-w-none'>
				<ReactMarkdown
					rehypePlugins = {[rehypeRaw]}
					remarkPlugins = {[remarkGfm]}
					components = {{
						p({ children }){
							if(typeof children == 'string' && children.startsWith('youtube:')){
								const videoId = children.replace('youtube:', '').trim();
								return <YoutubeEmbed videoId = {videoId} title = "Embedded Video" />;
							}	

							return <p className="mb-4 leading-loose">{children}</p>;
						},
						
						code({ node, inline, className, children, ...props }: any) {
							const match = /language-(\w+)/.exec(className || '');
							return !inline && match ? (
								<SyntaxHighlighter
									style = {oneDark}
									language = {match[1]}
									PreTag = 'div'
									className = 'rounded-none border border-gray-800 my-6'
									{...props}
								>{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
							):(
								<code className = 'bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 text-sm font-mono' {...props}>
									{children}
								</code>
							)			
						},

						img: ({...props }) => (
							<img {...props} className = 'my-10 mx-auto w-auto max-w-xl h-auto' />
						),
						
					}}
				>
					{post.content}
				</ReactMarkdown>
				</div>
			</AnimationWrapper>

			<Comments></Comments>
		</main>
	);
}