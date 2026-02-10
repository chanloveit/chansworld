export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://chansworld.vercel.app/sitemap.xml',
  }
}