// 771

// let jewels = 'aA'
// let stones = 'aAAbbbb'

// let count = 0

// for (let i = 0; i < jewels.length; i++) {
//   for (let j = 0; j < stones.length; j++) {
//     if (jewels[i] === stones[j]) count++
//   }
// }

// console.log(count, 'count')

// for (let x of stones) {
//   if (jewels.includes(x)) count++
// }

// console.log(count, 'count')

let count = 1
for (let i = 0; i < 100; i++) {
  if (count % 3 === 0 && count % 5 === 0) {
    console.log('FizzBuzz')
    count++
  } else if (count % 3 === 0) {
    console.log('Fizz')
    count++
  } else if (count % 5 === 0) {
    console.log('Buzz')
    count++
  } else {
    console.log(count)
    count++
  }
}
