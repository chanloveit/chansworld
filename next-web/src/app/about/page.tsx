export default function About(){
	return(
		<main className = 'px-6 animate-in fade-in duration-700 text-black dark:text-white bg-white dark:bg-dark-bg'>
			<div className = 'flex flex-col md:flex-row items-start mt-12 gap-4 mb-4'>
		        
				<div className = 'basis-full md:basis-1/2 flex flex-col gap-4'>
					<h1 className = 'text-4xl'>
				        이찬희
				        <span className = "text-xl font-light ml-2 text-gray-500">
					        Chan-Hee Lee
				        </span>
			        </h1>

					<section className = 'gap-12 text-lg'>
						<p>탄생(2004.10 ~)</p>
						<p>숭실대학교 소프트웨어학부(2023.3 ~)</p>
						<p>대한민국 육군(2025.4 ~ 2026.10)</p>
						<p>still building...</p>
					</section>
				</div>
				
				<div className = 'hidden md:block w-[1px] self-stretch bg-gray-300 mx-2'></div>
		        <div className = 'block md:hidden w-full h-[1px] bg-gray-300 my-2'></div>
				
		        <div className = 'basis-full md:basis-1/2 flex justify-center md:justify-end'>
			        <img 
			            src = '/image/profile.jpg' 
			            alt = 'Profile'
			            className = 'w-full max-w-sm md:w-auto object-cover border border-black/50 dark:border-white/50' 
			        />
			    </div>
			</div>
			<hr className = 'mt-12 mb-4'></hr>
			<h1 className = 'text-3xl mb-4'>Projects.</h1>
			<section className = 'gap-12 text-lg'>
				<p>개인 블로그 chansworld(2026.1 ~ )</p>
			</section>
		</main>
	)
}