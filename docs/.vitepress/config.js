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
      {
        text: "基础",
        items: [
          { text: "图标选择", link: "/components/chooseIcon" },
          { text: "城市选择", link: "/components/chooseCity" },
          { text: "趋势标记", link: "/components/trend" },

          { text: "日期选择", link: "/components/chooseDate" },
        ],
      },
    ],
  },
  base: "/",
};
