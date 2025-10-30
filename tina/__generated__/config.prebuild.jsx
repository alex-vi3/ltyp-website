// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "master",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "actualites",
        label: "Actualit\xE9s",
        path: "src/actualites",
        format: "md",
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
            name: "tag",
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
