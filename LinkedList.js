

//一.链表
//1.要存储多个元素，数组(或列表)可能是最常用的数据结构。但是这种数据结构有一个致命的缺点就是从数组的起点或中间部分插入或移除项的成本很高
//，因为需要移动元素。
//2.链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的，每一个元素有一个存储元素本身的节点和一个指向下一个元素
//的引用(也称指针或链接)组成。

//defaultEquals函数用来比较链表中的两个元素是否相等。
function defaultEquals (a,b) {
    return a === b
}
//Node类表示需要添加到链表中的项.它包含一个element属性，该属性表示要加入链表元素的值，以及一个next属性，该属性是指向链表中下一个
//元素的指针。
class Node{
    constructor (element) {
        this.element = element
        this.next = undefined
    }
}

//二.创建链表类
class LinkedList{
    constructor (equalsFn = defaultEquals) {
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }
}
//1.向链表尾部添加元素。可能有两种场景:链表为空，添加的是第一个元素；链表不为空，向其追加元素.
push (element) {
    const node = new Node(element)
    let current
    //判断链表是否为空,若为空直接将元素赋给head
    if (this.head == null) {
        this.head = node
    }else {
        current = this.head
        while (current.next != null) {   //获得链表中的最后一项
            current = current.next
        }
        //将其next赋为新元素,建立连接
        current.next = node
    }
    this.count++
}
//2.从链表中移除元素


