// 最大连续子序列之和

// 暴力求解  O(N^2)
let maxSubArray_violet = nums => {
  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      sum > max && (max = sum)
    }
  }
  return max
}

// 分治  O(NlgN)
let maxSubArray_divide_and_conquer = nums => {
  let divide_and_conquer = (a, l, r) => {
    if (l > r) return 0
    if (l == r) return a[l]
    let m = parseInt((l + r) / 2)

    /*求横跨左右的最大连续子序列左半部分*/
    let lmax = a[m], lsum = 0
    for (let i = m; i >= l; i--) {
      lsum += a[i]
      if (lsum > lmax) lmax = lsum
    }

    /*求横跨左右的最大连续子序列右半部分*/
    let rmax = a[m + 1], rsum = 0
    for (let i = m + 1; i <= r; i++) {
      rsum += a[i]
      if (rsum > rmax) rmax = rsum
    }
    return Math.max(lmax + rmax, Math.max(divide_and_conquer(a, l, m), divide_and_conquer(a, m + 1, r)))
  }

  return divide_and_conquer(nums, 0, nums.length - 1)
}

// 动态规划  O(N)
let maxSubArray_dynamic = nums => {
  let maxSum = -Infinity
  let tempSum = 0
  for (let i = 0; i < nums.length; i++) {
    tempSum = Math.max(tempSum + nums[i], nums[i])
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

let arr1 = [-2, 1, 3, 4, -1, 2, 1, -5, 4]
let arr2 = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]

console.log(maxSubArray_violet(arr1))
console.log(maxSubArray_violet(arr2))
console.log(maxSubArray_divide_and_conquer(arr1))
console.log(maxSubArray_divide_and_conquer(arr2))
console.log(maxSubArray_dynamic(arr1))
console.log(maxSubArray_dynamic(arr2))