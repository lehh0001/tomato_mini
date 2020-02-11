Page({
  data: {
    tab: 'tomato',
    lists: {
      "本周四": [{
          time: "14:00",
          text: "安迪哦多么快没了",
          id: 1
        },
        {
          time: "14:00",
          text: "安迪哦多么快没了",
          id: 2
        },
      ],
      "本周五": [{
          time: "14:00",
          text: "安迪哦多么快没了",
          id: 1
        },
        {
          time: "14:00",
          text: "安迪哦多么快没了",
          id: 2
        },
      ],
      "本周六": [{
          time: "14:00",
          text: "安迪哦多么快没了",
          id: 1
        },
        {
          time: "14:00",
          text: "安迪哦多么快没了",
          id: 2
        },
      ],
      "本周一": [{
        time: "14:00",
        text: "安迪哦多么快没了",
        id: 1
      },
      {
        time: "14:00",
        text: "安迪哦多么快没了",
        id: 2
      },
      ],
      "本周二": [{
        time: "14:00",
        text: "安迪哦多么快没了",
        id: 1
      },
      {
        time: "14:00",
        text: "安迪哦多么快没了",
        id: 2
      },
      ],
      "本周三": [{
        time: "14:00",
        text: "安迪哦多么快没了",
        id: 1
      },
      {
        time: "14:00",
        text: "安迪哦多么快没了",
        id: 2
      },
      ]

    }
  },
  onShow: function() {

  },
  changeTab(event) {
    let name = event.currentTarget.dataset.name
    this.setData({
      tab: name
    })
  }
})