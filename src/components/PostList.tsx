'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Post } from '@/utils/types';
import PostRow from '@/components/PostRow';

const CATEGORIES = ['ALL', 'dev_etc', 'PS', 'dev_blog', 'album_review'];

export default function PostList({ posts }: { posts: Post[] }){
	const [filter, setFilter] = useState('ALL')

	const filtered = filter === 'ALL' ? posts : posts.filter((p) => p.category === filter);

	return(
		<section>
			<div className = 'flex items-baseline justify-between mb-5'>
				<p className = 'text-text-3 text-[12px] tracking-widest'>
					//latest - {filtered.length} entries
				</p>

				<Link href = '/posts' className = 'text-[12px] text-text-3 tracking-widest hover:text-accent transition-colors duration-200'>
					all posts →
				</Link>
			</div>

			<div className="flex gap-2 flex-wrap mb-6">
        {CATEGORIES.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] tracking-[2px] px-3 py-1 border rounded-sm transition-all duration-150 cursor-pointer lowercase font-jetbrains
                ${active
                  ? 'border-accent text-accent'
                  : 'border-border-1 text-text-3 hover:border-border-2 hover:text-text-2'
                }`}
            >
              {cat === 'ALL' ? 'all' : `#${cat}`}
            </button>
          );
        })}
      </div>

      {filtered.map((post, index) => (
        <PostRow key = {post.id} post = {post} index = {index} />
      ))}
		</section>
	)
}