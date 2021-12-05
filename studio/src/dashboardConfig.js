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
                    "61acbd4f09984aeec53f579a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-idi2m1k7",
                  apiId: "06bde117-fcb3-47ca-b2c3-ccd359baf987",
                },
                {
                  buildHookId: "61acbd4fcbaf513cad18d4cc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-p5t143z1",
                  apiId: "56e3636a-3816-40fa-bd52-34a97f22aad2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Polkapetunian/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-p5t143z1.netlify.app",
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
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
