class Page {
  constructor(){
    this.name = ''
    this.id = Page.id++
    this.tables = []
    this.pies = []
    this.lines = []
  }
}
Page.id = 0

export default Page