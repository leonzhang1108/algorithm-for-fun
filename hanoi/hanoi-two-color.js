// 圆盘最初是混合颜色的从小到大排好的，现在要求根据其颜色分开到两个柱子上分别从小到大排好。
// 思路 先把两种颜色最大的盘子放到两个分柱子下
let index = 1, i = 0
let from = 'a', temp = 'b', to = 'c'
let move = (n, from, to) => console.log(`${index++}: Move sheet ${n} from ${from} to ${to}`)

let hanoi = (n, from, temp, to) => {
  if (n === 0) {
    return
  } else if (n === 1) {
    move(n, from, to)
  } else {
    // hanoi(n - 2, from, to, temp)
    // move(n - 1, from, to)
    // move(n, from, to)
    // hanoi(n - 2, temp, to, from)
    // move(n, to, temp)

    hanoi(n - 1, from, to, temp)
    move(n, from, to)
    hanoi(n - 2, temp, to, from)
  }
}

let hanoi_two_color = n => {
  for (let i = n; i > 0; i -= 2) {
    hanoi(i, from, temp, to)
  }
}

// hanoi_two_color(6)
hanoi(4, from, temp, to)