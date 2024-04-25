function twoSum(nums, target) {
    let map = {}
    for (let i = 0;i < nums.length;i++) {
        if (map[target - nums[i]] !== undefined) {
            return [map[target - nums[i]], i]
        }
        map[nums[i]] = i
    }

}


function test() {
    let arr = [2,7,20,13]
    console.log(twoSum(arr, 9));
}

test()