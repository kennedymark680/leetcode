let text = '00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:00,400-234-090'

let callArr = text.split('\n')

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

let arrTimes = []

console.log(log, 'log')

for (let x in log) {
  let callLog = log[x]
  let callTimes = []
  for (let i = 0; i < callLog.length; i++) {
    let time = callLog[i].split(':').reduce((acc, time) => 60 * acc + +time)
    callTimes.push(time)
  }
  arrTimes.push(callTimes)
}

let totalTimeArr = []

for (let i = 0; i < arrTimes.length; i++) {
  totalTimeArr.push(arrTimes[i].reduce((acc, sel) => acc + sel))
}

console.log(totalTimeArr, 'totalTimeArr')

let withOutMax = totalTimeArr.splice(
  totalTimeArr.indexOf(Math.max(totalTimeArr))
)

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

console.log(totalCharges, 'totalCharges')

let answer = totalCharges.reduce((acc, sel) => acc + sel)

console.log(answer, 'answer')
