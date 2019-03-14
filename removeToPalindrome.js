/*
Given a string which we can delete at most k, return whether you can make a palindrome.

For example, given 'waterrfetawx' and a k of 2, you could delete f and x to get 'waterretaw'.
*/

let removeToPaly = (str, k) => {
  let s = 0
  let e = str.length-1
  let count = 0

  while (s < e) {
    if (str[s] !== str[e]) {
      if (str[s] === str[e-1]) {
        count++
        e--
      } else if (str[s+1] === str[e]) {
        count++
        s++
      }
    }
    s++
    e--
  }
  count

  return count <= k
}

let string = 'wafterretawx'
console.log(removeToPaly(string, 2))
