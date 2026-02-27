'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeSlug from 'rehype-slug';

export default function MarkdownRenderer({ content }: { content: string}){
	return(
		<ReactMarkdown
			remarkPlugins = {[remarkGfm]}
			rehypePlugins = {[rehypeSlug]}
			components = {{
				code({ node, className, children, ...props }: any){
					const match = /language-(\w+)/.exec(className || '');
					const inline = !match;

					return !inline ? (
						<SyntaxHighlighter
							style = {vscDarkPlus}
							language = {match[1]}
							PreTag = 'div'
							customStyle = {{
								background: 'var(--color-bg-2)'
							}}
							codeTagProps = {{ style: { fontFamily: 'var(--font-jetbrains)' } }}
							{...props}>
							{String(children).replace(/\n$/, '')}
						</SyntaxHighlighter>
					) : (
						<code className = '{className} {...props}'>{children}</code>
					);
				}
			}}>{content}</ReactMarkdown>
	)
}