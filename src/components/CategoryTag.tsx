export default function CategoryTag({ category }: { category: string }){
	const colorMap: Record<string, string> = {
		dev_etc: 'text-cat-dev-etc border-cat-dev-etc',
		PS: 'text-cat-ps border-cat-ps',
		dev_blog: 'text-cat-dev-blog border-cat-dev-blog',
		album_review: 'text-cat-album-review border-cat-album-review'
	};

	return(
		<span className = {`tag ${colorMap[category] ?? 'text-text-3 border-text-3'}`}>
			#{category}
		</span>
	)
}