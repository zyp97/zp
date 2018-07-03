//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    movies: [
      { url: '../../images/1.gif' },
      { url: '../../images/2.gif' },
    ],
    moblie:'15712015370',

  },
  onLoad: function () {
      wx.request({
        url:app.url+'textlogin',
        data:{PHPSESSID:wx.getStorage({
          key: '',
          success: function(res) {
            console.log(res.data)
          },
        })
        }
      })
  },
  callme:function(){
    wx.makePhoneCall({
      phoneNumber: '15712015370',
    })
  },


})
