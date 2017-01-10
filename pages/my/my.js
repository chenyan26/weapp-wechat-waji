// pages/my/my.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: ''
    })
  },

  tapUser: function(event) {
    wx.navigateTo({
      url: './user/user'
    })
  },
  tapAlbum: function(event) {
    wx.navigateTo({
      url: './album/album'
    })
  },
  tapQrcode: function(event) {
    wx.navigateTo({
      url: './qrcode/qrcode'
    })
  },
  tapFavour: function(event) {
    wx.navigateTo({
      url: './favour/favour'
    })
  },
  tapAbout: function(event) {
    wx.navigateTo({
      url: './about/about'
    })
  },
  tapSetting: function(event) {
    wx.navigateTo({
      url: './setting/setting'
    })
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})