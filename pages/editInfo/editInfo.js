// pages/editInfo/editInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '../../images/addImg.png'
  },
  uploadImg: function(e) {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths;
        //   console.log(tempFilePaths);
        that.setData({
            imgUrl: tempFilePaths
        })
        wx.showToast({
          title: '上传成功',
          icon: 'success',
          duration: 2000
        })
      }
  }),
    wx.saveImageToPhotosAlbum({
      success(res) {
      }
    }),
    wx.getSetting({
      success(res) {
          if (!res.authSetting['scope.writePhotosAlbum']) {
              wx.authorize({
                  scope: 'scope.record',
                  success() {
                      // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                      wx.saveImageToPhotosAlbum();
                  }
              })
          }
      }
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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