//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    left: false ,
    right: false,
    activeIndex: 0
  },
  changeswiper: function(e) {
    var index = e.detail.current;
    if(index > this.data.activeIndex) {
      this.setData({
        left: true
      })
    } else if(index < this.data.activeIndex) {
      this.setData({
        right: true
      })
    }
    setTimeout(() => {
      this.setData({
        activeIndex: index,
        left:false,
        right:false
      })
    }, 1000);
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // wx.request({
    //   url: "https://www.easy-mock.com/mock/5a2b3948158e7b700327e702/getSwiList/swiList",
    //   success: (res) => {
    //     this.setData({
    //       // console.log(res);
    //       swiList: res.data.data.swiList
    //     })
    //   }
    // })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
