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
