//循环链表
//循环链表可以像链表一样只有单向引用，也可以向双链表一样有双向引用。循环链表和链表之间唯一的区别在于，最后一个
//元素的不再是undefined了，而是对第一个元素的引用。

import { LinkedList } from './finallyLinkedList'

class Node {
    constructor(element) {
        this.element = element
        this.next = undefined
    }
}


class CircularLinkedList extends LinkedList {
    constructor () {
        super()
    }
}

//CircularLinkedList类不需要任何额外的属性，所以直接继承LinkedList类并覆盖需要改写的方法即可。

//1.在任意位置插入新元素
class CircularLinkedList extends LinkedList {

    constructor () {
        super()
    }

    //1.向任意位置插入新元素
    insert(element, index) {
        if (0 <= index && idnex <= this.count) {
            const node = new Node(element)
            let current = this.head

            if (idnex === 0) {
                if (this.head == null) {
                    this.head = node
                    node.next = this.head    
                } else {
                    this.head = node
                    node.next = current
                    current = this.getElementAt(this.count) //先获取最后一个元素
                    current.next = this.head    //将最后一个元素指向第一个元素(head)
                }
            } else {
                const previous = this.getElementAt(index - 1)
                previous.next = node
                node.next = previous.next
            }
            this.count++
            return true
        } else {
            return false
        }
    }

    //2.从任意位置移出元素
    removeAt(index) {
        if (0 <= index && index < this.count) {
            let current = this.head

            if (index === 0) {
                if (this.count === 1) {
                    this.head = undefined
                } else {
                    const removed = this.head
                    this.head = current
                    current = this.getElementAt(index)
                    current.next = this.head
                    current = removed       //写这句话的目的是为了后面能够返回被删除元素的值
                }
            } else {
                const previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return current.element
        } else {
            return undefined
        }
    }
}
