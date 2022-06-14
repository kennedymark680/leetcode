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

// FIZZBUZZ

// let count = 1
// for (let i = 0; i < 100; i++) {
//   if (count % 3 === 0 && count % 5 === 0) {
//     console.log('FizzBuzz')
//     count++
//   } else if (count % 3 === 0) {
//     console.log('Fizz')
//     count++
//   } else if (count % 5 === 0) {
//     console.log('Buzz')
//     count++
//   } else {
//     console.log(count)
//     count++
//   }
// }

// 1678

// let command = 'G()()()(al)'

// console.log(command.replaceAll('()', 'o').replaceAll('(al)', 'al'), 'command')

// 1614

// let s = '3*4-2*5'

// let count = 0
// let arr = []

// if (s.length > 1 && s.includes('(' || ')')) {
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') {
//       count++
//       arr.push(count)
//     }
//     if (s[i] === ')') {
//       count--
//       arr.push(count)
//     }
//   }
//   console.log(Math.max(...arr), 'arr')
// } else {
//   console.log(0)
// }

// 1496

let path = 'NESWW'

let ns = 0
let ew = 0

let cordArr = ['0,0']
let answer = false

for (let i = 0; i < path.length; i++) {
  switch (path.charAt(i)) {
    case 'N':
      ns++
      if (cordArr.includes(`${ns},${ew}`)) answer = true
      cordArr.push(`${ns},${ew}`)
      break
    case 'S':
      ns--
      if (cordArr.includes(`${ns},${ew}`)) answer = true
      cordArr.push(`${ns},${ew}`)
      break
    case 'E':
      ew++
      if (cordArr.includes(`${ns},${ew}`)) answer = true
      cordArr.push(`${ns},${ew}`)
      break
    default:
      ew--
      if (cordArr.includes(`${ns},${ew}`)) answer = true
      cordArr.push(`${ns},${ew}`)
      break
  }
}

console.log(cordArr, 'cordArr')
console.log(answer, 'answer')
