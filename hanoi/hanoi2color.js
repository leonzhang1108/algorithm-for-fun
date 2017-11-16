// 圆盘最初是混合颜色的从小到大排好的，现在要求根据其颜色分开到两个柱子上分别从小到大排好。
// 思路 先把两种颜色最大的盘子放到两个分柱子下
let index = 1, i = 0
let from = 'a', temp = 'b', to = 'c'
let move = (n, from, to) => console.log(`${index++}: Move sheet ${n} from ${from} to ${to}`)