// 1365

let nums = [8, 1, 2, 2, 3]

let count = []

for (let i = 0; i < nums.length; i++) {
  let acc = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] > nums[j]) acc++
  }
  count.push(acc)
}

console.log(count)
