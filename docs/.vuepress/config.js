module.exports = {
  base: "/",
  title: "我的个人网站",
  description: "使用VuePress构建的个人网站",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about/' },
      { text: '项目', link: '/projects/' },
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
          title: '我的项目',
          children: ['/projects/', '/projects/project1', '/projects/project2', '/projects/project3']
        }
      ]
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
}