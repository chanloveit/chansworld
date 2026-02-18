// app/not-found.tsx 또는 pages/404.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className = 'items-center flex justify-center min-h-screen'>
			<div className = 'border border-border-1 w-full max-w-2xl p-4'>
				<div className = 'flex items-center mb-4'>
					<span className = 'text-[12px]'>root@chansworld:~</span>
					<span className = 'text-red-400 text-[12px]'>&nbsp;404 Not Found</span>
				</div>
			</div>
		</div>
  );
}