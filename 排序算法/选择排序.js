//二.选择排序
//选择排序是先找出数据结构中所有元素的最小值并和数据结构中的第一个元素交换，然后再从剩下的元素中找出最小值，与第二个元素交换位置...依次类推
let arr = [5,4,3,2,1]
function selectSort(arr) {
    let minIndex,t
    for (let j=1;j<arr.length;j++) {
        minIndex = j-1
        for (let i=j;i<arr.length;i++) {
            if (arr[minIndex] > arr[i]) {
                minIndex = i
            }
        }
        t = arr[minIndex]
        arr[minIndex] = arr[j-1]
        arr[j-1] = t
    }
    console.log(arr)
}
selectSort(arr)

// let arr = [5,4,3,2,1]
// function selectSort (arr) {
//     let minIndex
//     let t
//     for (let i=0;i<arr.length-1;i++) {
//         minIndex = i
//         for (let j=i;j<arr.length;j++) {
//             if (arr[minIndex] > arr[j]) {
//                 minIndex = j
//             }
//         }
//         t = arr[minIndex]
//         arr[minIndex] = arr[i]
//         arr[i] = t
//     }
//     console.log(arr)
// }
// selectSort(arr)