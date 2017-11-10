let c = document.createElement('canvas'),
  ctx = c.getContext('2d'),
  i = 0,
  j = 0,
  size = 5,
  sizeDraw = size - 1,
  cols = 100,
  rows = 100,
  count = cols * rows,
  cells = [],
  tick = 0,
  nbCount = 0,
  framesModel = true,
  curr = 0,
  arr = [1, 0]

c.width = size * cols
c.height = size * cols

let getRandom = () => arr[Math.floor(Math.random() * arr.length)]

let init = () => {
  for (i = 0; i < count; i++) cells.push([false, 0])
  restart()
}

let restart = () => {
  ctx.clearRect(0, 0, c.width, c.height)
  for (i = 0; i < count; i++) {
    // 一行1一行0
    cells[i][0] = ~~(i / rows) % 2
    // 随机
    // cells[i][0] = getRandom()
  }
  framesModel = !framesModel
}

let doSin = () => {
  let getnbCountSin = i => {
    nbCount = 0
    for (j = 0; j < 9; j++) {
      if (j != 4) {
        x = (i % cols) - 1 + j % 3
        y = Math.floor(i / cols) - 1 + Math.floor(j / 3)
        x >= 0 && x < cols && y >= 0 && y < rows && cells[y * cols + x][0] && nbCount++
      }
    }
    return nbCount
  }
  let stepSin = () => {
    cells.forEach((cell, i) => cell[1] = getnbCountSin(i))
    cells.forEach(cell => {
      if (cell[0]) {
        (cell[1] < 2 || cell[1] > 3) && (cell[0] = 0)
      } else {
        cell[1] === 3 && (cell[0] = 1)
      }
    })
  }
  let drawSin = () => {
    ctx.beginPath()
    cells.forEach((cell, i) => cell[0] && ctx.rect((i % cols) * size, ~~(i / cols) * size, sizeDraw, sizeDraw))
    ctx.fillStyle = 'hsla(0, 0%, ' + (0.5 + Math.sin(tick++ / 100) * 0.5) * 100 + '%, 0.1)'
    ctx.fill()
  }
  tick = 0
  stepSin()
  drawSin()
}

let doFrame = () => {
  let getnbCountFrame = i => {
    nbCount = 0
    for (j = 0; j < 9; j++) {
      if (j != 4) {
        x = (i % cols) - 1 + j % 3
        y = Math.floor(i / cols) - 1 + Math.floor(j / 3)
        if (x >= 0 && x < cols && y >= 0 && y < rows) {
          curr = y * cols + x
          cells[curr][0] && cells[curr][0] !== 2 && nbCount++
        }
      }
    }
    return nbCount
  }
  let stepFrame = () => {
    cells.forEach((cell, i) => cell[1] = getnbCountFrame(i))
    cells.forEach(cell => {
      if (cell[0] && cell[0] != 2) {
        (cell[1] < 2 || cell[1] > 3) && (cell[0] = 2)
      } else {
        cell[1] === 3 && (cell[0] = 1)
      }
    })
  }
  let drawFrame = () => {
    cells.forEach((cell, i) => {
      ctx.beginPath()
      ctx.rect((i % cols) * size, ~~(i / cols) * size, sizeDraw, sizeDraw)
      switch (cell[0]) {
        case 0:
          ctx.fillStyle = '#fff'
          break
        case 1:
          ctx.fillStyle = '#505050'
          break
        case 2:
          ctx.fillStyle = '#B0B0B0'
          break
      }
      ctx.fill()
      ctx.closePath()
    })
  }
  stepFrame()
  drawFrame()
}

let loop = () => {
  requestAnimationFrame(loop)
  framesModel ? doFrame() : doSin()
}

window.addEventListener('click', restart)
document.body.appendChild(c)
init()
loop()
