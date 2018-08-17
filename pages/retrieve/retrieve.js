
// pages/new/new.js
Page({
  data:{
    list:[]
  },
  onLoad:function(){
    
  },
  onReady:function(){
    // 页面渲染完成

  },
  onShow:function(){
    var that = this;
    var arr = [];
    var tempString;
    var wholeString;
    var length;
    var fname, lname, age, color;
    wx.request({
      url: 'https://tankofbooks.com/tutorial/retrieve.php',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'charset': 'utf-8'
      },
      method: "POST",
      data: {
      },
      success: function (res) {
        wholeString = res.data + "";
        length = wholeString.length;
        while (length > 0) {
          var position = wholeString.indexOf(">");
          tempString = wholeString.substring(0, position);

          var position2 = tempString.indexOf("\"\"");
          fname = tempString.substring(1, position2);
          tempString = tempString.substring(position2 + 2, tempString.length);

          position2 = tempString.indexOf("\"\"");
          lname = tempString.substring(0, position2);
          tempString = tempString.substring(position2 + 2, tempString.length);

          position2 = tempString.indexOf("\"\"");
          age = tempString.substring(0, position2);
          tempString = tempString.substring(position2 + 2,tempString.length);

          position2 = tempString.indexOf("\"");
          color = tempString.substring(0, position2);
          tempString = tempString.substring(position2 + 2,tempString.length);

          wholeString = wholeString.substring(position + 1, length);
          length = wholeString.length;

          arr.push({ fname: fname, lname: lname, age: age, color: color });
        }
        console.log(arr)
        that.setData({
          "list": arr
        });
      },
      fail: function () {
        wx.showToast({
          title: 'Error in connection',
          icon: 'loading',
          duration: 1500
        })
      }
    })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})