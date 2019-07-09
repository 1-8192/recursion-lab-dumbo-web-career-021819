import { reverse } from "dns";

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
    if (string.length <= 1) {
        return string
    } else {
        return reverseString(string.substring(1)) + string[0]
    }
}

function isPalindrome(string) {
    if (string.length <= 1) {
        return true
    } else if (string[0] === string[string.length-1]) {
            return isPalindrome(string.substr(1).slice(0, -1))
        } else {
        return false
    }
}

function addUpTo(numArray, index) {
    if (index < 1) {
        return numArray[index] 
    } else {
        return numArray[index] + addUpTo(numArray, index - 1)
    }
}

function maxOf(numArray) {
    if (numArray.length < 2) {
        return numArray[0]
    } else {
        return Math.max(numArray.pop(), maxOf(numArray))
    }
}

function includesNumber(array, number) {
    if (array.length <= 0) {
        return false 
    } else if (array[0] === number) {
            return true
        }  else {
        return includesNumber(array.slice(1), number)
    }
}