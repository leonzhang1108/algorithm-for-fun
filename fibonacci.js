// let fibonacci = (n) => {
//   if(n == 1 || n == 2) {
//     return 1
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2)
//   }
// }

// console.log(fibonacci(10))


// 尾递归
// 每次计算结果 然后把结果作参数传递递归

// 连续累加
// let sumFun = (index) => {
//   let sum = (n, result) => {
//     if (n == 1) {
//       return result
//     } else {
//       return sum(n - 1, result + n)
//     }
//   }
//   return sum(index, 1)
// }

// console.log(sumFun(9999))

// 斐波那契数列
function getNthFibonacci(count) {
  var count = count * 1, //如果为其他类型，则转int型  
    tailFactorial = function (count, curr = 1, next = 1) { //ES6函数参数默认值  
      if (count == 0) return curr
      return tailFactorial(count - 1, next, curr + next) //尾递归采用函数，可有效解决栈溢出问题  
    }
  return tailFactorial(count) //直接传count参数  
}  
console.log(getNthFibonacci(100))
