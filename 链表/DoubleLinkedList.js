//双向链表。双向链表和普通链表的区别在于，在链表中，一个节点只有链向下一个节点的链接；而在双向链表中，
//链接是双向的；一个链向下一个元素，一个链向上一个元素。
import { LinkedList } from './finallyLinkedList' 

class Node {
    constructor(element) {
        this.element = element
        this.next = undefined
    }
}



class DoublyNode extends Node {
    constructor (element, next, prev) {
        super(element, next)
        this.prev = prev   //prev属性用于保存对前一个元素的引用
    }
}

//注意：在双向链表中，我们保存了对第一个元素和最后一个元素的引用。
class DoubleLinkedList extends LinkedList {
    constructor () {
        super()
        this.tail = undefined   //新增的 tail用于保存对链表最后一个元素的引用
    }
}


//1.在任意位置插入新元素 insert(element, index)

class DoubleLinkedList extends LinkedList {
    constructor () {
        super()
        this.tail = undefined   //新增的 tail用于保存对链表最后一个元素的引用
    }

    //在任意位置插入一个元素
    insert (element, index) {
        if (0 <= index && index <= this.count) {
            const node = new DoublyNode(element)
            let current = this.head

            if (index === 0) {
                if (this.head == null) {
                    this.head = node
                    this.tail = node    //tail用于保存对最后一个元素的引用
                } else {
                    this.head = node
                    node.next = current
                    current.prev = node
                }
            } else if (index === this.count) {
                current = this.tail     //因为我们之前保存了对最后一个元素的引用
                current.next = node
                node.prev = current
                this.tail = node    //更新tail 让其指向链表中的最后一个元素
            } else {
                //在链表的中间插入元素，那么需要获取index元素和index元素的前一个元素
                let previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = node
                node.prev = previous
                node.next = current
                current.prev = node
            }
            this.count++
            return true
        }
        return false
    }
}


//2.从任意位置移除元素 removeAt(index)。从双向链表中移出元素与链表非常相似。唯一的区别就是，还需要设置前一个位置的指针。

class DoubleLinkedList extends LinkedList {
    constructor () {
        super()
        this.tail = undefined   //新增的 tail用于保存对链表最后一个元素的引用
    }

    //1.在任意位置插入一个元素
    insert (element, index) {
        if (0 <= index && index <= this.count) {
            const node = new DoublyNode(element)
            let current = this.head

            if (index === 0) {
                if (this.head == null) {
                    this.head = node
                    this.tail = node    //tail用于保存对最后一个元素的引用
                } else {
                    this.head = node
                    node.next = current
                    current.prev = node
                }
            } else if (index === this.count) {
                current = this.tail     //因为我们之前保存了对最后一个元素的引用
                current.next = node
                node.prev = current
                this.tail = node    //更新tail 让其指向链表中的最后一个元素
            } else {
                //在链表的中间插入元素，那么需要获取index元素和index元素的前一个元素
                let previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = node
                node.prev = previous
                node.next = current
                current.prev = node
            }
            this.count++
            return true
        }
        return false
    }

    //2.从任意位置移出元素
    removeAt(index) {
        if (0 <= index && index < this.count) {
            let current = this.head

            if (index === 0) {
                this.head = current.next

                if (this.count === 1) {
                    this.tail = undefined
                } else {
                    this.head.prev = undefined
                }
            } else if (index === this.count - 1) {
                current = this.tail
                this.tail = current.prev
                this.tail.next = undefined
            } else {
                current = this.getElementAt(index)  //首先找到需要删除的那个元素的位置
                const previous = current.prev
                //将previous与current的下一项链接起来——跳过current
                previous.next = current.next
                current.next.prev = previous
            }
            this.count--
            return current.element  //返回移除的那个元素的值
        } else {
            return undefined
        }
    }
}