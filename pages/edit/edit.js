// pages/edit/edit.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  insertSubmit: function (e) {
    if (e.detail.value.fname != '' && e.detail.value.lname != '' && e.detail.value.age != '' && e.detail.value.color != '') {
      wx.request({
        url: 'https://tankofbooks.com/tutorial/insert.php',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'charset': 'utf-8'
        },
        method: "POST",
        data: {
          fname: e.detail.value.fname,
          lname: e.detail.value.lname,
          age: e.detail.value.age,
          color: e.detail.value.color,
        },
        success: function (res) {
          wx.showToast({
            title: 'Inserted!',
            icon: 'success',
            duration: 1500
          })
        },
        fail: function () {
          wx.showToast({
            title: 'Error in connection',
            icon: 'loading',
            duration: 1500
          })
        }
      })
    } else {
      wx.showToast({
        title: 'Fill all in!',
        icon: 'loading',
        duration: 1500
      })
    }
  },
  deleteSubmit: function (e) {
    if (e.detail.value.fname != '' && e.detail.value.lname != '') {
      wx.request({
        url: 'https://tankofbooks.com/tutorial/delete.php',
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          'charset': 'utf-8'
        },
        method: "POST",
        data: {
          fname: e.detail.value.fname,
          lname: e.detail.value.lname
        },
        success: function (res) {
          wx.showToast({
            title: 'Deleted!',
            icon: 'success',
            duration: 1500
          })
        },
        fail: function () {
          wx.showToast({
            title: 'Error in connection',
            icon: 'loading',
            duration: 1500
          })
        }
      })
    } else {
      wx.showToast({
        title: 'Fill all in!',
        icon: 'loading',
        duration: 1500
      })
    }
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