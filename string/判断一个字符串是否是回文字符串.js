function isPalindrome1(str) {
    // 先反转字符串
    const reversedStr = str.split('').reverse().join('')
    // 判断反转前后是否相等
    return reversedStr === str
}

// aba aba
// 3
function isPalindrome2(str) {
    let len = str.length
    for (let i = 0;i < len / 2;i++) {
        if (str[i] !== str[len - i-1]) {
            return false
        }
    }
    return true
}


/**
 * 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 *
 * 示例 1: 输入: "aba"
 * 输出: True
 * 示例 2:
 * 输入: "abca"
 * 输出: True
 * 解释: 你可以删除c字符。
 * 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 */


const validPalindrome = function(st) {

    const len = st.length

    let i = 0
    let j = len - 1

    while (i < j && st[i] === st[j]) {
        i++
        j--
    }

    if(isPalindrome(i+1,j)) {
        return true
    }

    if (isPalindrome(i,j-1)) {
        return true
    }

    function isPalindrome(str) {
        let s = 0, e = str.length - 1
        while (s < e) {
            if (str[s] !== str[e]) {
                return false
            }
            s ++
            e --
        }
        return true
    }
    return false
}




