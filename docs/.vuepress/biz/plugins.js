import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from "@vuepress/plugin-search";
export const plugins=[
    registerComponentsPlugin({
      // 配置项
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ]