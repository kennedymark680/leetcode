let text = '00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:00,400-234-090'

let callArr = s.split('\n')

let log = {}
let phoneBill = {}
let totalCharges = []

for (let i = 0; i < callArr.length; i++) {
  let callSplit = callArr[i].split(',')
  if (log[callSplit[1]]) {
    log[callSplit[1]].push(callSplit[0])
  } else {
    log[callSplit[1]] = [callSplit[0]]
  }
}

let arrTimes = {}
let objTimes = {}

for (let x in log) {
  let callLog = log[x]
  let callTimes = []
  for (let i = 0; i < callLog.length; i++) {
    let time = callLog[i].split(':').reduce((acc, time) => 60 * acc + +time)
    callTimes.push(time)
  }

  arrTimes[x] = callTimes

  objTimes[x] = callTimes.reduce((acc, sel) => acc + sel)
}

const addPhoneDigits = (phoneNumber) => {
  let phone1 = phoneNumber.split('-').join('')
  let arr = phone1.split('')
  let phone1Arr = []
  arr.map((phone) => {
    phone1Arr.push(parseInt(phone))
  })
  let phone1Total = phone1Arr.reduce((acc, sel) => acc + sel)
  return phone1Total
}

let max = 0
let phoneNumber = ''
let phoneValue = 0
for (let x in objTimes) {
  if (objTimes[x] > max) {
    max = objTimes[x]
    phoneNumber = x
    phoneValue = addPhoneDigits(x)
  } else if (objTimes[x] === max) {
    let phone1 = addPhoneDigits(phoneNumber)
    let phone2 = addPhoneDigits(x)
    phone1 > phone2 ? (max = objTimes[x]) : (max = max)
  }
}

delete arrTimes[phoneNumber]

let withOutMax = []

for (let x in arrTimes) {
  for (let i = 0; i < arrTimes[x].length; i++) {
    withOutMax.push(arrTimes[x][i])
  }
}

for (let i = 0; i < withOutMax.length; i++) {
  let charge = 0
  if (withOutMax[i] < 300) {
    charge = withOutMax[i] * 3
    totalCharges.push(charge)
  } else {
    if (withOutMax[i] % 60 === 0) {
      let charge = (withOutMax[i] / 60) * 150
      totalCharges.push(charge)
    } else {
      let roundUp = withOutMax[i] + (60 - (withOutMax[i] % 60))
      let roundUpCharge = (roundUp / 60) * 150
      totalCharges.push(roundUpCharge)
    }
  }
}

let answer = totalCharges.reduce((acc, sel) => acc + sel)

console.log(answer)
