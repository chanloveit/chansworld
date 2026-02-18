'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle(){
	const {resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if(!mounted){
		return <div className = 'w-10 h-10' />;
	}

	const isDark = resolvedTheme === "dark";

	return(
		<button 
			onClick = {() => setTheme(isDark ? 'light' : 'dark')}
			aria-label = 'toggle theme'
			className = 'text-text-1 hover:text-accent transition-colors duration-200 cursor-pointer bg-transparent border-none p-1'>
			{isDark ? <Sun size = {20} /> : <Moon size = {20} />}
		</button>
	);
}