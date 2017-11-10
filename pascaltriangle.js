let height = 10

let combi = (n, r) => {
  let i
  let p = 1
  for (i = 1; i <= r; i++)
    p = p * (n - i + 1) / i
  return p
}

for (let i = 0; i < height; i++) {
  let string = new Array(height - i).join(' ')
  for (let index = 0; index <= i; index++) {
    string += (combi(i, index) + ' ')
  }
  console.log(string)
}
