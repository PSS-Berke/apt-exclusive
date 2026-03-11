import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';
import { products } from '@/data/products';

export const metadata = {
  title: 'Compare | abt Exclusive',
  description:
    'Compare all abt Exclusive mattresses side by side. Five tiers of online-exclusive comfort — find your perfect level.',
};

const keyBenefits: Record<string, string> = {
  luna: 'Dependable Comfort',
  mystic: 'Zero Motion Transfer',
  'fak-cosmos': 'Maximum Cooling & Comfort',
  'cosmos-hybrid': 'Ultimate Comfort, Zero Motion Transfer',
  insatiable: 'The Absolute Premium Experience',
};

const sortedProducts = [...products]
  .filter((p) => p.type !== 'Crib Mattress')
  .sort((a, b) => a.price - b.price);

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] linen-texture relative">
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(255, 220, 180, 0.4) 0%, rgba(255, 200, 150, 0.2) 30%, transparent 60%)',
        }}
      />

      {/* Hero Header */}
      <section className="pt-20 pb-12 relative overflow-hidden z-10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/10 blob-shape blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-navy/5 blob-shape-alt blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block text-gold-dark font-medium text-sm mb-4">
            abt Exclusive · Online Only
          </span>
          <h1 className="text-3xl md:text-4xl font-serif text-navy mb-4">
            Compare Our <span className="wavy-underline">Collection</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Five tiers of comfort, all made in America. Find your perfect match.
          </p>
        </div>
      </section>

      {/* Tile Grid */}
      <section className="py-10 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {sortedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group flex flex-col bg-white/80 rounded-3xl border-2 border-gold/10 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
                  {product.images[0] ? (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={240}
                      height={240}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span className="text-gray-300 text-xs">Image coming soon</span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4">
                  {/* Type + Name */}
                  <span className="text-xs text-gold-dark font-medium tracking-wider uppercase">
                    {product.type}
                  </span>
                  <h3 className="text-base font-semibold text-navy mt-0.5 mb-1">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <p className="text-lg font-light text-navy mb-3">
                    From ${product.price.toLocaleString()}
                  </p>

                  {/* Key Benefit */}
                  <div className="flex items-start gap-1.5 mb-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1 flex-shrink-0" />
                    <span className="text-xs text-gray-500 leading-snug">
                      {keyBenefits[product.slug]}
                    </span>
                  </div>

                  {/* Best For tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.bestFor.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gold/10 text-gold-dark text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i <= Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-gray-200'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{product.rating}</span>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto flex items-center gap-1.5 text-navy text-sm font-medium group-hover:text-gold-dark transition-colors">
                    View Details
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif text-navy mb-6">Still Deciding?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shop-by-feel"
              className="inline-flex items-center gap-2 text-navy font-medium hover:text-gold-dark transition-colors"
            >
              Shop by Sleep Style
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-gold/30 hidden sm:inline">|</span>
            <Link
              href="/quiz"
              className="text-gray-500 hover:text-navy transition-colors"
            >
              Take the Sleep Quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
