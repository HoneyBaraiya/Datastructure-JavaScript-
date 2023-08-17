// palindrome number
const isPlaindrome=function(x)
{
        return x<0?false:x===+x.toString().split("").reverse().join("");
}
console.log(isPlaindrome(10));