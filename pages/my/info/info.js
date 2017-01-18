// pages/my/info/info.js
var util = require('../../../utils/util.js')
var app = getApp()
Page({
  //页面的初始数据
  data: {
    userInfo: {},
    account: {
      number: '18508446612',
      mobile: '18508446612',
      gender: 1,
      region: '火星',
      sign:'设置个性签名'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: ''
    })
  },

  tapAvatar: function(event) {
    // 弹出相册来选择，并修改
    wx.navigateTo({
      // url: './info/info'
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