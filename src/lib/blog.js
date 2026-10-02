// Every file in /blog/*.json becomes a post. The file name (without .json) is its URL slug.
const modules = import.meta.glob('/blog/*.json', { eager: true, import: 'default' });

export const posts = Object.entries(modules)
  .map(([path, data]) => {
    const slug = path.split('/').pop().replace(/\.json$/, '');
    const categories = Array.isArray(data.categories)
      ? data.categories
      : data.categories
        ? [data.categories]
        : [];
    // "post" can be one markdown string, or an array of lines (easier to edit by hand in JSON).
    const post = Array.isArray(data.post) ? data.post.join('\n') : String(data.post ?? '');
    return { slug, title: data.title ?? slug, date: data.date ?? '', post, categories };
  })
  .sort((a, b) => parseDate(b.date) - parseDate(a.date));

export const allCategories = [...new Set(posts.flatMap((p) => p.categories))].sort((a, b) =>
  a.localeCompare(b)
);

function parseDate(value) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return new Date(`${value}T00:00:00`);
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? new Date(0) : d;
}

export function formatDate(value) {
  const d = parseDate(value);
  if (d.getTime() === 0) return '';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function excerpt(markdown, length = 150) {
  const plain = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return plain.length > length ? plain.slice(0, length).trimEnd() + '…' : plain;
}
