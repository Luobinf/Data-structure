//三插入排序
//插入排序每次排一个数组项，以此方式构建最后的排序数组。假定第一项已经排序了。接着，它和第二项进行比较——
//第二项是应该呆在原位还是插入到第一项之前呢？这样，头两项就已经正确排序，接着和第三项进行比较...以此类推

//方法一
function insertSort1 (arr) {
    // 插入排序认为第一项已经排列好，故只要排列arr.length-1轮
    let temp
    for (let i=1;i<arr.length;i++) {
        temp = arr[i]
        let j
        for (j = i;j > 0;j--) {
            if (arr[j-1] > temp) {
                arr[j] = arr[j-1]
            }else {
                break
            }
        }
        arr[j] = temp
    }
    console.log(arr)
}
insertSort1([3,5,1,4,2]) //测试 [ 1, 2, 3, 4, 5 ]
insertSort1([5,4,3,2,1]) //[ 1, 2, 3, 4, 5 ]

//方法二
function insertSort2 (arr) {
    let temp
    for (let i =1;i < arr.length;i++) {
        let j = i
        temp = arr[i]
        while(0 < j && arr[j-1] > temp) {
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp
    }
    console.log(arr)
}
insertSort2([1,2,3,4,5])  //测试 [ 1, 2, 3, 4, 5 ]
insertSort2([5,4,3,2,1])  //[ 1, 2, 3, 4, 5 ]