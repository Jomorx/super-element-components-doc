/**
 * @type {import('vitepress').UserConfig}
 */
export default {
  title: "Super Element Components",
  description: "Just playing around.",
  themeConfig: {
    sidebar: [
      {
        text: "基础",
        items: [
          { text: "介绍", link: "/guide/introduction" },
          { text: "安装", link: "/guide/installation" },
          { text: "快速开始", link: "/guide/getting-started" },
        ],
      },
    ],
  },
};
