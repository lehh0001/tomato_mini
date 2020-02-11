// pages/test/test.js
Page({
  data: {
    message: '我是第一条信息',
    number: 1,
    condition: true,
    arr: [{
        id: 1,
        text: 1
      },
      {
        id: 2,
        text: 2
      },
      {
        id: 3,
        text: 3
      }
    ],
    propValue: 1,
    str: "我是一条信息",
    arr: [1, 2, 3, 4],
    obj: {
      id: 1,
      text: "我是信息1"
    },
    xx: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  changeColor(){
    this.setData({
      xx: !this.data.xx
    })
  },
  pushItem() {
    let last = this.data.arr[this.data.arr.length - 1] + 1
    let newArr = [last]
    this.data.arr = newArr.concat(this.data.arr)
    this.setData({
      arr: this.data.arr
    })
  },
  reverseStr() {
    this.setData({
      str: this.data.str.split('').reverse().join('')
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // this.setData({
    //   tr: 2121212
    // })
    // console.log(this.data.str)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})