


// 递归
let eazy_recursion_match = (string, pattern) => {
  let strList = string.split('')
  let patList = pattern.split('')
  let match = (strList, patList, offsetIndex = 0) => {
    if (patList.length > strList.length - offsetIndex) return -1
    for (let i = 0; i < strList.length; i++) {
      if (patList[i] !== strList[i + offsetIndex]) {
        return match(strList, patList, offsetIndex + 1)
      }
    }
    return offsetIndex
  }
  return match(strList, patList)
}

// 非递归
let eazy_match = (mainStr, str) => {
  var mainLength = mainStr.length
  var searchLength = str.length
  for (var offset = 0, padding = mainLength - searchLength; offset <= padding; offset++) {
    var match = true
    for (var i = 0; i < searchLength; i++) {
      if (str.charAt(i) !== mainStr.charAt(offset + i)) {
        match = false
        break
      }
    }
    if (match) return offset
  }
  return -1
}


// 测试
console.log(eazy_match('because sometimes algorithms are more fun than str.search()', 'algorithms'))