'use client';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Comments(){
	const { theme } = useTheme();
	
	return (
		<section className = 'mt-10 border-t border-black/50 dark:border-white/50 pt-10'>
			<Giscus 
				repo = 'chanloveit/chansworld'
				repoId = 'R_kgDOQ4NIow'
				category = 'Announcements'
				categoryId = 'DIC_kwDOQ4NIo84C03Gc'
				mapping = 'pathname'
				strict = '0'
				reactionsEnabled = '1'
				emitMetadata = "0"
				inputPosition = "bottom"
				theme = {theme === 'dark' ? 'transparent_dark' : 'light'}
				lang = "ko" />
		</section>
	);
}