// pages/tomato/tomato.js
Page({

  /**
   * 页面的初始数据
   */
  timer: null,
  data: {
    defaultSecond: 3,
    time: "",
    timerStatus: 'stop',
    confirmVisible: false,
    againButtonVisible: false,
    finishConfirmVisible: false
  },
  onShow: function() {
    this.startTimer()
  },
  startTimer() {
    this.setData({ timerStatus: 'start' })
    this.changeTime()
    this.timer = setInterval(() => {
      if (this.data.defaultSecond === 0){
        this.setData({ againButtonVisible: true })
        this.setData({ finishConfirmVisible: true })
        return this.clearTimer()
      }
      this.data.defaultSecond = this.data.defaultSecond - 1
      this.changeTime()
    }, 1000)
  },
  againTimer(){
    this.data.detailSecond = 3
    this.setData({ againButtonVisible: false })
    this.startTimer
  },
  clearTimer() {
    clearInterval(this.timer)
    this.timer = null
    this.setData({
      timerStatus: 'stop'
    })
  },
  changeTime() {
    let m = Math.floor(this.data.defaultSecond/60)
    let s = Math.floor(this.data.defaultSecond%60)
    if (s === 0) {
      s = "00"
    }
    if ((s + "").length === 1) {
      s = "0" + s
    }
    if ((m + "").length === 1) {
      m = "0" + m
    }
    this.setData({
      time: `${m}:${s}`
    })
  },
  confirmAbadon(event) {
    let content = event.detail
  },
  confirmFinish(event) {
    let content = event.detail
  },
  confirmCancel() {
    this.setData({
      finishConfirmVisible: false
    })
  },
  showConfirm(){
    this.setData({ confirmVisible: true })
    this.clearTimer()
  },
  hideConfirm(){
    this.setData({ confirmVisible: false})
    this.startTimer()
  },
  onHide: function() {

  },
  onUnload: function() {

  }
})