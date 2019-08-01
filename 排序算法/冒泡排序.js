//一：冒泡排序
//冒泡排序是比较所有相邻的两个项，如果第一个比第二个大，则交换它们。元素项向上移动至正确的顺序，就好像气泡
//升至表面一样，因此叫做冒泡排序。

//冒泡排序一轮循环可以保证局部的最大值，即每一轮的最后一个是最大值。因此只需要进行四轮外循环。
let arr = [5,4,3,2,1]
function bubbleSort (arr) { 
    for (let i=0;i<arr.length-1;i++) {  //这里的arr.length-1表示需要数组需要经过多少轮排序
        for(let j=0;j<arr.length-1-i;j++) { //这里的arr.length-1-i表示需要数组每轮需要经过多少次内循环
            if (arr[j] > arr[j+1]) {
                // 交换位置
                [arr[j],arr[j+1]] =  [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
console.log(bubbleSort(arr))

//可以去掘金看看冒泡排序的流程图