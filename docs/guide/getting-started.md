# 快速开始

本节将介绍如何在项目中使用 Super Element Components。


安装依赖

```bash
pnpm i @element-plus/icons@0.0.11 element-plus@2.1.11 super-element-components@1.0.4
```

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

> main.ts

```ts
import { createApp } from "vue";
import App from "./App.vue";
//引入elementPlus组件库
import ElementPlus from "element-plus";
// 引入elementPlus 样式
import "element-plus/dist/index.css";
// 完整引入SEP
import SEP from "super-element-components";
// 完整引入SEP样式
import "super-element-components/style.css";

const app = createApp(App);
app.use(ElementPlus);
app.use(SEP);
app.mount("#app");
```

## 按需导入

您需要使用额外的插件来导入要使用的组件。

> main.ts

```ts
import { createApp } from "vue";
import App from "./App.vue";
//引入elementPlus组件库
import Menu from "element-plus/menu";
// 引入elementPlus 样式
import "element-plus/dist/index.css";
// 按需引入menu组件
import menu from "super-element-components";
// 按需引入menu样式
import "super-element-components/menu/style.css";
//导入elementplus 图标
import * as Icons from "@element-plus/icons";

const app = createApp(App);
app.use(ElementPlus);
app.use(Menu);
app.mount("#app");
```

