import "./globals.css";
import { Metadata } from 'next';


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

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang = "ko" suppressHydrationWarning> 
			<head>
				<meta name = 'format-detection' content = 'telephone=no, email=no, address=no, address=no'></meta>
			</head>
				
	    <body>
				{children}
			</body>
    </html>
  );
}