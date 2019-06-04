
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout (string) {
  console.log(shout('hello'))
}

function logWhisper (string) {
  console.log(whisper('hello'))
}

function sayHiToGrandma(string) {
  // case that string is already all uppercase
  if (string === "I love you, Grandma.") {
    return ""
  }
  
  (string === shout(string)) {
    return "YES INDEED!"
  } else {
    
  }
}