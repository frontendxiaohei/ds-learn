/**
 * 一个数组， 有一种数出现了奇数次， 其他数出现了偶数次， 找出这种数
 */


function num(arr) {
    let eor = 0
    for (let i = 0;i < arr.length;i++) {
        eor ^= arr[i]
    }

    console.log(eor)
}