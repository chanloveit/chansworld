import "./globals.css";
import { Metadata } from 'next';
import { Providers } from '@/utils/providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
	title: {
		default: 'chansworld: 이찬희 블로그',
		template: '%s | chansworld',
	},
	description: 'chansworld: 이찬희 블로그',
	openGraph: {
		siteName: 'chansworld: 이찬희 블로그',
		type: "website"
	},
	metadataBase: new URL("https://chansworld.vercel.app"),
	icons: {
		icon: '/favicon.ico',
	},
	verification: {
		google: "oqZPgdu6nMgI0e9z8qvbM2gdq9ZM9owap03ZwIfysTk"
	}
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang = "ko" suppressHydrationWarning> 
	    <body className = 'flex flex-col min-h-screen'>
				<Providers>
					<Navbar />
					<main className = 'flex-grow'> 
						{children}
					</main>
					<Footer />
				</Providers>
			</body>
    </html>
  );
}