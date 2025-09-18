// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Ton Client ID Tina Cloud
  token: process.env.TINA_TOKEN,
  // Ton Read-only Token Tina Cloud
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  // Branche Git
  build: {
    outputFolder: "admin",
    // Dossier où Tina génère ses fichiers
    publicFolder: "public"
    // Dossier public pour les médias
  },
  media: {
    tina: {
      mediaRoot: "images",
      // dossier où les images seront stockées
      publicFolder: "public"
      // dossier public visible par le site
    }
  },
  schema: {
    collections: [
      {
        name: "actualites",
        label: "Actualit\xE9s",
        path: "src/actualites",
        // Dossier où sont stockés les fichiers .md
        format: "md",
        // Format Markdown
        fields: [
          { name: "title", label: "Titre", type: "string" },
          { name: "pubDate", label: "Date de publication", type: "datetime" },
          { name: "author", label: "Auteur", type: "string" },
          {
            name: "image",
            label: "Image",
            type: "object",
            fields: [
              { name: "url", label: "URL de l'image", type: "image" },
              { name: "alt", label: "Texte alternatif", type: "string" }
            ]
          },
          {
            name: "tags",
            label: "Tags",
            type: "string",
            options: ["divers", "competitions", "entrainements", "evenements"]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
