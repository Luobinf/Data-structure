
//使用HashTable类

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

class HashTable {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn
        this.table = {}
    }

    //首先来实现散列函数
    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key
        }
        const tableKey = this.toStrFn(key)
        let hash = 0
        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i)
        }
        return hash % 37
    }

    hashCode(key) {
        return this.loseloseHashCode(key)
    }

    //将键和值加入散列表
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key)
            this.table[position] = new valuePair(key, value)
            return true
        } else {
            return false
        }
    }

    //从散列表中获取一个值
    get(key) {
        const valuePair = this.table[this.hashCode(key)]
        return valuePair == null ? undefined : valuePair.value
    }

    //从散列表中移除一个值
    remove(key) {
        const hash = this.hashCode(key)
        const valuePair = this.table[hash]
        if (valuePair != null) {
            delete this.table[hash]
            return true
        } else {
            return false
        }
    }
}

const hash = new HashTable()
hash.put('Jack', 'jack@email.com')          //Jack的散列值为7
hash.put('Jonathan', 'Jonathan@email.com')  //Jonathan的散列值为5
hash.put('Jamie', 'Jamie@email.com')        //Jamie的散列值为5
hash.put('Athelstan')                       //Athelstan的散列值为7

console.log(hash.table)


