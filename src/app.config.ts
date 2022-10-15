export default {
  pages: [
    'pages/index/index',
    'pages/calculate/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "color": "#000000",
    "selectedColor": "#3cc51f",
    "backgroundColor": "#ffffff",
    "list": [{
      "pagePath": "pages/index/index",
      "iconPath": "images/icon_nav_search.png",
      "selectedIconPath": "images/icon_nav_search.png",
      "text": "搜索"
    }, {
      "pagePath": "pages/calculate/index",
      "iconPath": "images/icon_nav_search.png",
      "selectedIconPath": "images/icon_nav_search.png",
      "text": "计算"
    }]
  },
}
