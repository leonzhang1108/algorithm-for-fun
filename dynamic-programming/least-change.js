// 动态规划解决 思路类似斐波那契数列
// 如果用贪心算法 需要[1, 2， 5] 满足11时候 不能得最优解
// 贪心算法参考knight-tour.js
var coinsSize = [1, 2, 5, 10, 20, 50, 100]
let total = 189
// i: 总数
// j: 最少硬币数
// d(i) = j 凑i元需要至少j个硬币数
// 转换方程 d(i) = d(j) + 1
// d(0) = 0, d(1) = 1, d(2) = 1, d(5) = 1
// d(3) = d(2) + 1 = 2
// d(4) = 
// let least_change = (t, c) => {
//   // 初始化List
//   let list = [[]]
//   c.forEach(i => list[i] = [i])
//   for (let i = 1; i <= t; i++) {
//     if (!list[i]) list[i] = calculate_min_list(list, i)
//   }
//   return list[t]
// }

// let calculate_min_list = (lists, total) => {
//   let resultList = []
//   lists.forEach(list => {
//     if (list && list.length) {
//       let left = total - list.reduce((a, b) => a += b)
//       if (left > 0 && lists[left] && lists[left].length
//         && ((resultList.length && resultList.length > lists[left].length + list.length) || !resultList.length)) {
//         resultList = [...lists[left], ...list]
//       }
//     }
//   })
//   // console.log(resultList)
//   return resultList
// }

// console.log(least_change(total, coinsSize))

/*******************************************************************************/
// 余数求解
let least_change_ramain = (t, c) => {
  let result
  let l = [...c]
  while (l.length) {
    if (result) break
    result = get_result(t, l)
    l.splice(l.length - 1)
  }
  return result
}
let get_result = (total, list) => {
  let result = []
  list.sort((a, b) => a < b ? 1 : -1).forEach(item => {
    let count = (total / item) ^ 0
    if (count) {
      total = total % item
      while(count--) result.push(item)
    }
  })
  return total ? undefined : result
}
for(let i = 0; i < 189; i++) {
  console.log(least_change_ramain(i, coinsSize))
}