import { defineUserConfig, defaultTheme } from "vuepress";
import { defaultThemeData } from './biz/defaultTheme.js'
import { plugins } from './biz/plugins.js'
export default defineUserConfig({
  charset: "utf-8",
  title: "海贼王",
  description: "个人笔记",
  head: [["link", { rel: "icon", href: "./images/logo.png" }]],
  plugins: plugins,
  theme: defaultTheme(defaultThemeData),
});
