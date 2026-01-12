import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostDetail } from '@/components/getmodels';
import YoutubeEmbed from '@/components/youtubeembed';
import Comments from '@/components/comments';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }){
	const { id } = await params;
	const post = await getPostDetail(id);

	const getYouTubeId = (urlStr: string) => {
        try{
            const url = new URL(urlStr.trim());
            if (url.hostname.includes("youtube.com")) return url.searchParams.get("v");
            if (url.hostname.includes("youtu.be")) return url.pathname.substring(1);
            return null;
        } 
		catch{
            return null;
        }
    };
	
	return(
		<main className = 'bg-white dark:bg-dark-bg text-black dark:text-white'>
			<div className = 'mb-12'>
				<h1 className = 'mt-10 text-3xl'>{post.title}</h1>
				<time className = 'text-gray-400 text-3sm'>
					{new Date(post.created_at).toLocaleDateString('ko-KR')}
				</time>
				<hr className = 'mt-4'></hr>
			</div>

			<article className="prose prose-neutral max-w-none text-lg">
		        <ReactMarkdown 
		          remarkPlugins={[remarkGfm]}
		          components={{
		            img: ({ src }) => (
			            <img 
			                src={src} 
			                className="mx-auto my-6 block max-w-full h-auto border border-black/50 dark:border-white/50" 
			            />
		            ),
					p: ({ children }) => {
						return(
							<div className = 'my-6 leading-relaxed'>
								{children}
							</div>
						);
						},
					a: ({ href, children }) => {
						const url = href || '';
						const videoId = getYouTubeId(url);

						if(videoId){
							return <YoutubeEmbed videoId={videoId} title={post.title} />;
						}

						else{
							return(
							<a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
				                {children}
				            </a>
							);
						}
					}
			    }}
		    >
		          {post.content}
		        </ReactMarkdown>
		    </article>
			<Comments></Comments>
			<hr className = 'mt-4'></hr>
		</main>
	)
}