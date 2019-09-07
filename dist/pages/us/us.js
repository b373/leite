var sliderWidth = 96;
Page({

  data: {
    imgUrls: [
      {
        url: 'https://s2.ax1x.com/2019/09/02/nP9vYF.jpg'
      }, {
        url: 'https://s2.ax1x.com/2019/09/02/nP9HLq.jpg'
      }, {
        url: 'https://s2.ax1x.com/2019/09/02/nP97yn.jpg'
      }, {
        url: 'https://s2.ax1x.com/2019/09/02/nP9LwV.jpg'
      }, {
        url: 'https://s2.ax1x.com/2019/09/02/nP9qe0.jpg'
      }, {
        url: 'https://s2.ax1x.com/2019/09/02/nP9OoT.jpg'
      }, {
        url: 'https://s2.ax1x.com/2019/09/02/nP9jFU.jpg'
      }, {
        url: 'https://s2.ax1x.com/2019/09/02/nP9xW4.jpg'
      }, {
        url: 'https://s2.ax1x.com/2019/09/02/nPCSSJ.jpg'
      }, {
        url: 'https://s2.ax1x.com/2019/09/02/nPCpl9.jpg'
      }, {
        url: 'https://s2.ax1x.com/2019/09/02/nPC9yR.jpg'
      }
    ],
    indicatorDots: true, //小点
    indicatorColor: "white",//指示点颜色
    activeColor: "coral",//当前选中的指示点颜色
    autoplay: true, //是否自动轮播
    interval: 3000, //间隔时间
    duration: 1000, //滑动时间
    
    tabs: ["商标证书", "检测报告", "项目案例"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
},
  onChange(e) {
    console.log('onChange', e)
    this.setData({
      current: e.detail.key,
    })
   
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  

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

  },
  gotoPage:function (event){
    wx.navigateTo({
      url:"../product/prodect"
      
    })
    
  },
  tel: function () {
    wx.makePhoneCall({
      phoneNumber: '158XXXXXXXX',
    })
  }
})


