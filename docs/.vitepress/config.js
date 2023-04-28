import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "云朵数屏文档",
  description: "使用图形化界面通过拖拉拽轻松搭建出专业的数据可视化应用",
  head: [
    ['script', {}, 'var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?51231810e1aa3727ba0e6b46fb74cddb";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();']
  ],
  themeConfig: {
    localSearch: true,
    outlineTitle: "当前页面内容",
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍指引', link: '/guide/guide' },
      { text: '编辑器手册', link: '/editor/' },
      { text: '插件开发', link: '/developer/started' },
      { text: 'API', link: '/api/api' },
      { text: '关于', link: '/info' }

    ],

    sidebar: {
      '/guide': [
        {
          text: '产品介绍', link: '/guide/about'
        },
        {
          text: '快速开始', link: '/guide/guide'
        }
      ],
      '/editor/': [
        {
          text: '界面说明', link: '/editor/'
        },
        {
          text: '项目编辑',
          items: [
            { text: '创建项目', link: '/editor/new' },
            {
              text: '编辑项目', link: '/editor/edit/stage', items: [
                { text: '舞台设置', link: '/editor/edit/stage' },
                { text: '页面设置', link: '/editor/edit/pages' },
                { text: '元素维护', link: '/editor/edit/sprite' },
                { text: '内置组件', link: '/editor/edit/components' },
                { text: '数据设置', link: '/editor/edit/data' },
                { text: '事件动作', link: '/editor/edit/action' },
                { text: '辅助设计', link: '/editor/edit/assist' },
                { text: '快捷操作', link: '/editor/edit/fast' },
              ]
            },
            { text: '运行项目', link: '/editor/release' }
          ]
        },
        {
          text: '数据管理', link: '/editor/data'
        },
        {
          text: '插件管理', link: '/editor/plugin'
        },
        {
          text: '云端同步', link: '/editor/user'
        },
      ],
      '/developer/': [
        {
          text: '插件开发',
          items: [
            { text: '准备事项', link: '/developer/started' },
            { text: '开发', link: '/developer/development' },
            { text: '应用', link: '/developer/release' },
            { text: '深入', link: '/developer/depth' }
          ]
        }
      ],
      '/api/': [
        {
          text: '全局 api', link: '/api/api',
        },
        {
          text: 'App实例', link: '/api/app',
          items: [
            { text: 'data', link: '/api/app_data' ,items:[
              { text: 'mData', link: '/api/app_data_m' },
              { text: 'gData', link: '/api/app_data_g' },
              { text: 'aData', link: '/api/app_data_a' },
              { text: 'rData', link: '/api/app_data_r' },
              { text: 'pData', link: '/api/app_data_p' },
            ]},
            { text: 'controller', link: '/api/app_controller' },
            { text: 'component', link: '/api/app_component' },
            { text: 'helper', link: '/api/app_helper' }
          ]
        },
        {
          text: 'remote', link: '/api/remote'
        },
        {
          text: '常量类型', link: '/api/const'
        }
      ]
    },

    socialLinks: [
      { icon: { svg: '<svg  role="img" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9160" width="512" height="512"><path d="M0 230.76C0 121.98 0 67.589 33.796 33.797 67.588 0 121.979 0 230.76 0s163.173 0 196.965 33.796c33.795 33.792 33.795 88.183 33.795 196.965s0 163.173-33.795 196.965c-33.792 33.795-88.183 33.795-196.965 33.795s-163.173 0-196.965-33.795C0 393.934 0 339.543 0 230.76z m562.479 562.48c0-108.783 0-163.174 33.795-196.966 33.792-33.795 88.183-33.795 196.965-33.795s163.173 0 196.965 33.795C1024 630.066 1024 684.457 1024 793.24s0 163.173-33.796 196.965C956.412 1024 902.021 1024 793.24 1024s-163.173 0-196.965-33.796c-33.795-33.792-33.795-88.183-33.795-196.965z" fill="#A6A6A6" p-id="9161"></path><path d="M0 793.24c0-108.783 0-163.174 33.796-196.966 33.792-33.795 88.183-33.795 196.965-33.795s163.173 0 196.965 33.795c33.795 33.792 33.795 88.183 33.795 196.965s0 163.173-33.795 196.965C393.934 1024 339.543 1024 230.76 1024s-163.173 0-196.965-33.796C0 956.412 0 902.021 0 793.24z" fill="#6A6A6A" p-id="9162"></path><path d="M562.479 230.76a230.76 230.76 0 1 0 461.521 0 230.76 230.76 0 1 0-461.521 0z" fill="#A0D900" p-id="9163"></path></svg>' }, link: 'https://editor.letdata.net' }
    ]
  }
})
