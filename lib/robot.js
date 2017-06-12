'use strict';

function Robot() {

  this.coordinates = [0, 0]
  this.bearing = 'north'

}

var directions = [ 'north', 'east', 'south', 'west' ];

Robot.prototype.orient = function (direction) {
  if (directions.indexOf(direction) !== -1) {
    this.bearing = direction
  } else {
    throw new Error('Invalid Robot Bearing')
  }
}
//
Robot.prototype.turnRight = function () {
  if (directions.indexOf(this.bearing) < 3 ) {
    this.bearing = directions[(directions.indexOf(this.bearing) + 1)]
  } else {
    this.bearing = directions[0]
  }
}

Robot.prototype.turnLeft = function() {
  if (directions.indexOf(this.bearing) > 0 ) {
    this.bearing = directions[(directions.indexOf(this.bearing) -1 )]
  } else {
    this.bearing = directions[3]
  }
}

Robot.prototype.advance = function() {
  if (this.bearing === 'north') {
    this.coordinates[1] += 1
  } else if (this.bearing === 'south') {
    this.coordinates[1] -= 1
  } else if (this.bearing === 'east') {
    this.coordinates[0] += 1
  } else if (this.bearing === 'west') {
    this.coordinates[0] -= 1
  }
}

Robot.prototype.at = function(x, y) {
  this.coordinates[0] = x
  this.coordinates[1] = y
}

Robot.prototype.place = function(obj) {
  this.bearing = obj.direction
  this.coordinates = [obj.x, obj.y]
}

Robot.prototype.instructions = function (string) {
  var arr = string.split("")
  var newArr = []
  arr.forEach(function(element) {
    if (element === "R") {
      this.turnRight()
      newArr.push("turnRight")
    } else if (element === "L") {
      this.turnLeft()
      newArr.push("turnLeft")
    } else if (element === "A") {
      this.advance()
      newArr.push("advance")
    }
  }, this)
  return newArr
}

Robot.prototype.evaluate = function (string) {
  this.instructions(string)
}
