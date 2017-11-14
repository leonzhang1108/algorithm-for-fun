let x, y, i = 0
let n = 50000
let times = 100

// 生成范围
let range = n => [...Array(n).keys()]

// 边长 = 半径 = 1
// 1/4圆面积 = π * 1²/4 = π/4
// 正方形面积 = 1² = 1
// => π = 圆面积 / 正方形面积
// ∵  1/4圆面积 = 落进圆内的点次数 / 次数
// ∴  π = 4 * 落进圆内的点次数 / 次数
while (i++ < times) {
  console.log(4 * range(n).map(() => {
    x = Math.random()
    y = Math.random()
    return x * x + y * y < 1 
  }).reduce((res, curr) => res + curr) / n)
}

