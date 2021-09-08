export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6135e0165389a93203cb7f3e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-8mkkgzhp",
                  apiId: "ec9169d1-85cc-45fd-bd5b-b4accd43e129",
                },
                {
                  buildHookId: "613900253b4ef20b152085a6",
                  title: "Blog Website",
                  name: "digitara-gatsby-blog",
                  apiId: "c3bbe971-7bcf-41e1-8f33-5d30a8b25e07",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/CodeDeyya/blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://digitara-gatsby-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["article"],
      },
      layout: { width: "medium" },
    },
  ],
};
