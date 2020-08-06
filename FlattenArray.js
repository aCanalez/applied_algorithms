//Flatten function without using the .flat method
function flatten(arr) {
  const initialValue = [];
  return arr.reduce((total, value) => {
    return total.concat(Array.isArray(value) ? flatten(value) : value)
  }, initialValue)
}


console.log(flatten([1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6]))