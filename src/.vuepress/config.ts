import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";

//插件
import { copyrightPlugin } from "vuepress-plugin-copyright2";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";
import { readingTimePlugin } from "vuepress-plugin-reading-time2";
import { seoPlugin } from "vuepress-plugin-seo2";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { lightgalleryPlugin } from "vuepress-plugin-lightgallery";
import { feedPlugin } from "vuepress-plugin-feed2";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",

  // theme,
  theme: hopeTheme({
    fullscreen: true, //全屏
    sidebar: {
      // "路径": "structure", //通过文件结构自动生成侧边栏
      "/demo/": "structure",
      "/demo copy/": "structure",
      "/guide/": "structure",
      "/guide copy/": "structure",
      "/guide2/": "structure",
      "/demo2/": "structure",
    },
    navbar,
  }),

  plugins: [
    searchProPlugin({
      indexContent :true,
      autoSuggestions:true,
    }),
    feedPlugin,
    lightgalleryPlugin,
    sitemapPlugin,
    seoPlugin,
    readingTimePlugin,
    photoSwipePlugin,
    copyrightPlugin({
      // 插件选项
      global :true,
      triggerLength : 100,
      maxLength : 500,
    }),
    mdEnhancePlugin({
      // 插件选项
      gfm :true,
      container :true,
      vPre :true,
      breaks:true,
      linkify:true,
      tabs:true,
      codetabs:true,
      align:true,
      attrs:true,
      sup :true,
      sub: true,
      footnote :true,
      mark:true,
      figure:true,
      imgLazyload:true,
      imgMark:true,
      imgSize:true,
      obsidianImgSize:true,
      tasklist:true,
      include:true,
      katex:true,
      mathjax:true,
      card:true,
      chart:true,
      echarts:true,
      flowchart :true,
      mermaid:true,
      vuePlayground:true,

    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});