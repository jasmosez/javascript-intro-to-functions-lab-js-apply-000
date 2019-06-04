
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout (string) {
  const spy = shout('hello')
  console.log(spy)
}
