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
  getSeconds() {}
  twoDigitsNumber() {}
  stopClick() {}
  resetClick() {}
  splitClick() {}
}
