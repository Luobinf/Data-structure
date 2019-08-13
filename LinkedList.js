

//一.链表
//1.要存储多个元素，数组(或列表)可能是最常用的数据结构。但是这种数据结构有一个致命的缺点就是从数组的起点或中间部分插入或移除项的成本很高
//，因为需要移动元素。
//2.链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的，每一个元素有一个存储元素本身的节点和一个指向下一个元素
//的引用(也称指针或链接)组成。

//defaultEquals函数用来比较链表中的两个元素是否相等。
function defaultEquals(a, b) {
    return a === b
}
//Node类表示需要添加到链表中的项.它包含一个element属性，该属性表示要加入链表元素的值，以及一个next属性，该属性是指向链表中下一个
//元素的指针。
class Node {
    constructor(element) {
        this.element = element
        this.next = undefined
    }
}

//二.创建链表类
// class LinkedList{
//     constructor (equalsFn = defaultEquals) {
//         this.count = 0
//         this.head = undefined
//         this.equalsFn = equalsFn
//     }
// }

//1.向链表尾部添加元素。可能有两种场景:链表为空，添加的是第一个元素；链表不为空，向其追加元素.
//count表示链表中的总的元素个数.
class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.head = undefined
        this.count = 0
        this.equalsFn = equalsFn
    }
    push(element) {
        const node = new Node(element)
        let current
        //当链表为空时，也即链表中一个元素也没有
        if (this.head === undefined || this.head === null) {
            this.head = node
        } else {
            current = this.head
            //获取最后链表的最后一个元素，只要最后一个元素的next为undefined时，那么该元素就是最后一个元素，
            //只需要将新的node赋值给最后一个元素的next属性就可以了.
            //current.next != null 等价于current.next !== null && current.next !== undefined
            while (current.next != null) {
                current = current.next
            }
            //将next赋值为新元素，建立链接
            current.next = node
        }
        this.count++  //元素添加到链表之后,则将总数加一.
    }
}
//测试: 
// const list = new LinkedList()
// list.push(15)
// list.push(88)
// list.push(23)
// console.log(list)

//2.从链表中移除元素
class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.head = undefined
        this.count = 0
        this.equalsFn = equalsFn
    }
    push(element) {
        const node = new Node(element)
        let current
        //当链表为空时，也即链表中一个元素也没有
        if (this.head === undefined || this.head === null) {
            this.head = node
        } else {
            current = this.head
            //获取最后链表的最后一个元素，只要最后一个元素的next为undefined时，那么该元素就是最后一个元素，
            //只需要将新的node赋值给最后一个元素的next属性就可以了.
            //current.next != null 等价于current.next !== null && current.next !== undefined
            while (current.next != null) {
                current = current.next
            }
            //将next赋值为新元素，建立链接
            current.next = node
        }
        this.count++  //元素添加到链表之后,则将总数加一.
    }
    //给出需要删除元素的位置(这里是index表示)来删除元素
    removeAt(index) {
        //检查边界值
        if (0 <= index && index < this.count) {
            let current = this.head

            //移除第一项
            if (index === 0) {
                this.head = current.next
            } else {
                let previous
                for (let i = 0; i < index; i++) {
                    previous = current
                    current = current.next
                }
                //将previous与current的下一项连接起来:那就会跳过current,从而移除它.
                previous.next = current.next
            }
            this.count--
            return current.element
        }

        //若给的索引值超出边界了,则返回undefined
        return undefined
    }
}

//3.循环迭代链表直到目标位置
//在remove方法中,需要迭代整个链表直到到达我们的目标索引index(位置).这一部分代码会经常用到,因此将它做成一个函数,以便复用.
function getElementAt(index) {
    //检查边界值
    if (0 <= index && index < this.count) {
        let current = this.head
        for (let j = 0; j < index; j++) {
            current = current.next
        }
        return current
    }
    return undefined
}

//4.重构remove方法,现在remove就可以变成下面这个样子了.
// removeAt(index) {
//     //检查边界值
//     if (0 <= index && index < this.count) {
//         let current = this.head

//         //移除第一项
//         if (index === 0) {
//             this.head = current.next
//         } else {
//             let previous = this.getElementAt (index - 1)
//             current = this.getElementAt (index)
//             //将previous与current的下一项连接起来:那就会跳过current,从而移除它.
//             previous.next = current.next
//         }
//         this.count--
//         return current.element
//     }

//     //若给的索引值超出边界了,则返回undefined
//     return undefined
// }
class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.head = undefined
        this.count = 0
        this.equalsFn = equalsFn
    }
    push(element) {
        const node = new Node(element)
        let current
        //当链表为空时，也即链表中一个元素也没有
        if (this.head === undefined || this.head === null) {
            this.head = node
        } else {
            current = this.head
            //获取最后链表的最后一个元素，只要最后一个元素的next为undefined时，那么该元素就是最后一个元素，
            //只需要将新的node赋值给最后一个元素的next属性就可以了.
            //current.next != null 等价于current.next !== null && current.next !== undefined
            while (current.next != null) {
                current = current.next
            }
            //将next赋值为新元素，建立链接
            current.next = node
        }
        this.count++  //元素添加到链表之后,则将总数加一.
    }
    //给出需要删除元素的位置(这里是index表示)来删除元素
    removeAt(index) {
        //检查边界值
        if (0 <= index && index < this.count) {
            let current = this.head
    
            //移除第一项
            if (index === 0) {
                this.head = current.next
            } else {
                let previous = this.getElementAt (index - 1)
                current = this.getElementAt (index)
                //将previous与current的下一项连接起来:那就会跳过current,从而移除它.
                previous.next = current.next
            }
            this.count--
            return current.element
        }
    
        //若给的索引值超出边界了,则返回undefined
        return undefined
    }
    getElementAt(index) {
        //检查边界值
        if (0 <= index && index < this.count) {
            let current = this.head
            for (let j = 0; j < index; j++) {
                current = current.next
            }
            return current
        }
        return undefined
    }
}

//5.在任意位置插入元素  insert(element, position): 用于向链表的特定位置插入一个新元素.
class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.head = undefined
        this.count = 0
        this.equalsFn = equalsFn
    }
    push(element) {
        const node = new Node(element)
        let current
        //当链表为空时，也即链表中一个元素也没有
        if (this.head === undefined || this.head === null) {
            this.head = node
        } else {
            current = this.head
            //获取最后链表的最后一个元素，只要最后一个元素的next为undefined时，那么该元素就是最后一个元素，
            //只需要将新的node赋值给最后一个元素的next属性就可以了.
            //current.next != null 等价于current.next !== null && current.next !== undefined
            while (current.next != null) {
                current = current.next
            }
            //将next赋值为新元素，建立链接
            current.next = node
        }
        this.count++  //元素添加到链表之后,则将总数加一.
    }
    //给出需要删除元素的位置(这里是index表示)来删除元素
    removeAt(index) {
        //检查边界值
        if (0 <= index && index < this.count) {
            let current = this.head
    
            //移除第一项
            if (index === 0) {
                this.head = current.next
            } else {
                let previous = this.getElementAt (index - 1)
                current = this.getElementAt (index)
                //将previous与current的下一项连接起来:那就会跳过current,从而移除它.
                previous.next = current.next
            }
            this.count--
            return current.element
        }
    
        //若给的索引值超出边界了,则返回undefined
        return undefined
    }

    //获取指定索引位置的元素
    getElementAt(index) {
        //检查边界值
        if (0 <= index && index <= this.count) {
            let current = this.head
            for (let j = 0; j < index; j++) {
                current = current.next
            }
            return current
        }
        return undefined
    }

    //在任意位置插入元素
    insert (element, index) {

        if (0 <= index && index <= this.count) {    //也可以向链表的末尾添加元素
            const node = new Node(element)
    
            //在第一个位置插入节点
            if (index === 0) {
                const current = this.head
                this.head = node
                node.next = current
            } else {
                const current = this.getElementAt(index)
                const previous = this.getElementAt(index-1)
                previous.next = node
                node.next = current
            }
            this.count++
            return true
        }
        return false
    }
}

//6.indexof方法：返回一个元素的索引位置


