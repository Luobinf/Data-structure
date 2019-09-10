//有序链表
//有序链表是指保持元素有序的链表结构。

import { LinkedList } from './linkedList'
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
}

function defaultCompare (a, b) {
    if (a === b) {
        return 0
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

class SortedLinkedList extends LinkedList {
    constructor (compareFn = defaultCompare) {
        super()
        this.compareFn = compareFn
    }

    //1.有序插入元素
    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0)
        }
        const position = this.getIndexNextSortedElement(element)
        return super.insert(element, position)
    }
    getIndexNextSortedElement (element) {

    }

}
