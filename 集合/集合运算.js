//集合运算

//1.并集：对于给定的两个集合，返回一个包含两个集合中所有元素的新集合。
//2.交集：对于给定的两个集合，返回一个包含两个集合中共有的元素的新集合。
class Set {
    constructor() {
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

    //并集
    union(otherSet) {
        const unionSet = new Set()
        this.values().forEach(value => {
            unionSet.add(value)
        })
        otherSet.values().forEach( value => {
            unionSet.add(value)
        })
        return unionSet
    }

    //交集
    intersection (otherSet) {
        const intersectionSet = new Set()
        let biggerSet = this.values()       //使用了values()方法之后biggerSet、smallerSet就已经变成了数组了。
        let smallerSet = otherSet.values()

        if (smallerSet.length > biggerSet.length) {
            biggerSet = otherSet.values()
            smallerSet = this.values()
        }
        smallerSet.forEach( value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value)
            }
        })
        return intersectionSet
    }
}

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
const setB = new Set()
setB.add(1)
setB.add(2)
setB.add(3)
setB.add(4)

const intersectionAB = setA.intersection(setB)
console.log(intersectionAB.values()) //[2, 3]


