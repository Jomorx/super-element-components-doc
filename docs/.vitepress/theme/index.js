import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import SEP from "super-element-components";
import "super-element-components/style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus);
    app.use(SEP);
  },
};
