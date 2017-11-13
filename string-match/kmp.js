
// 递归

let kmpGetPartMatchLen = str => {
  let partMatch = []
  for (let i = 0; i < str.length; i++) {
    let prefix = "",
      suffix = ""
    let newStr = str.slice(0, i + 1)
    if (newStr.length <= 1) {
      partMatch[i] = 0
    } else {
      //判断前后缀是否相同
      for (let j = 0; j < i; j++) {
        prefix = newStr.slice(0, j + 1)
        suffix = newStr.slice(-j - 1) //利用负参数尾巴开始取
        if (prefix === suffix) {
          partMatch[i] = prefix.length
        }
      }
      //不存在检测
      partMatch[i] = partMatch[i] ? partMatch[i] : 0
    }
  }
  return partMatch
}


let kmp = (sourceStr, subStr) => {
  let partMatch = kmpGetPartMatchLen(subStr)
  let result = false

  for (var i = 0; i < sourceStr.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (subStr.charAt(j) === sourceStr.charAt(i + j)) {
        if (j === subStr.length - 1) {
          result = true
          break
        }
      } else {
        //实现回滚,以subStr为参照物，即sourceStr往前移动
        if (j > 0 && partMatch[j - 1] >= 0) {
          //公式在此处实现
          i += (j - 1 - partMatch[j - 1] - 1)
        } else {
          break
        }
      }
    }
    if (result) break
  }
  console.log(result)
  return result ? i : -1
}

// 测试
console.log(kmp('because sometimes algorithms are more fun than str.search()', 'algorithms'))