'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle(){
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false)
	
	useEffect(() => setMounted(true), [])
	if (!mounted) return null
	
	return(
		<button
			onClick = {() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className = 'hover:underline transition-colors'>
			{theme === 'dark' ? (
				<Sun className = 'w-6 h-6 text-white' />
				) : (
				<Moon className = 'w-6 h-6 text-black' />
				)
			}
		</button>
	);
}