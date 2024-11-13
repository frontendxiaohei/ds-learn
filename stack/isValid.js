/**
 * 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足： 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 * 示例 1:
 * 输入: "()"
 * 输出: true
 *
 * 示例 4:
 * 输入: "([)]"
 * 输出: false
 * 示例 5:
 * 输入: "{[]}"
 * 输出: true
 * 
 * 思路： 如果是（ { [ 就压栈
 * 如果是）} ] 就出栈
 * 
 * 整个字符串遍历完，栈为空， 就是合法的
 */

let isValid = function (s) {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    if (ele in map) {
      stack.push(ele);
    } else {
      if (ele !== map[stack.pop()]) {
        return false;
      }
    }
  }
  return !stack.length;
};
