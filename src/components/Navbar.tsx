'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle'

export default function Navbar(){
	const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState('');

	useEffect(() => {
		setMounted(true);
		const tick = () => setTime(new Date().toTimeString().slice(0, 8));
		tick();
		const id = setInterval(tick, 1000);
		return () => clearInterval(id);
	});

	const isDark = resolvedTheme === "dark";
	
	return(
		<header className = 'sticky top-0 z-50 border-b border-border-1 bg-bg-1'>
			<div className = 'flex items-center justify-between border-b border-border-1 px-10 h-10 text-[11px] text-text-3 tracking-wider'>
				<span>root@chansworld:
					<span className = 'text-accent'>{pathname === '/' ? '~' : pathname}</span>
					$
				</span>

				<span className = 'tabular-nums'>
          {mounted ? time : "──:──:──"}
        </span>
			</div>

			<div className = 'flex items-center justify-between px-10 h-14'>
				<Link href = '/'>
					<span className = 'text-[16px] font-bold tracking-[3px] text-text-1'>chansworld</span>
					<span className = 'ml-0.5' style = {{ animation: 'blink 1s step-end infinite' }}>█</span>
				</Link>

				<ThemeToggle />
			</div>
		</header>
	)
}