import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';

const GHOST_URL = 'https://blog.florianrolke.com';
// Public read-only Ghost Content API key — designed to be exposed in the client bundle.
const GHOST_CONTENT_API_KEY = 'a38b2a56ba0275096bfd341c73';

interface GhostPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  custom_excerpt: string | null;
  feature_image: string | null;
  published_at: string;
  reading_time: number;
  primary_tag: { name: string } | null;
  tags: { name: string }[];
  url: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<GhostPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState<string[]>(['All']);

  useEffect(() => {
    fetch(`${GHOST_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_API_KEY}&include=tags&limit=all`)
      .then(res => res.json())
      .then(data => {
        const ghostPosts = data.posts || [];
        setPosts(ghostPosts);

        // Extract unique categories from tags
        const tags = new Set<string>();
        ghostPosts.forEach((p: GhostPost) => {
          if (p.primary_tag) tags.add(p.primary_tag.name);
          p.tags?.forEach(t => tags.add(t.name));
        });
        setCategories(['All', ...Array.from(tags)]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post =>
        post.primary_tag?.name === selectedCategory ||
        post.tags?.some(t => t.name === selectedCategory)
      );

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  const getPostUrl = (slug: string) => `${GHOST_URL}/${slug}/`;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section — navy to cyan gradient */}
      <section className="bg-gradient-to-br from-[#0d2847] via-[#0a3d6b] to-[#00ACC1] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <a href="/" className="inline-flex items-center gap-2 text-cyan-200 hover:text-white transition-colors mb-4">
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span className="text-sm font-medium">Back to Home</span>
            </a>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Insights & Case Studies
            </h2>
            <p className="text-xl md:text-2xl text-cyan-100 leading-relaxed">
              Real strategies from real businesses. Practical insights on <span className="text-white font-semibold">marketing, AI, and growth</span> — straight from the trenches.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      {categories.length > 1 && (
        <section className="bg-white border-b border-slate-200 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-[#0d2847] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm animate-pulse">
                  <div className="aspect-[16/9] bg-slate-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-slate-200 rounded w-20" />
                    <div className="h-6 bg-slate-200 rounded w-full" />
                    <div className="h-4 bg-slate-200 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No posts found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <a
                    href={getPostUrl(post.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#0d2847] to-[#00ACC1]">
                      {post.feature_image ? (
                        <img
                          src={post.feature_image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-white/30 text-6xl font-serif font-bold">FR</span>
                        </div>
                      )}
                    </div>
                  </a>
                  <div className="p-6">
                    {post.primary_tag && (
                      <span className="inline-block px-3 py-1 bg-cyan-50 text-[#00838F] text-xs font-semibold rounded-full mb-3 uppercase tracking-wide">
                        {post.primary_tag.name}
                      </span>
                    )}
                    <a
                      href={getPostUrl(post.slug)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00838F] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </a>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.custom_excerpt || post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(post.published_at)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.reading_time} min read
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#00ACC1] transition-colors" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#0d2847] to-[#00ACC1]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Stay in the loop
          </h3>
          <p className="text-cyan-100 text-lg mb-8">
            Get practical insights on marketing, AI, and business growth delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:border-transparent backdrop-blur-sm"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white hover:bg-cyan-50 text-[#0d2847] font-semibold rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d2847] text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0d2847] to-[#00ACC1] flex items-center justify-center border border-white/20">
                <span className="text-white font-bold text-sm">FR</span>
              </div>
              <span className="font-serif font-bold text-xl text-white">Florian Rolke</span>
            </div>
            <p className="text-sm">
              © 2026 Florian Rolke. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
