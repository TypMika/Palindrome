function palindrome(string) {
    let array = string.toLowerCase().replace(/\,*\s/g,"")
    return array == array.split("").reverse().join("");    
}



console.log(palindrome("Anita lava la tina"));