'use client';

import Link from 'next/link';
import { Github } from 'lucide-react';

export default function Footer(){
	return(
		<footer className = 'border-t border border-border-1 px-10 py-5 flex items-center text-[11px] text-text-3 justify-between tracking-wider'>
			<span>©2026 Lee Chan-Hee</span>
			<div className = 'flex items-center gap-6'>
				<Link 
					href = 'https://github.com/chanloveit'
					target = '_blank'
					rel = 'noopener noreferrer'
					className = 'transition-colors duration-200 hover:text-accent'>
					<Github />
				</Link>
				<span onClick = {() => window.close()} className = 'transition-colors duration-200 hover:text-red-500 hover:cursor-pointer'>exit 0</span>
			</div>
		</footer>
	)
}