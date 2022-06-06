// 771

let jewels = 'aA'
let stones = 'aAAbbbb'

let count = 0

for (let i = 0; i < jewels.length; i++) {
  for (let j = 0; j < stones.length; j++) {
    if (jewels[i] === stones[j]) count++
  }
}

console.log(count, 'count')
