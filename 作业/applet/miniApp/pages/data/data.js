// pages/my/my.js
Page({
  data: {
    birthday: 0,
    year: 0,
    month: 0,
    distance: 0,
    end: '',
    percent: 0
  },
  /**
   * 页面的初始数据
   */
  data: {

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
  changeBirthday(e) {
    let value = e.detail.value.split('-');
    let distance = this.getDistanceMonth(e.detail.value, this.data.end);

    this.setData({
      birthday: e.detail.value,
      year: value[0],
      month: value[1],
      distance,
      percent: (distance / 9).toFixed(0)
    })
  },
  getDistanceMonth(pre, now) {
    let preArr = pre.split('-'),
      nowArr = now.split('-');
    return Number((nowArr[0] - preArr[0]) * 12) + Number(nowArr[1] - preArr[1])
  },

  goDate() {
    console.log('go date');
    wx.switchTab({
      url: '/pages/date/index', complete: (res) => {
        console.log('res...', res);
      }
    });
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

  },
  clear() {
    let now = new Date();
    this.setData({
      birthday: 0,
      month: String(now.getMonth() + 1).padStart(2, '0'),
      year: now.getFullYear(),
      distance: 0
    })
  },
})