// 1365

// let nums = [8, 1, 2, 2, 3]

// let count = []

// for (let i = 0; i < nums.length; i++) {
//   let acc = 0
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[i] > nums[j]) acc++
//   }
//   count.push(acc)
// }

// console.log(count)

// 1313

// let nums = [1, 2, 3, 4]

// let arr = []

// for (let i = 0; i < nums.length; i += 2) {
//   let times = nums[i]
//   while (times > 0) {
//     arr.push(nums[i + 1])
//     times -= 1
//   }
// }

// console.log(arr)

// 1748

// let nums = [1, 2, 3, 2]

// let arr = []

// for (let i = 0; i < nums.length; i++) {
//   let count = 0
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[i] === nums[j]) count++
//   }
//   if (count === 1) arr.push(nums[i])
// }

// if (arr.length > 0) {
//   console.log(arr.reduce((t, a) => t + a))
// } else {
//   console.log(0)
// }

// 118

// let numRows = 2

// let count = numRows

// let arr = [[1]]

// while (count > 1) {
//   let newArr = [1]
//   for (let i = 0; i < arr[0].length; i++) {
//     newArr.push(arr[0][0] + arr[0][1])
//   }
//   console.log(newArr, 'newArr')
//   arr.push(newArr)
//   count--
// }

// console.log(arr)

let numRows = 5
let count = numRows
let start = 2
let arr = []

while (count > 0) {
  if (start === 2) {
    arr.push([1])
    start--
    count--
  } else if (start === 1) {
    arr.push([1, 1])
    start--
    count--
  } else {
    let newArr = [1]
    let selectedArr = arr[arr.length - 1]
    for (let i = 0; i < selectedArr.length - 1; i++) {
      newArr.push(selectedArr[i] + selectedArr[i + 1])
    }
    newArr.push(1)
    arr.push(newArr)
    count--
  }
}

console.log(arr)
