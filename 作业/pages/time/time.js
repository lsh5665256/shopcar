// pages/time/time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    index: "",
    date: '2016-09-01',
    time: '12:01',
    year:0,
    month:0,
    distance:0,
    end: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindDateChange: function (e) {
    console.log(e.detail.value)
    let value = e.detail.value.split("-")
    let distance = this.getDistanceMonth(e.detail.value,this.data.end)
    console.log(distance,"9999")
    this.setData({
      date: e.detail.value,
      year: value[0],
      month: value[1],
      distance
    })
  },
  getDistanceMonth(pre, now) {
    let preArr = pre.split('-'),
      nowArr = now.split('-');
      console.log(preArr,"******",nowArr)
    console.log(Number(nowArr[0] - preArr[0])*12)
    console.log(Number(nowArr[1] - preArr[1]),"9999")

    return Number((nowArr[0] - preArr[0]) * 12) + Number(nowArr[1] - preArr[1])
  },
  toMy(){
    wx.navigateTo({url:"/pages/my/my"})
  },
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
    let now = new Date();
    this.setData({
      end: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
    })
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