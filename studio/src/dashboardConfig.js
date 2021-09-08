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
                    "61390525ba287000b02c0c7a",
                  title: "Sanity Studio",
                  name: "digitara-studio-blog",
                  apiId: "5a037813-a200-4051-b954-96a2a8933bf3",
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
