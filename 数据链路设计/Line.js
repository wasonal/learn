class Line {
  constructor() {
    this.type = 'line'
    this.name = ''
    this.indicator = [] // 展示指标
    this.dimesion = [] // 展示维度
    this.sameDayRatio = true // 展示同比
    this.chainRatio = true // 展示环比
    this.filters = [] // 筛选维度
    this.location = { // 定位
      x: 0,
      y: 0
    }
  }
}