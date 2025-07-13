export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.therighttoai.org';
  const pages = ['/', '/about', '/book', '/poster'];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    pages.map(p => `\n  <url><loc>${baseUrl}${p}</loc></url>`).join('') +
    '\n</urlset>';
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
