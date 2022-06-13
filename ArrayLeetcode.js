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

// let nums = [1, 2, 2, 3, 1, 4, 2]

// const findDegree = (arr) => {
//   let degree = 0
//   let sliced = arr.slice()
//   let sorted = sliced.sort((a, b) => (a < b ? -1 : 1))
//   let count = 1
//   let newArr = []

//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] === sorted[i + 1]) {
//       count++
//     } else {
//       newArr.push(count)
//       count = 1
//     }
//   }
//   let arrSorted = newArr.sort((a, b) => (a > b ? -1 : 1))
//   degree = arrSorted[0]
//   return degree
// }

// let degree = findDegree(nums)

// const cutArr = (arr, degree) => {
//   let length = arr.length

//   for (let i = 0; i < arr.length; i++) {
//     let end = 0

//     for (let j = 0; j < arr.length - i; j++) {
//       let newArr = arr.slice(i, arr.length - end)
//       console.log(newArr, 'newArr')
//       if (findDegree(newArr) === degree && newArr.length < length) {
//         length = newArr.length
//       }
//       end++
//     }
//   }
//   console.log(length, 'length')
// }

// cutArr(nums, degree)

//[1, 2, 2, 3, 1]

// let length = arr.length
// let evalFront = arr
// let evalEnd = arr
// let end = 1
// let front = 1
// let start = 1
// let finish = 1

// for (let i = 0; i < arr.length; i++) {
//   let newArr = evalFront.slice(0, evalFront.length - end)
//   console.log(newArr, 'end')
//   end++

//   if (findDegree(newArr) === degree && newArr.length < length) {
//     length = newArr.length
//   }
// }

// for (let j = 0; j < arr.length; j++) {
//   let frontArr = evalEnd.slice(front, evalEnd.length)
//   console.log(frontArr, 'front')
//   front++

//   if (findDegree(frontArr) === degree && frontArr.length < length) {
//     length = frontArr.length
//   }
// }

// for (let j = 0; j < arr.length; j++) {
//   let arr = evalEnd.slice(start, evalEnd.length - finish)
//   console.log(arr, 'arr')
//   start++
//   finish++

//   if (findDegree(arr) === degree && arr.length < length) {
//     length = arr.length
//   }
// }

// console.log(length, 'length')

// const findShortestSubArray = nums => {
//   let maxFrequence = 0
//   let freq = {}
//   let first = {}
//   let shortestSubArray = 1

//   for (let i = 0; i < nums.length; i++) {
//       const num = nums[i]
//       if (freq[num]) {
//           freq[num]++
//       } else {
//           freq[num] = 1
//           first[num] = i
//       }

//       if (freq[num] > maxFrequence) {
//           maxFrequence = freq[num]
//           shortestSubArray = i - first[num] + 1
//       }

//       if (freq[num] === maxFrequence) {
//           shortestSubArray = Math.min(shortestSubArray, i - first[num] + 1)
//       }
//   }

//   return shortestSubArray
// };

// 167

let numbers = [2, 7, 11, 15]
let target = 9
let start = 0
let end = numbers.length - 1

numbers.indexOf()

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] + numbers[j] === target) {
//       sum.push(i + 1)
//       sum.push(j + 1)
//     }
//   }
// }

console.log(sum)
