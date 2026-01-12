import Comments from '@/components/comments';

export default function GuestBook(){
	return (
	<main className="max-w-2xl mx-auto p-10 text-center">
	    <h1 className="text-3xl font-bold mb-5">Guestbook</h1>
	    <p className="mb-10 opacity-70">자유롭게 흔적을 남겨주세요.</p>
      
	    <Comments />
    </main>
	);
}