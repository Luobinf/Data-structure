class LinkedList {

    constructor() {
        this.count = 0
        this.head = undefined
    }

    push(element) {
        const node = new Node(element)
        let current
        if (this.head == null) {
            this.head = node
        } else {
            //如果链表中已经有元素存在，那么需要先拿到链表的最后一个元素，再将最后一个元素的next属性指向当前push进去的这个元素。
            current = this.head
            while (current.next != null) {
                current = current.next      //首先需要获取链表中的最后一项
            }
            current.next = node     //将最后一项的next属性赋为新元素，既将元素添加到链表中去。
        }
        this.count++
    }

    getElementAt(index) {
        if (0 <= index && index <= this.count) {
            let current = this.head
            for (let i = 0; i < index && current != null; i++) {
                current = current.next
            }
            return current
        } else {
            return undefined
        }
    }

    removeAt(index) {
        if (0 <= index && index < this.count) {
            let current = this.head

            if (index === 0) {
                this.head = current.next
            } else {
                let previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = current.next
            }
            this.count--
            return current.element
        } else {
            return undefined
        }
    }

    //在链表任意位置插入元素
    insert(element, index) {
        if (0 <= index && index <= this.count) {
            const node = new Node(element)

            if (index === 0) {
                const current = this.head
                this.head = node
                node.next = current
            } else {
                const previous = this.getElementAt(index - 1)
                const current = previous.next
                previous.next = node
                node.next = current
            }
            this.count++    //更新链表长度
            return true
        }
        return false
    }

    //返回元素在链表中的索引，若没有该元素则返回-1
    indexOf(element) {
        let current = this.head
        for (let i = 0; i < this.count && current != null; i++) {
            if (element === current.element) {
                return i
            }
            current = current.next
        }
        return -1
    }

    //从链表中移除元素
    remove(element) {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.size() === 0
    }

    getHead() {
        return this.head
    }

    toString() {
        if (this.head == null) {
            return ''
        }
        let objString = `${this.head.element}`
        let current = this.head.next
        
        for (let i = 0; i < this.count && current != null; i++) {
            objString = `${objString},${current.element}`
            current = current.next
        }
        return objString
    }
}

export default LinkedList