const { withBase } = require("vitepress")
import nav from './nav'
import sidebar from './sidebar'
import baseConfig from 'vitepress-theme-you/config'
const config = {
  extends: baseConfig,
  title: 'GIS cesium',
  description: 'GIS cesium',
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' }],
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/path/to/icon.svg' }], for svg
  ],
  themeConfig: {
    // 展示搜索框
    repo: 'https://github.com/Mhist/cesium',
    logo: '/public/favicon.ico',
    iconClass: 'i-ri-layout-3-line',
    editLinks: true,
    editLinkText: '帮助改善此页面',
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '帮助改善此页面'
    },
    lastUpdated: '上次更新',
      
    nav: nav,
    // 侧边栏
    sidebar: {
      // '/': sidebar,
    },
    algolia: {
      appId:'OD70WA28ON',
      apiKey: '2667e16918c692efed2ea1c6788d0a26',
      indexName: 'viteyadong'
    },
  },

  markdown:{
    lineNumbers:false
  }
}
export default config



