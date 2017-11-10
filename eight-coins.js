'use strict'
let length = 1000
let sum = l => l.reduce((a, b) => a + b)
let consoleSpecial = (cutList, normal, length) => {
  let [x, y] = cutList
  let [bn, sn] = cutList.map((num, index) => {
    return { num, index: length + index }
  }).sort((a, b) => a.num < b.num ? 1 : -1)
  bn.num > normal
    ? console.log(`${bn.num} is bigger, at index ${bn.index}`)
    : console.log(`${sn.num} is smaller, at index ${sn.index}`)
}
let findSpecial = list => {
  let cutList = list.splice(list.length - 2, 2)
  let leftList = list.slice(0, list.length / 2)
  let rightList = list.slice(list.length / 2, list.length)
  if (sum(leftList) === sum(rightList)) {
    consoleSpecial(cutList, leftList[0], list.length)
  } else {
    list.length == 2
      ? consoleSpecial(list, cutList[0], 0)
      : findSpecial(list)
  }
}

for(let i = 1; i < length; i++) {
  let list = new Array(length).fill(1)
  list[i] = 0
  findSpecial(list)
}
