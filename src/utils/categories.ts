export const CATEGORY_PALETTE = [
  '#00ff88', '#00cfff', '#ffcc00', '#ff4466', '#bf7fff',
  '#ff8c00', '#00e5ff', '#ff6b6b', '#69ff47', '#ffd700'
];

export function getCategoryColor(categories: string[], category: string): string{
	const idx = categories.indexOf(category);
	return CATEGORY_PALETTE[idx % CATEGORY_PALETTE.length];
}