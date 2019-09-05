App({
    onLaunch: function () {
        console.log('App Launch')
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
    globalData: {
        hasLogin: false
    },
    calling: function () {
        wx.makePhoneCall({
            phoneNumber: '15605292846' //仅为示例，并非真实的电话号码
        })
    }
});