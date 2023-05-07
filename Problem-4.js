function Palindrome(string) {
    return string == string.split("").reverse().join("") ? true : false;
}
console.log(Palindrome("katak"));
console.log(Palindrome("kupu-kupu"));
