// Code your solution here!
function printString(string) {
    console.log(string[0])
    if (string.length > 1) {
        console.log(string[0])
        let newString = string.substring(1, string.length)
        printString(newString)
    } else {
    return true
    }
}

function reverseString(string) {
    let reversedString = string[string.length - 1]
    if (string.length > 1) {
        let newString = string.slice(0, -1)
        reverseString(newString)
    } else {
        return reversedString
    }
}
