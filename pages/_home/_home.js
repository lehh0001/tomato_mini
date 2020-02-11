// pages/_home/_home.js
Page({
  data: {
    lists: [{
        id: 1,
        text: "我今天干了什么，明天干什么，后天干了什么",
        finished: true
      },
      {
        id: 2,
        text: "我今天干了什么，明天干什么，后天干了什么",
        finished: true
      },
      {
        id: 3,
        text: "我今天干了什么，明天看书，后天干了什么",
        finished: false
      },
      {
        id: 4,
        text: "我今天干了什么，明天干什么，后天干了什么",
        finished: false
      },
      {
        id: 5,
        text: "我今天干了什么，明天干什么，后天干了什么",
        finished: false
      }
    ],
    visibleConfirm: false
  },
  confirm(event) {
  },
  confirmCreate(event) {
    let content = event.detail
    if (content) {
      let todo = [{
        id: this.data.lists.slength + 1,
        text: content,
        finished: false
      }]
      this.data.lists = todo.concat(this.data.lists)
      this.setData({
        lists: this.data.lists
      })
      this.hideConfirm()
    }
  }, 
  destroyTodo(event){
    console.log(event)
    let index = event.currentTarget.dataset.index
    this.data.lists[index].finished = true
    this.setData({ lists: this.data.lists })
  },
  hideConfirm(event) {
    this.setData({
      visibleConfirm: false
    })
  },
  showConfirm() {
    this.setData({
      visibleConfirm: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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