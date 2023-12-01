import { defineUserConfig,defaultTheme  } from 'vuepress'

export default defineUserConfig({
  charset: 'utf-8',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    // 默认主题配置
    
    navbar: [
      {
        text: '首页',
        link: '/',
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
    logo: '/images/logo.jpeg',
  }),
})
