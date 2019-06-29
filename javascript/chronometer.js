function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  this.intervalid = setInterval(() => {
    this.currentTime++;
    this.setTime();
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  if (this.currentTime === 0) {
    return 0;
  } else {
    return parseInt(this.currentTime / 60);
  }
};

Chronometer.prototype.setSeconds = function() {
  if (this.currentTime === 0) {
    return 0;
  } else {
    return parseInt(this.currentTime % 60);
  }
};

Chronometer.prototype.twoDigitsNumber = function(timeInOneDigit) {
  if (timeInOneDigit > 9) {
    return timeInOneDigit.toString();
  } else {
    return `0${timeInOneDigit.toString()}`;
  }
};

Chronometer.prototype.setTime = function () {
  let minutes = this.twoDigitsNumber(this.setMinutes());
  let seconds = this.twoDigitsNumber(this.setSeconds());
  return [minutes, seconds];
};

Chronometer.prototype.setMilliseconds = function() {};

Chronometer.prototype.stopClick = () => {
  clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function() {};

Chronometer.prototype.splitClick = function() {};
