
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
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == num)
            return true;
    }
    return false;
}


function exist(sortedArr, target) {
    let l = 0, r = sortedArr.length - 1, m = 0;
    while (l <= r) {
        m = Math.floor((l + r) / 2);
        if (sortedArr[m] == target) {
            return true
        } else if (sortedArr[m] > target) {
            r = m - 1;
        } else if (sortedArr[m] < target) {
            l = m + 1;
        }
    }
    return false
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
        if (right(arr, num) != exist(arr, num)) {
            console.log(arr, num);
            succeed = false;
            break;
        }
    }
    console.log(succeed ? "succeed" : "failed")

}
test()

