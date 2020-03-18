class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => this.currentTime++, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }
  twoDigitsNumber(value) {
    return value < 10 ? `0${value}` : `${value}` //option 1
    //return value < 10 ? "0" + value.toString() : value.toString() //option 2
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {}
  splitClick() {}
}
