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

// let numRows = 5
// let count = numRows
// let start = 2
// let arr = []

// while (count > 0) {
//   if (start === 2) {
//     arr.push([1])
//     start--
//     count--
//   } else if (start === 1) {
//     arr.push([1, 1])
//     start--
//     count--
//   } else {
//     let newArr = [1]
//     let selectedArr = arr[arr.length - 1]
//     for (let i = 0; i < selectedArr.length - 1; i++) {
//       newArr.push(selectedArr[i] + selectedArr[i + 1])
//     }
//     newArr.push(1)
//     arr.push(newArr)
//     count--
//   }
// }

// console.log(arr)

// 1385

// let arr1 = [1, 4, 2, 3]
// let arr2 = [-4, -3, 6, 10, 20, 30]
// let d = 3

// let count = 0

// for (let i = 0; i < arr1.length; i++) {
//   let arr = []
//   for (let j = 0; j < arr2.length; j++) {
//     arr.push(Math.abs(arr1[i] - arr2[j]))
//   }
//   if (arr.every((e) => e > d)) count++
// }

// console.log(count)

// for (let i = 0; i < arr1.length; i++) {
//   if (arr2.every((e) => Math.abs(arr1[i] - e) > d)) count++
// }

// arr1.forEach((n) => {
//   if (arr2.every((e) => Math.abs(n - e) > d)) count++
// })

// console.log(count)

// 697

let nums = [1, 2, 2, 3, 1]

const findDegree = (arr) => {
  let degree = 0
  let sorted = arr.sort((a, b) => (a < b ? -1 : 1))
  let count = 1
  let newArr = []

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      count++
    } else {
      newArr.push(count)
      count = 1
    }
  }
  let arrSorted = newArr.sort((a, b) => (a > b ? -1 : 1))
  degree = arrSorted[0]
  return degree
}

let degree = findDegree(nums)

const cutArr = (arr) => {
  let length = arr.length
  let evalArr = arr

  if (findDegree(evalArr) === degree && evalArr.length < length)
    length = evalArr.length
}
