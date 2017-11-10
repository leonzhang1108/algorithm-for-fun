
let length = 16
let chessboard = []
for (let i = 0; i < length; i++) {
  chessboard.push(new Array(length).fill(0))
}
let index = 1
let initPoint = [11, 8]
let pointList = []
let draw = list => {
  list.forEach(row => {
    let rowStr = ''
    row.forEach(i => {
      let space = ''
      switch (true) {
        case i < 10:
          space = '   '
          break
        case i < 100:
          space = '  '
          break
        case i < 1000:
          space = ' '
          break
      }
      rowStr += `${space}${i} `
    })
    console.log(rowStr)
  })
  console.log()
}

draw(chessboard)

// 马走日向量
let vector = [
  [1, 2], [1, -2],
  [-1, 2], [-1, -2],
  [2, 1], [2, -1],
  [-2, 1], [-2, -1]
]

// 判断是否为有效点
let isLegal = (x, y) => x >= 0 && x < length && y >= 0 && y < length && !chessboard[x][y]

let legalNextPoint = cp => {
  let list = []
  vector.forEach(v => {
    let npX = cp.x + v[0]
    let npY = cp.y + v[1]
    isLegal(npX, npY) && list.push({
      x: npX,
      y: npY,
      next: []
    })
  })
  return list
}

let step = currPoint => {
  let cp = {
    x: currPoint[0],
    y: currPoint[1],
    next: []
  }
  // 记录当前落子
  chessboard[cp.x][cp.y] = index++
  // 遍历所有可能的下一个落子点
  let nextPoints = legalNextPoint(cp)
  // 如果没有下一个落子点 结束
  if (!nextPoints.length) return
  // 遍历下一个落子点的下一个落子点个数
  nextPoints.forEach(np => {
    np.next = legalNextPoint(np)
  })
  // 排序
  nextPoints.sort((a, b) => a.next.length > b.next.length ? 1 : -1)
  // 选下一个落子点的下一个落子点个数最少的 作为下一步走
  let { x, y } = nextPoints[0]
  step([x, y])
}

console.log(`initPoint: (${initPoint[0]}, ${initPoint[1]})`)
step(initPoint)
draw(chessboard)