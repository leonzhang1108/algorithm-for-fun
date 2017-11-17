/**
 * LIS = Longest increasing subsequence.
 * Input = [10, 22, 9, 33, 21, 50, 41, 60, 80]
 * Output = [10, 22, 33, 50, 60, 80]
 * Created by gaurav on 1/7/15.
 */
let findSubsequence = arr => {
  let allSubsequence = [],
    longestSubsequence = null,
    longestSubsequenceLength = -1

  for (let i = 0; i < arr.length; i++) {
    let subsequenceForCurrent = [arr[i]],
      current = arr[i],
      lastElementAdded = -1
    for (let j = i; j < arr.length; j++) {
      let subsequent = arr[j]
      if ((subsequent > current) && (lastElementAdded < subsequent)) {
        subsequenceForCurrent.push(subsequent)
        lastElementAdded = subsequent
      }
    }
    allSubsequence.push(subsequenceForCurrent)
  }
  for (let i in allSubsequence) {
    let subs = allSubsequence[i]
    if (subs.length > longestSubsequenceLength) {
      longestSubsequenceLength = subs.length
      longestSubsequence = subs
    }
  }
  console.log(allSubsequence)
  return longestSubsequence
}


let sample = [10, 22, 9, 33, 21, 50, 41, 60, 80]
console.log(findSubsequence(sample))