import Link from 'next/link';
import ThemeToggle from './themetoggle';
import GithubLink from './githublink';

export default function Navbar(){
	return(
		<nav className = 'sticky top-0 flex items-center w-full h-[70px] px-5 border-b border-black dark:border-white z-100 bg-white dark:bg-dark-bg text-black dark:text-white'>
			<div className = 'absolute inset-0 -z-10 bg-cover bg-top transition-opacity duration-1000'
				style = {{ backgroundImage: "url('/image/img.jpg')", opacity: 0.2}}>
			</div>
			
			<Link href = '/' className = 'flex-shrink-0 text-2xl hover:underline '>
				chansworld
			</Link>
			
			<div className="flex-1"></div>
			
			<div className = 'flex items-center gap-4 md:gap-8'>
				<ThemeToggle></ThemeToggle>
				<GithubLink></GithubLink>
				<Link href = '/about' className = 'text-sm md:text-base font-bolder hover:underline'>About</Link>
				<Link href = '/guestbook' className = 'text-sm md:text-base font-bolder hover:underline'>GuestBook</Link>
			</div>
		</nav>
	)
}