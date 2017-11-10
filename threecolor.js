let getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
let swap = (l, a, b) => l[a] = [l[b], l[b] = l[a]][0]
let length = 30
let list = []
let pBlue = 0
let pWhite = 0
let pRed = length - 1
const Color = {
  Blue: 1,
  White: 2,
  Red: 3,
}
while (length > 0) {
  list.push(getRandom(1, 3))
  length--
}

console.log(list)
console.time('use')
// start
while (pWhite <= pRed) {
  switch (list[pWhite]) {
    case Color.Blue:
      if (pWhite !== pBlue) swap(list, pWhite, pBlue)
      pBlue++
      pWhite++
      break
    case Color.Red:
      if (pWhite !== pRed) swap(list, pWhite, pRed)
      pRed--
      break
    case Color.White:
      pWhite++
      break
  }
}
console.log(list)
console.timeEnd('use')


