'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Github } from 'lucide-react';

export default function GithubLink(){
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false)
	
	useEffect(() => setMounted(true), [])
	if (!mounted) return null
	
	return(
		<a href = "https://github.com/chanloveit/" target = "_blank" className = "inline-block">
			{theme === 'dark' ? (
				<Github className = 'w-6 h-6 text-white'></Github>
			) : (
				<Github className = 'w-6 h-6 text-black'></Github> 
			)} 
		</a>
	);
}