// 结果集
let relationSet = new Set()
// 关系
let relationList = []
let stringifySet = set => JSON.stringify([...set])
// 是否有交集
let hasIntersection = (set1, set2) => new Set([...set1].filter(x => set2.has(x))).size
// 初始化原有set
// for (let i = 0; i < 5000; i++) {
//   relationSet.add(new Set([i]))
// }
// 初始化集合关系
for (let i = 0; i <= 500; i++) {
  relationList.push(new Set([i, i + 50]))
}
let mergeAddSetList = (set, rSets) => {
  let tempSets = new Set([...rSets])
  let merged = false
  rSets.forEach(rSet => {
    if (stringifySet(set) === stringifySet(rSet)) {
      // 有交集的set个数
      let intersecionNum = 0
      tempSets.forEach(item => {
        hasIntersection(item, set) && (intersecionNum += 1)
      })
      intersecionNum > 1 && tempSets.size > 1 && tempSets.delete(set)
    } else {
      if (hasIntersection(set, rSet)) {
        // 添加新老集合并集
        set = new Set([...set, ...rSet])
        tempSets.add(set)
        // 删除原来集合
        tempSets.delete(rSet)
        merged = true
      } else {
        tempSets.add(set)
      }
    }
  })
  return merged ? mergeAddSetList(set, tempSets) : tempSets
}
// 设置关系
relationList.forEach(set => {
  if (relationSet.size) {
    relationSet = mergeAddSetList(set, relationSet)
  } else {
    relationSet.add(set)
  }
})
console.log(relationSet)