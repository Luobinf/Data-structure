
//1.要存储多个元素，数组可能是最常用的数据结构。数组提供了一个便利的[]语法来访问其元素。然而，这种数据结构有一个缺点：
// 数组的大小是固定的，从数组的起点或中间插入元素或者移除元素的成本很高。因为大部分情况下数组的大小是固定的，所以需要移动元素，
//成本随之变高。

//2.链表不同于数组，链表中的元素在内存中不是连续存储的。每一个元素由一个存储元素本身的节点和一个指向下一个元素的引用组成。

// 与数组相比：链表的好处是删除或者添加元素的时候不需要移动其他元素。


// function defaultEquals (a, b) {
//     return a === b
// }

//创建链表
// class LinkedList {
//     constructor () {
//         this.count = 0   //存储链表中的元素数量
//         this.head = undefined   //用于保存第一个元素
//     }
// }

//Node类表示我们想要添加到链表中的项目。
class Node {
    constructor(element) {
        this.element = element
        this.next = undefined
    }
}


//1.向链表尾部添加元素

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
}

let list = new LinkedList()
list.push(5)
list.push(10)
console.log(list)

//2.从列表中移出元素

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

    removeAt(index) {
        if (0 <= index && index < this.count) {
            let current = this.head

            if (index === 0) {
                this.head = current.next
            } else {
                let previous
                for (let i = 0; i < index; i++) {
                    previous = current
                    current = current.next
                }
                //将previous与current的下一项连接起来；跳过current，从而移除它。
                previous.next = current.next
            }
            this.count--
            return current.element
        } else {
            return undefined
        }
    }
}

//注意下面是：循环迭代链表到达目标位置。由于这个方法经常使用，现在将它进行封装成函数的形式。

function getElementAt(index) {
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

//因此我们可以使用刚刚创建的getElementAt方法来重构remove方法。

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
}


//4.在任意位置插入元素
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
}

//5.indexOf方法: 返回一个元素在链表中的索引位置。若在链表中没有该元素则返回-1

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
}

//6.从链表中移除元素

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
}

//7.isEmpty、size、getHead方法

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
}

//8.toString方法
//toString方法会将LinkedList对象转换成一个字符串。

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