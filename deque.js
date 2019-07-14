
// //一.双端队列是一种结合了队列和栈的数据结构，即遵循了先进先出和后进先出的原则。
// //双端队列常常用于计算机中的撤销操作，例如要执行某一个操作，就进入队列，但是要撤销的时候就从队列的后面移除。

// //二.创建双端队列类(deque)

// // class Deque {
// //     constructor() {
// //         this.count = 0;
// //         this.lowestCount = 0;
// //         this.items = {};
// //     }
// // }
// //1.在双端队列中的后端添加新的元素。addBack

// addBack(element) {
//     this.items[this.count] = element;
//     this.count++;
// }

// //2.在双端队列的前端移除第一个元素 removeFront()
// removeFront () {
//     if (this.isEmpty()) {
//         return undefined;  //首先检查双端队列是否为空
//     }
//     let result = this.items[this.lowestCount];
//     delete this.items[this.lowestCount];
//     this.lowestCount ++;
//     return result;
// }

// //3.从双端队列后端移除第一个元素 removeBack()
// removeBack () {
//     if (this.isEmpty()) {
//         return undefined;
//     }
//     this.count--;
//     let result = this.items[count];
//     delete this.items[count];
//     return result;
// }

// //4.该方法返回双端队列前端的第一个元素peekFront()
// peekFront () {
//     if (this.isEmpty()) {
//         return undefined
//     }
//     return this.items[this.lowestCount]
// }

// //5.该方法返回双端队列后端的第一个元素peekBack()
// peekBack () {
//     if (this.isEmpty()) {
//         return undefined
//     }
//     return this.items[this.count - 1]
// }

// //6.该方法在双端队列前端添加新的元素addFront(element)
// addFront (element) {
//     if (this.isEmpty()) {
//         this.addBack(element)
//     } else if (this.lowestCount > 0) {
//         this.lowestCount--
//         this.items[this.lowestCount] = element
//     } else {
//         for (let i=this.count; i>0;i--) {
//             this.items[i] = this.items[i-1]
//         }
//         this.count++
//         this.lowestCount = 0
//         this.items[0] = element
//     }
// }
// //7.检查队列是否为空
// isEmpty () {
//     return this.count - this.lowestCount === 0
// }

// //8.返回队列中的元素个数
// size () {
//     return this.count - this.lowestCount
// }

//三.此时最终的一个deque类就创建好了
class Deque{
    constructor () {
        this.lowestCount = 0
        this.count = 0
        this.items = {}
    }
    isEmpty () {
        return this.count - this.lowestCount === 0
    }
    size () {
        return this.count - this.lowestCount
    }
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    removeFront () {
        if (this.isEmpty()) {
            return undefined;  //首先检查双端队列是否为空
        }
        let result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount ++;
        return result;
    }
    removeBack () {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        let result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peekFront () {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    peekBack () {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }
    addFront (element) {
        if (this.isEmpty()) {
            this.addBack(element)
        } else if (this.lowestCount > 0) {
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else {
            for (let i=this.count; i>0;i--) {
                this.items[i] = this.items[i-1]
            }
            this.count++
            this.lowestCount = 0
            this.items[0] = element
        }
    }
    toString () {
        if (this.isEmpty()) {
            return ''
        }
        let objToString = `${this.items[this.lowestCount]}`
        for(let i=this.lowestCount+1;i<this.count;i++){
            objToString = `${objToString},${this.items[i]}`
        }
        return objToString
    }
}
// const deque = new Deque()
// console.log(deque.isEmpty())
// deque.addBack('john')
// deque.addBack('jack')
// console.log(deque.toString())
// deque.addBack('nihao')
// console.log(deque.toString())
// console.log(deque.size())
// console.log(deque.isEmpty())
// deque.removeFront()
// console.log(deque.toString())
// deque.addFront('John')
// console.log(deque.toString())

//四.使用队列和双端队列来解决一些问题
//使用双端队列来解决回文字符串，形如madam的字符，就是正反都能读通的单词、词组、数或一系列的字符串。

function palindromeChecker (aString) {
    if (aString === undefined || aString === null || (aString !==null && aString.length === 0)) {
        return false
    }
    const deque = new Deque()
    const lowerString = aString.toLocaleLowerCase().split(' ').join('')
    let isEqual = true
    let firstChar,lastChar
    for(let j=0;j<lowerString.length;j++) {
        deque.addBack(lowerString[j])
    }
    while(deque.size() > 1 && isEqual === true) {
        firstChar = deque.removeFront()
        lastChar = deque.removeBack()
        if (firstChar !== lastChar) {
            isEqual = false
            return isEqual
        }
    }
    return isEqual
}
//以下是测试用例
console.log(palindromeChecker('ab'))  //false
console.log(palindromeChecker('a'))   //true
console.log(palindromeChecker('madam')) //true


// let str = 'hello'
// console.log(str[0])
// console.log('hello world'.split(' ').join(''))  //join方法用于将数组中的每一个元素链接成字符串