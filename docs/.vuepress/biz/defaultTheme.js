export const defaultThemeData = {
  navbar: [
    {
      text: "首页",
      link: "/",
    },
    {
      text: "javascript",
      link: "/src/javascript/closure",
    },
    {
      text: "vue3(尚硅谷)",
      link: "/src/vue/vue3",
    },
    {
      text: "React(尚硅谷)",
      link: "/src/react",
    },
    {
      text: "webpack(尚硅谷)",
      children: [
        {
          text: "基础",
          link: "/src/webpack/base/",
        },
        {
          text: "高级",
          link: "/src/webpack/senior/",
        },
        {
          text: "项目",
          link: "/src/webpack/project/",
        },
        {
          text: "原理",
          link: "/src/webpack/origin/",
        },
      ],
    },
  ],
  sidebar: {
    "/src/vue/vue3": [
      {
        text: "vue3",
        children: ["/src/vue/vue3.md"],
      },
    ],
    "/src/react": [
      {
        text: "React",
        children: ["/src/react/README.md"],
      },
    ],
    "/src/javascript/closure": [
      {
        text: "JavaScript",
        children: ["/src/javascript/closure.md"],
      },
    ],
    "/src/webpack/base/": [
      {
        text: "基础配置",
        children: [
          "/src/webpack/base/README.md",
          "/src/webpack/base/base.md",
          "/src/webpack/base/config.md",
          "/src/webpack/base/development.md",
          "/src/webpack/base/css.md",
          "/src/webpack/base/image.md",
          "/src/webpack/base/output.md",
          "/src/webpack/base/clean.md",
          "/src/webpack/base/font.md",
          "/src/webpack/base/other.md",
          "/src/webpack/base/javascript.md",
          "/src/webpack/base/html.md",
          "/src/webpack/base/server.md",
          "/src/webpack/base/production.md",
          "/src/webpack/base/optimizeCss.md",
          "/src/webpack/base/minifyHtml.md",
          "/src/webpack/base/summary.md",
        ],
      },
    ],
    "/src/webpack/senior/": [
      {
        text: "高级优化",
        children: [
          "/src/webpack/senior/README.md",
          "/src/webpack/senior/enhanceExperience.md",
          "/src/webpack/senior/liftingSpeed.md",
          "/src/webpack/senior/reduceVolume.md",
          "/src/webpack/senior/optimizePerformance.md",
          "/src/webpack/senior/summary.md",
        ],
      },
    ],
    "/src/webpack/project/": [
      {
        text: "项目配置",
        children: [
          "/src/webpack/project/README.md",
          "/src/webpack/project/react-cli.md",
          "/src/webpack/project/vue-cli.md",
          "/src/webpack/project/summary.md",
        ],
      },
    ],
    "/src/webpack/origin/": [
      {
        text: "原理分析",
        children: [
          "/src/webpack/origin/README.md",
          "/src/webpack/origin/loader.md",
          "/src/webpack/origin/plugin.md",
          "/src/webpack/origin/summary.md",
        ],
      },
    ],
  },
  locales: {
    "/": {
      selectLanguageName: "English",
    },
    "/zh/": {
      selectLanguageName: "简体中文",
    },
  },
  logo: "/images/logo.png",
};
