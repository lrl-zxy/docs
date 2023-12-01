import { defineUserConfig,defaultTheme  } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
export default defineUserConfig({
  charset: 'utf-8',
  title: '欢迎您！',
  description: '这是我的第一个 VuePress 站点',
  head:[
    [
      'link',{rel:'icon',href:'./images/logo.png'}
    ]
  ],
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  theme: defaultTheme({
    // 默认主题配置
    
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: 'vue',
        children: [
          {
            text: 'vue3',
            link: '/src/vue/vue3.html',
          },
        ],
      },
    ],
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
    logo: '/images/logo.png',
  }),
})
