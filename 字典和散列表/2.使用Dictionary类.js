
//使用Dictionary类

function defaultToString(item) {
    if (item === null) {
        return 'NULL'
    } else if (item === undefined) {
        return 'UNDEFINED'
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`
    } else {
        return item.toString()
    }
}

class valuePair {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
    toString() {
        return `[#${this.key}: ${this.value}]`
    }
}

class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }

    hasKey(key) {
        return this.table[this.toStrFn(key)] != null
    }

    set(key, value) {
        if (key != null && value != null) {
            const tableKey = this.toStrFn(key)
            this.table[tableKey] = new valuePair(key, value)
            return true
        } else {
            return false
        }
    }

    //从字典中移除一个值
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)]
            return true
        } else {
            return false
        }
    }

    //从字典中检索一个值
    get(key) {
        const valuePair = this.table[this.toStrFn(key)]
        return valuePair == null ? undefined : valuePair.value
    }

    //keys、values、valuePairs方法
    keyValues() {
        return Object.values(this.table)
    }

    //该方法用于返回Dictionary类中用于识别值的所有(原始)键名，如下所示。
    keys() {
        return this.keyValues().map(valuePair => valuePair.key)
    }

    //该方法用于返回一个字典包含的所有值构成的数组，与keys方法类似。
    values() {
        return this.keyValues().map(valuePair => valuePair.value)
    }

    //用forEach迭代字典中的每一个键值对。
    forEach(callbackFn) {
        const valuePairs = this.keyValues()
        for (let i = 0; i < valuePairs.length; i++) {
            const result = callbackFn(valuePairs[i].key, valuePairs[i].value)
            // console.log(result)
            if (result === false) {
                break
            }
        }
    }

    //返回字典中的值的个数
    size() {
        return Object.keys(this.table).length
    }

    isEmpty() {
        return this.size() === 0
    }

    clear() {
        this.table = {}
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }
        const valuePairs = this.keyValues()
        let objString = `${valuePairs[0].toString()}`
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString},${valuePairs[i].toString()}`
        }
        return objString
    }
}

const dictionary = new Dictionary()

dictionary.set('A','A@qq.com')
dictionary.set('B','B@qq.com')
dictionary.set('C','C@qq.com')

console.log(dictionary)
console.log(dictionary.hasKey('A'))
console.log(dictionary.size())
console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.get('A'))

dictionary.remove('A')

console.log(dictionary)
console.log(dictionary.hasKey('A'))
console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.keyValues())

//要使用forEach方法：可以使用以下代码。
dictionary.forEach( (k, v) => {
    console.log('forEach: ', `key: ${k}, value: ${v}`)
})