import { getCategoryColor } from '@/utils/categories';

interface Props{
	category: string,
	categories: string[]
}

export default function CategoryTag({ category, categories }: Props){
	const color = getCategoryColor(categories, category);
	return(
		<span className = 'text-[10px] tracking-widest px-2 py-0.5 border rounded-sm lowercase whitespace-nowrap' style = {{ color, borderColor: color }}>#{category}</span>
	)
}