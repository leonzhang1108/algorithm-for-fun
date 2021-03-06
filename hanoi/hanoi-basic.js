
let index = 1
let move = (n, from, to) => console.log(`${index++}: Move sheet ${n} from ${from} to ${to}`)

//将n个盘子由初始塔移动到目标塔(利用借用塔)
let hanoi = (n, from, temp, to) => {
  if (n == 1)
    move(n, from, to) //只有一个盘子是直接将初塔上的盘子移动到目的地  
  else {
    hanoi(n - 1, from, to, temp) // 将n-1个盘子先移动到辅助柱上
    move(n, from, to)                 // 把最后一个盘子移动到终点柱
    hanoi(n - 1, temp, from, to) // 把n-1个盘子移动到终点柱子上
  }
}

hanoi(5, 'a', 'b', 'c')