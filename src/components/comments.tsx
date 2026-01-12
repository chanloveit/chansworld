'use client';
import Giscus from '@giscus/react';

export default function Comments(){
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
				theme = "preferred_color_scheme"
				lang = "ko" />
		</section>
	);
}