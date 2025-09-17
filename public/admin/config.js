window.CMS_MANUAL_INIT = true;

CMS.init({
  config: {
    backend: {
      name: "github",
      repo: "alex-vi3/ltyp-website",
      branch: "main",
      auth_type: "pkce",
      app_id: "Ov23li1TKtm3tuh8EvHg", // ⚠️ remplace par ton vrai Client ID GitHub
    },
    media_folder: "public/images/uploadsActualites",
    public_folder: "/images/uploadsActualites",
    collections: [
      {
        name: "actualites",
        label: "Actualités",
        files: [
          {
            file: "src/actualites",
            label: "Accueil",
            name: "home",
            fields: [
              { label: "Titre", name: "title", widget: "string" },
              {
                label: "Date de publication",
                name: "pubDate",
                widget: "datetime",
              },
              { label: "Auteur", name: "author", widget: "string" },
              {
                label: "Image",
                name: "image",
                widget: "object",
                fields: [
                  { label: "URL de l'image", name: "url", widget: "image" },
                  { label: "Texte alternatif", name: "alt", widget: "string" },
                ],
              },
              {
                label: "Tags",
                name: "tags",
                widget: "list",
                fields: [
                  { label: "Tag", name: "tag", widget: "string" },
                  { label: "Texte alternatif", name: "alt", widget: "string" },
                ],
              },
              { label: "Contenu", name: "body", widget: "markdown" },
            ],
          },
        ],
      },
    ],
  },
});
