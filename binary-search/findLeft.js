
/**
 * 
 * @param {*} n 数组元素的数量
 * @param {*} v 数组元素的范围
 * @returns 
 */
function randomArray(n, v) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * v) + 1);
    }
    return arr;
}

function right(arr, num) {
    let ans = -1
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= num){
            ans = i;
            break
        }
    }
    return ans;
}


// 有序数组中查找>=某个数的最左位置
// 思路: 二分查找
// 1. 如果中间值大于等于目标值, 那么就记录下这个位置, 然后继续往左找
// 2. 如果中间值小于目标值, 那么就继续往右找
function findLeft(sortedArr, target) {
    let l = 0, r = sortedArr.length - 1, m = 0;
    let ans = -1
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (sortedArr[m] >= target) {
            ans = m;
            r = m - 1;
        } else  {
            l = m + 1;
        } 
    }
    return ans
}



function test() {
    let testTime = 500000,
        maxSize = 10,
        maxValue = 100,
        succeed = true;
    console.log("test begin");
    for (var i = 0; i < testTime; i++) {
        let arr = randomArray(maxSize, maxValue);
        arr.sort((a, b) => a - b)
        let num = Math.floor(Math.random() * maxValue) + 1;
        if (right(arr, num) != findLeft(arr, num)) {
            console.log(arr, num);
            succeed = false;
            break;
        }
    }
    console.log(succeed ? "succeed" : "failed")

}
test()

