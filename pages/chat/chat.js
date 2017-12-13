// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    friendsList:[]
  },
  changeTab: function(e) {
    var index = e.target.dataset.current;
    this.setData({
      currentTab:index
    })
  },
  swiperTab: function(e) {
    // console.log(e);
    this.setData({
      currentTab:e.detail.current
      
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5a23dbf382614c0dc1bebf04/getFriendsList/getFriendsList',
      success: (res) => {
        // console.log(response);
        this.setData({
          friendsList: res.data.data.friendsList
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})