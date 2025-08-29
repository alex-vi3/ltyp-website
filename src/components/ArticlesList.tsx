import React, { useState } from "react";
import { CardArticle } from "./CardArticle";
import type { CollectionEntry } from "astro:content";

const optionsTags = [
  { label: "Tous", value: "" },
  { label: "Compétitions", value: "competitions" },
  { label: "Entrainements", value: "entrainements" },
  { label: "Événements", value: "evenements" },
  { label: "Divers", value: "divers" },
];

export const ArticlesList: React.FC<{
  articles: Array<CollectionEntry<"actualites">>;
}> = ({ articles }) => {
  const [selectedTag, setSelectedTag] = useState("");

  const filteredArticles = selectedTag
    ? articles.filter((article) => article.data.tags?.includes(selectedTag))
    : articles;

  return (
    <div className="flex flex-col gap-6 px-4 lg:p-20 py-10">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
        <h2 className="text-red-700">Derniers articles</h2>
        <form>
          <label htmlFor="tags" className="text-md text-gray-800 font-bold">
            Filtre
          </label>
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            id="tags"
            className="block w-80 bg-white border border-gray-400 hover:border-gray-500 pl-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            {optionsTags.map((tag) => (
              <option key={tag.value} value={tag.value}>
                {tag.label}
              </option>
            ))}
          </select>
        </form>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredArticles.map((article) => (
            <CardArticle
              article={article.data}
              id={article.id}
              key={article.id}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-100 justify-center p-20">
          <p>Aucun article ne correspond à la recherche</p>
        </div>
      )}
    </div>
  );
};
