function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    let distance = Math.abs(parseInt(startBlock) - parseInt(endBlock))

    if (distance < blockRange) {
      return `within range by ${blockRange - distance}`
    } else {
      return `${distance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(fare){
    return fare * percentage
  }
}

function createDriver(){
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
