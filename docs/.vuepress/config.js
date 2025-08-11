module.exports = {
  base: "/",
  title: "我的个人网站",
  description: "使用VuePress构建的个人网站",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about/' },
      { text: '项目经验', link: '/projects/' },
    ],
    sidebar: {
      '/about/': [
        {
          title: '关于我',
          children: ['/about/', '/about/contact']
        }
      ],
      '/projects/': [
        {
          title: '项目经验',
          children: ['/projects/']
        }
      ]
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
}