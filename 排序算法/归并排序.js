//归并排序
//归并排序是一种分而治之算法。其思想是将原始数组切分成较小的数组。直到每个小数组只有一个位置，然后将小数组逐渐归并成较大的数组，
//直到最后只有一个排序完毕的大数组。

function mergeSort (arr) {
    if (arr.length > 1) {
        let length = arr.length
        let middle = Math.floor(length / 2)
        let left = mergeSort(arr.slice(0, middle))
        let right = mergeSort(arr.slice(middle, length))
        arr = merge(left,right)
    }
    return arr
}

function merge (left,right) {
    let i = 0,j = 0
    const result = []
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}
console.log(mergeSort ([8,6,5,7]))


