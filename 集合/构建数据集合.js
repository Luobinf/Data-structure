//集合
//集合是由一组无序且唯一(即不能重复)的项组成的。应用在计算机科学的数据结构中。

//创建集合类
// class Set {
//     constructor () {
//         this.items = {}
//     }
// }

//我们使用对象来表示集合(items)，当然也可以使用数组来表示。
//1.add(element):向集合添加一个新元素
//2.delete(element):从集合中删除一个元素。
//3.has(element)：如果元素在集合中，返回true，否则返回false。
//4.clear(): 移除集合中的所有元素。
//5.size()：返回几何中所包含元素的数量。它与数组的length属性相似。
//6.values()：返回一个包含集合中所有元素的数组

//一。首先要实现的是has(element)方法，因为它会被add、delete等其他方法调用。它用来检验某一个元素是否存在于集合中。

class Set {

    constructor () {
        this.items = {}
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element)
    }

    add(element) {
        if (!this.has(element)) {
            this.items[element] = element
            return true
        } else {
            return false
        }
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element]
            return true
        } else {
            return false
        }
    }

    //移除集合中的所有值
    clear() {
        this.items = {}
    }

    size() {
        return Object.keys(this.items).length
    }

    //该方法返回一个包含集合中所有元素的数组,Object.values方法只支持现代浏览器。
    values() {
        return Object.values(this.items)
    }
}

// 使用Set类

const set = new Set()
set.add(1)
set.add(2)
console.log(set.keys())
