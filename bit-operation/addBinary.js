/**
 * 二进制求和：
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 * 输入:a = "11", b = "1"
 * 输出："100"
 * 思路：看看两个字符串那个长， 
 * 从后往前遍历，
 * 1） 两个都是1，就进位
 * 2） 直接相加
 */

var addBinary = function(a, b) {
    let max = a.length > b.length ? a.length : b.length
    let res = ""
    for(let i = max-1;i > 0;i--) {
        if (a.charAt(i) == "1" && b.charAt(i) == "1") {
            res.charAt(i) = "0"
            res.charAt(i-1) = "1"
        } else {
            res.charAt(i) = a.charAt(i) + b.charAt(i)
        }
    }
    return res
};


