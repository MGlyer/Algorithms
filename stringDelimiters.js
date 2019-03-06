/*
Daily Coding Problem: Problem #114 [Hard
Given a string and a set of delimiters, reverse the words in the string while maintaining the relative order of the delimiters. 
For example, given "hello/world:here", return "here/world:hello"

Follow-up: Does your solution work for the following cases: "hello/world:here/", "hello//world:here"
*/

let delims = new Set
delims.add('/')
delims.add(':')
console.log(delims)

const reverse = (string) => {
  let words = []
  let seperators = []

  let word = ''
  for (let char of string) {
    if (!delims.has(char)) word += char
    else {
      words.push(word)
      if (word.length) seperators.push(char)
      else seperators[seperators.length-1] += char
      word = ''
    }
  }
  if (word.length) words.push(word)

  words.reverse()
  let output = ''

  for (let word of words) {
    output += word
    output += seperators.length ? seperators.shift() : ''
  }

  return output
}

console.log(reverse("hello/world:here/"))
console.log(reverse('hello/world:here'))
console.log(reverse('hello//world:here'))