// pages/publish/publish.js
Page({
  data:{

  },

  tapBuy:function(event){
    wx.navigateTo({
      url: './buy/buy'
    })
  },
  tapSell:function(event){
    wx.navigateTo({
      url: './sell/sell'
    })
  },
  tapRent:function(event){
    wx.navigateTo({
      url: './rent/rent'
    })
  },
  tapLease:function(event){
    wx.navigateTo({
      url: './lease/lease'
    })
  },
  tapRecruit:function(event){
    wx.navigateTo({
      url: './recruit/recruit'
    })
  },
  tapApply:function(event){
    wx.navigateTo({
      url: './apply/apply'
    })
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})