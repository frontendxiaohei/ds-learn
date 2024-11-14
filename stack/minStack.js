
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(val) {

        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        } else {
            this.minStack.push(this.minStack[this.minStack.length - 1]);
        }
    }
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}


const Max = 80000

class MinStack2 {
    constructor() {
        this.stack = new Array(80000);
        this.minStack = new Array(80000);
        this.size = 0
    }
    push(val) {
        this.stack[this.size] =  val
        if (this.size == 0 || val <= this.minStack[this.size - 1]) {
            this.minStack[this.size] = val
        } else {
            this.minStack[this.size] = this.minStack[this.size - 1]
        }

    }
    pop() {
       this.size --
    }

    top() {
        return this.stack[this.size - 1]
    }

    getMin() {
        return this.minStack[this.size - 1]
    }


}