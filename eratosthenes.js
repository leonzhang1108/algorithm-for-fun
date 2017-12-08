// 求质数

let eratosthenesSieve = max => {
  const MINIMUM = 2
  const END = 10000000000
  if (max < END) {
    let start = MINIMUM
    let range = []
    let primes = []
    while (start < max) {
      range.push(start)
      start++
    }
    let len = range.length
    let len2 = range.length
    let i = 0
    let j = 0
    let num = 0
    while (i <= len) {
      num = range[0]
      if (typeof num != 'undefined') {
        primes.push(num)
        range.splice(0, 1)
        len--
        while (j <= len2) {
          if (range[j] % num == 0) {
            range.splice(j, 1)
            // len--
            len2--
          }
          j++
        }
        j = 0
      }
      i++
    }
    return primes
  } else {
    return ['Sorry, the maximum was too big for this function']
  }
}

console.log(eratosthenesSieve(100))