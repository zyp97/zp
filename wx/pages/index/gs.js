// pages/index/gs.js
Page({
  onLoad: function () {
    wx.request({
      url: app.url + 'textlogin',
      data: {
        PHPSESSID: wx.getStorage({
          key: '',
          success: function (res) {
            console.log(res.data)
          },
        })
      }
    })
  },
  callme: function () {
    wx.makePhoneCall({
      phoneNumber: '15712015370',
    })
  },
})