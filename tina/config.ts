import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "not-configured",
  token: process.env.TINA_TOKEN || "not-configured",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "img/imoveis",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "imovel",
        label: "Imóveis",
        path: "src/content/imoveis",
        format: "md",
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return (values?.nome || "imovel")
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "nome",
            label: "Nome do Empreendimento",
            required: true,
          },
          {
            type: "string",
            name: "badge",
            label: "Badge (etiqueta)",
            description: "Ex: Lançamento, Pronto, Em obras",
            options: ["Lançamento", "Pronto para morar", "Em obras", "Últimas unidades"],
          },
          {
            type: "image",
            name: "imagem",
            label: "Foto da Fachada",
            required: true,
          },
          {
            type: "string",
            name: "localizacao",
            label: "Localização",
            description: "Ex: Pinheiros, Zona Oeste · São Paulo",
            required: true,
          },
          {
            type: "string",
            name: "feature1",
            label: "Característica 1 (Dormitórios)",
            description: "Ex: 1 a 2 dorms",
          },
          {
            type: "string",
            name: "feature2",
            label: "Característica 2 (Metragem/Varanda)",
            description: "Ex: 24m² ou Varanda",
          },
          {
            type: "string",
            name: "feature3",
            label: "Característica 3 (Proximidade)",
            description: "Ex: 5 min do Metrô Fradique Coutinho",
          },
          {
            type: "string",
            name: "destaque",
            label: "Destaque",
            description: "Ex: Condomínio clube · Rooftop com churrasqueira",
          },
          {
            type: "string",
            name: "entrega",
            label: "Previsão de Entrega",
            description: "Ex: Maio de 2028 (deixe vazio se não tiver)",
          },
          {
            type: "string",
            name: "preco",
            label: "Preço",
            description: "Ex: A partir de R$ 336.641 ou Consulte condições",
            required: true,
          },
          {
            type: "string",
            name: "linkWhatsApp",
            label: "Link do WhatsApp",
            description: "URL completa do wa.me com a mensagem",
            required: true,
          },
          {
            type: "string",
            name: "linkPagina",
            label: "Link da Página do Empreendimento",
            description: "URL externa (ex: mundoapto.com.br/...)",
          },
        ],
      },
    ],
  },
});
