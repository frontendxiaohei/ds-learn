/**
 * 一个数组， 有一种数出现了k次， 其他数出现了m次， k< m, m>1, 找到出现k次的数
 *
 * 1. 统计二进制形式所有位置出现的1
 * 2. 然后 1 出现的次数 是 m的整数被的位置 表示 这个位置k不是1 ，不然肯定不是m的整数倍
 * 3. 把位置不是m整数的的1 拿出来就是 k的值
 *
 *
 * 对数期没跑通
 */


function right(arr, k, m) {
    let map = {}
    for (let i = 0;i < arr.length;i++) {
        let num = arr[i]
        if (map[num]) {
            map[num] ++
        } else {
            map[num] = 1
        }
    }
    for(let n in map) {
        if (map[n] % m !== 0) {
            console.log(n)
        }
    }
    return -1
}


function randomNumber(range) {
    return Number(Math.random() * (range + 1)) - Number(Math.random() * (range + 1))
}


function randomArray(maxKinds, range, k, m) {
    let ktimeNum = randomNumber(range)

    let times = k
    let numKinds = Number(Math.random()  * maxKinds) + 2
    let arr = Array(times + (numKinds - 1) * m)
    let index = 0
    for (;index < times;index++) {
        arr[index] = ktimeNum
    }
    numKinds --
    let set = new Set()
    set.add(ktimeNum)

    while (numKinds !== 0) {
        let curNum = 0
        do {
            curNum = randomNumber(range)
        } while (set.has(curNum))
        set.add(curNum)
        numKinds--
        for (let i = 0;i < m;i++) {
            arr[index++] = curNum
        }
    }

    for (let i = 0;i < arr.length;i++) {
        let j = Number(Math.random() * arr.length)
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }
    return arr
}


function findK(arr,k,m) {
    let ar = new Array(32).fill(0)
    for (let i = 0;i < arr.length;i++) {
        let num = arr[i]
        for(let j = 0;j < 32;j++) {
            ar[j] += 1 & (num >> j)
        }
    }
    let res = 0
    for (let i = 0;i < 32;i++) {
        if (ar[i] % m !== 0) {
            res |= 1 << i;
        }
    }

    console.log(res)
}

function test() {
    // let arr = [1,2,3,1,2,3,1,2,3,4]
    // findK(arr, 1, 3)
    // right(arr, 1, 3)
    let kinds = 5
    let range = 30
    let testTime = 10000
    let max = 9
    console.log("测试开始")
    console.log(randomArray(kinds,range,3,5))
}

test()

