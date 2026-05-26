import React from "react";
import { Layout } from "../components/Layout";

type Product = {
  id: string | number;
  name: string;
  brand?: string;
  price: number;
  original_price?: number;
  image_url?: string;
  rating?: number;
  review_count?: number;
  is_deal?: boolean;
};

export default function LaptopsPageUI({
  products = [],
  query,
  loading = false,
}: {
  products?: Product[];
  query?: string;
  loading?: boolean;
}) {
  return (
    <Layout>
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Laptops</h2>
        {query && <p className="text-gray-500 dark:text-zinc-400 mb-8">Search results for &quot;{query}&quot;</p>}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-zinc-400">Loading...</p>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const discount = product.original_price
                ? Math.round(((product.original_price - product.price) / product.original_price) * 100)
                : 0;
              return (
                <article key={String(product.id)} className="group relative flex flex-col bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden bg-gray-100 dark:bg-zinc-800 aspect-square">
                    {product.image_url ? (
                      <img src={product.image_url} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">No image</div>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 p-4">
                    <p className="text-xs text-gray-400 dark:text-zinc-500 font-medium uppercase tracking-wider mb-1">{product.brand}</p>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug mb-2 line-clamp-2 group-hover:text-red-500 transition-colors">{product.name}</h3>
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className={`h-3 w-3 ${star <= Math.round(product.rating ?? 0) ? "fill-amber-400 text-amber-400" : "text-gray-300 dark:text-zinc-700"}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.555L19.335 24 12 19.77 4.665 24l1.635-8.695L.6 9.75l7.732-1.732L12 .587z" /></svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400 dark:text-zinc-500">({(product.review_count ?? 0).toLocaleString()})</span>
                    </div>
                    <div className="mt-auto flex items-end justify-between gap-2">
                      <div>
                        <p className="text-lg font-bold text-gray-900 dark:text-white">${product.price.toLocaleString()}</p>
                        {product.original_price && <p className="text-xs text-gray-400 dark:text-zinc-600 line-through">${product.original_price.toLocaleString()}</p>}
                      </div>
                      <button className="flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors">Add</button>
                    </div>
                  </div>
                  {product.is_deal && <span className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Deal</span>}
                  {discount > 0 && <span className="absolute top-12 left-3 z-10 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">-{discount}%</span>}
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-zinc-400">No laptops found.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}