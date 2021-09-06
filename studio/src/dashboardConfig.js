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
                  buildHookId: "6135e016fece25ed56f78636",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-8h915sgg",
                  apiId: "47282128-f8a0-45dd-ac3a-b060ad2fa1cc",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/CodeDeyya/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-8h915sgg.netlify.app",
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
