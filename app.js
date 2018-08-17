//app.js
App({
  onLaunch: function () {
    wx.login({
      success: function (res) {
        
      }
    }); 
    //调用API从本地缓存中获取数据
    //var logs = wx.getStorageSync('logs') || []
    //logs.unshift(Date.now())
    //wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(!that.globalData.userInfo){

      //调用登录接口
      wx.login({
        success: function () { 
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo: null,
    code: '',
    list: [],
    grade: '',
    course: '',
    name: '',
    courses: [],
    courses1: [],
    courses2: [],
    student: '',
    product: [],
    openid: '',
    id: ''
  }
})