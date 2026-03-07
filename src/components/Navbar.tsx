'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle'
import { Clock } from 'simple-digital-clock';

export default function Navbar(){
	const pathname = usePathname();
	
	return(
		<header className = 'sticky top-0 z-50 border-b border-border-1 bg-bg-1'>
			<div className = 'flex items-center justify-between border-b border-border-1 px-10 h-10 text-[11px] text-text-3 tracking-wider'>
				<span>root@chansworld:
					<span className = 'text-accent'>{pathname === '/' ? '~' : pathname}</span>
					$
				</span>

				<Clock />
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