let interval = (s, e) => s > e ? [] : [...interval(s, e - 1), e]
let initArray = (x, l) => l !==0 ? [...initArray(x, l - 1), x] : [x]
let isValid = queenCol => {
  let isSafe = (pointA, pointB) => {
    let slope = (pointA.row - pointB.row) / (pointA.col - pointB.col)
    return !((0 === slope) || (1 === slope) || (-1 === slope))
  }
  let len = queenCol.length
  let p2c = {
    row: queenCol[len - 1],
    col: len
  }
  return queenCol
    .slice(0, len - 1)
    // 过滤
    .map((row, index) => isSafe({ row: row, col: index + 1 }, p2c))
    // 选择一个
    .reduce((a, b) => a && b)
}
let queens = size => {
  let queenCols = colSize => colSize === 1
    ? interval(1, size).map(i => [i])
    : queenCols(colSize - 1)
      .map(currRow => interval(1, size).map(row => [...currRow, row]))
      .reduce((a, b) => [...a, ...b])
      .filter(isValid)
  return queenCols(size)
}
let draw = list => {
  list.forEach(row => {
    console.log()
    row.forEach(i => {
      let prtList = initArray(0, row.length - 1)
      prtList[i - 1] = 1
      console.log(prtList.reduce((str, curr) => str += curr ? '● ' : '○ ', ''))
    })
  })
}
let result = queens(6)
draw(result)
console.log(result.length)