'use client';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface YoutubeProps{
	videoId: string;
	title: string;
}

export default function YoutubeEmbed({ videoId, title = 'YouTube Video' }: YoutubeProps){
	return(
		<div className = 'my-6 w-full mx-auto overflow-hidden border border-black/50 dark:border-white/50'>
			<LiteYouTubeEmbed id = {videoId} title = {title} poster = 'maxresdefault' noCookie = {true}>
			</LiteYouTubeEmbed>
		</div>
	);
}