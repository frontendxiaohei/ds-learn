/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数
是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

例如，121 是回文，而 123 不是。

思路：
1. 负数，000，101010 的倍数，都不可能是回文数。
2. 利用整数反转来获取反转后的数，若和参数完全一致，则是回文数
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let newNUm = x;
  let temp = 0;
  while (newNUm != 0) {
    temp = temp * 10 + (newNUm % 10);
    newNUm = Math.floor(newNUm / 10);
  }

  return x == temp;
};
