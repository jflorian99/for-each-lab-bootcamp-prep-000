function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var family = ['Katie', 'Nate', 'Emily', 'Ernesto']
  family.forEach(callback)
  return family
}

function doToArray(array, callback) {
  array.forEach(callback)
}
