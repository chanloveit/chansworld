export default function Footer(){
	return(
		<footer className='h-[70px] border-t border-black dark:border-white mt-12 relative w-full z-[100] overflow-hidden bg-white dark:bg-dark-bg'>
		    <div 
		        className='absolute inset-0 -z-10 bg-cover bg-bottom'
		        style={{ 
		        backgroundImage: "url('/image/img.jpg')", 
		        opacity: 0.2 
			    }}
		    />
	
		    <p className='w-full py-4 text-center text-sm text-black dark:text-white'>
		        ©2026 Lee Chan-Hee All Rights Reserved
		    </p>
	    </footer>
	)
}