'use client'

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const customSchema = {
  ...defaultSchema,
  tagNames: [
	...(defaultSchema.tagNames ?? []),
	'iframe',
	'img',
	'div',
	'span',
  ],
  attributes: {
    ...defaultSchema.attributes,
    iframe: [
      'src',
      'width',
      'height',
      'frameborder',
      'allow',
      'allowfullscreen',
    ],
    img: [
      'src',
      'alt',
      'title',
      'width',
      'height',
      'style',
    ],
    div: ['className', 'style'],
    span: ['className', 'style'],
  },
};

export default function MarkdownRenderer({ content }: { content: string}){
	return(
		<ReactMarkdown
			remarkPlugins = {[remarkGfm]}
			rehypePlugins = {[rehypeSlug, rehypeRaw, [rehypeSanitize, customSchema]]}
			components = {{
				p({ children, ...props }: any){
					const text = String(children).trim();
					const match = /^youtube:([a-zA-Z0-9_-]+)$/.exec(text);
					if(match){
						return <LiteYouTubeEmbed id = {match[1]} title = 'youtube' />;
					}
					return <p {...props}>{children}</p>;
				},
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