/**
 * 一个数组， 有两种数出现了奇数次， 其他数出现了偶数次， 找出这种数
 *
 *
 * 没有测试通过
 */


function num(arr) {
    let eor = 0
    for (let i = 0;i < arr.length;i++) {
        eor ^= arr[i]
    }

    let onlyOne = eor & (-eor)

    let eor2 = 0
    for (let i = 0;i < arr.length;i++) {
        if ((arr[i] & onlyOne) !== 0) {
            eor2 ^= arr[i]
        }
    }

    console.log(eor, eor ^ eor2)
}


function test() {
    let arr = [6,6,2,2,3,3,4,5]
    num(arr)

    console.log(2 ^ 2)
}

test()