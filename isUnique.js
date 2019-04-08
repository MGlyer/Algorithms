const unique = (str) => {
  let set = new Set
  for (let s of str) {
    set.add(s)
  }
  return set.length === str.length
}