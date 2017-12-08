// 最大面积: index之差*Min(value)
// 动态规划
let maxArea = list => {
  let i = maxI = 0
  let j = maxJ= list.length - 1
  let maxArea = (j - i) * Math.min(list[i], list[j])

  while (i < j) {
    let tempArea = (j - i) * Math.min(list[i], list[j])
    maxArea = Math.max(maxArea, tempArea)
    if(maxArea === tempArea) {
      maxI = i
      maxJ = j
    }
    list[i] > list[j] ? j-- : i++
  }
  console.log(`index of i: ${maxI}, height is ${list[maxI]}`)
  console.log(`index of j: ${maxJ}, height is ${list[maxJ]}`)
  console.log(`min height is ${Math.min(list[maxJ], list[maxI])}`)
  console.log(`max area: ${Math.min(list[maxJ], list[maxI])} * (${maxJ} - ${maxI}) = ${maxArea}`)
}
maxArea([1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1])