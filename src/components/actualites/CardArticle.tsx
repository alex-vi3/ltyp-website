import type { InferEntrySchema } from "astro:content";
import React from "react";

export const CardArticle: React.FC<{
  article: InferEntrySchema<"actualites">;
  id: string;
}> = ({ article, id }) => (
  <div className="lg:max-w-xs group/card">
    <a href={`/actualites/${id}/`}>
      <div
        className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 bg-cover bg-center grayscale-20"
        style={{ backgroundImage: `url(${article.image.url})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60" />
        <div className="flex justify-between">
          <p className="text-gray-50 text-sm">{article.author}</p>
          <p className="italic text-white text-sm">
            {article.pubDate.toLocaleDateString()}
          </p>
        </div>
        <h2 className="text-xl md:text-2xl text-gray-50 relative z-10">
          {article.title}
        </h2>
      </div>
    </a>
  </div>
);
