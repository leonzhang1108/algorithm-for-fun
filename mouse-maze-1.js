let maze = [
  [2, 2, 2, 2, 2, 2, 2],
  [2, 0, 0, 0, 0, 0, 2],
  [2, 0, 2, 0, 2, 0, 2],
  [2, 0, 0, 2, 0, 2, 2],
  [2, 2, 0, 2, 0, 2, 2],
  [2, 0, 0, 0, 0, 0, 2],
  [2, 2, 2, 2, 2, 2, 2] 
]
let width = 7
let length = 7
let startX = 1
let startY = 1
let endX = width - 2
let endY = length - 2

let draw = m => {
  m.forEach(row => {
    let rowStr = ''
    row.forEach(item => {
      switch (item) {
        // 墙壁
        case 2:
          rowStr += '██'
          break
        // 路径
        case 1:
          rowStr += '()'
          break
        // 道路
        case 0:
          rowStr += '  '
          break
        default:
      }
    })
    console.log(rowStr)
  })
  console.log()
}

draw(maze)
let findPath = (m, x, y) => {
  let flag = 0
  let path = []
  let find = (x, y) => {
    path.push([x, y])
    m[x][y] = 1
    x === endX && y === endY && (flag = 1)
    m[x][y + 1] === 0 && !flag && find(x, y + 1)
    m[x][y - 1] === 0 && !flag && find(x, y - 1)
    m[x + 1][y] === 0 && !flag && find(x + 1, y)
    m[x - 1][y] === 0 && !flag && find(x - 1, y)
    !flag && (m[x][y] = 0)
    return flag
  }
  let pass = !!find(x, y)
  return { pass, path }
}

findPath(maze, startX, startY)
draw(maze)