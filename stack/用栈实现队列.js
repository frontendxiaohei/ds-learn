/**
 * https://leetcode.cn/problems/implement-stack-using-queues/
 * 
 * 
 * 思路：用两个栈，一个压入栈， 一个负责pop 和 peek
 * 
 * 每次pop 或 peek时，若输出栈为空则将输出栈的全部数据依次弹出并压入输出栈
 * 这样输出栈从栈顶往栈底的顺序就是队列从队首往队尾的顺序
 * 
 */

var MyQueue = function() {
    this.pushStack = [];
    this.popStack = [];
};

MyQueue.prototype.push = function(x) {
    this.pushStack.push(x);
};

MyQueue.prototype.pop = function() {
    if (!this.popStack.length) {
        this.in2out();
    }
    return this.popStack.pop();
};

MyQueue.prototype.peek = function() {
    if (!this.popStack.length) {
        this.in2out();
    }
    return this.popStack[this.popStack.length - 1];
};

MyQueue.prototype.empty = function() {
    return this.popStack.length === 0 && this.pushStack.length === 0;
};

MyQueue.prototype.in2out = function() {
    while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
    }
};
