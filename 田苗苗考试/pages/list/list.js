// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        everyData:"看一场私人电影"
      },
      {
        everyData:"玩一次保龄球"
      },
      {
        everyData:"玩一次射箭"
      },
    {
      everyData:"练出几首自己的经典曲目"
    },
    {
      everyData:"好好"
    },
    {
      everyData:"在大庭广众之下演讲一次"
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showtip:function(){
    wx.showModal({
      title: '',
      content: '将此目标标记为已完成',
      confirmText:'确定',
      cancelText:'取消',
      success:function(res){
        if(res.confirm){
          console.log("标记成功")
        }
        if(res.cancel){
          console.log("取消标记")
        }
      }
    })
  },
  addclick() {
    console.log('添加')
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