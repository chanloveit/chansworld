import "./globals.css";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Providers from './providers';
import { Metadata } from 'next';
import { Playfair_Display, Nanum_Myeongjo } from 'next/font/google';

export const metadata = {
	title: {
		default: 'chansworld: 이찬희 블로그',
		template: '%s | chansworld',
	},

	description: 'chansworld: 이찬희 블로그',

	openGraph: {
		siteName: 'chansworld: 이찬희 블로그'
	},

	icons: {
		icon: '/favicon.ico',
	},
	
	verification: {
		google: "oqZPgdu6nMgI0e9z8qvbM2gdq9ZM9owap03ZwIfysTk"
	}
};

/*
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair' 
});

const nanum = Nanum_Myeongjo({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-nanum',
  preload: false 
});
*/

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang = "ko" suppressHydrationWarning> 
		<head>
			<meta name = 'format-detection' content = 'telephone=no, email=no, address=no, address=no'></meta>
		</head>
				
	    <body 
			style = {{ fontFamily: `var(--font-playfair), var(--font-nanum), serif` }} 
			className = 'bg-white dark:bg-dark-bg text-black dark:text-white min-h-screen'>
			<Providers>
				<Navbar></Navbar>
			
				<div className = 'max-w-4xl mx-auto px-4 min-h-screen flex flex-col bg-white dark:bg-dark-bg text-black dark:text-white'>
					<main className = 'flex-grow bg-white dark:bg-dark-bg text-black dark:text-white'>
						{children}
					</main>
				</div>
				
				<Footer></Footer>
			</Providers>
	    </body>
    </html>
  );
}