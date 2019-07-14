
//一.队列是一种先进先出的一组有序的项。队列在尾部添加新元素，在头部移除元素。最新添加的元素必须排在队列的末尾。


//创建队列,使用对象来存储

// class Queue{
//     constructor(){
//         this.count = 0;
//         this.lowestCount = 0;
//         this.items = {};
//     }
//     enqueue(element){
//         this.items[this.count] = element;
//         this.count++;
//     }
// }
// //1.向队列添加新元素(enqueue)，队列只能在尾部添加新元素，也即不能插队.
// // enqueue(element){
// //     this.items[this.count] = element;
// //     this.count++;
// // }

// //2.从队列中移除元素dequeue().
// class Queue{
//     constructor(){
//         this.count = 0;
//         this.lowestCount = 0;
//         this.items = {};
//     }
//     enqueue(element){
//         this.items[this.count] = element;
//         this.count++;
//     }
//     dequeue() {
//         if(this.isEmpty()){
//             return undefined;
//         }
//         const result = this.items[this.lowestCount];
//         delete this.items[this.lowestCount];
//         this.items.lowestCount++;
//         return result;
//     }
// }
// //3.查看队列头元素
// class Queue{
//     constructor(){
//         this.count = 0;
//         this.lowestCount = 0;
//         this.items = {};
//     }
//     enqueue(element){
//         this.items[this.count] = element;
//         this.count++;
//     }
//     dequeue() {
//         if(this.isEmpty()){
//             return undefined;
//         }
//         const result = this.items[this.lowestCount];
//         delete this.items[this.lowestCount];
//         this.items.lowestCount++;
//         return result;
//     }
//     peek() {
//         if(this.isEmpty()){
//             return undefined;
//         }
//         return this.items[this.lowestCount]
//     }
// }

// //4.检查队列是否为空，并获取它的长度isEmpty()、size()
// class Queue{
//     constructor(){
//         this.count = 0;
//         this.lowestCount = 0;
//         this.items = {};
//     }
//     enqueue(element){
//         this.items[this.count] = element;
//         this.count++;
//     }
//     dequeue() {
//         if(this.isEmpty()){
//             return undefined;
//         }
//         const result = this.items[this.lowestCount];
//         delete this.items[this.lowestCount];
//         this.items.lowestCount++;
//         return result;
//     }
//     peek() {
//         if(this.isEmpty()){
//             return undefined;
//         }
//         return this.items[this.lowestCount]
//     }
//     isEmpty() {
//         return this.count - this.lowestCount === 0;
//     }
//     size(){
//         return this.count - this.lowestCount === 0;
//     }
// }

// //5.清空队列clear().

// class Queue{
//     constructor(){
//         this.count = 0;
//         this.lowestCount = 0;
//         this.items = {};
//     }
//     enqueue(element){
//         this.items[this.count] = element;
//         this.count++;
//     }
//     dequeue() {
//         if(this.isEmpty()){
//             return undefined;
//         }
//         const result = this.items[this.lowestCount];
//         delete this.items[this.lowestCount];
//         this.items.lowestCount++;
//         return result;
//     }
//     peek() {
//         if(this.isEmpty()){
//             return undefined;
//         }
//         return this.items[this.lowestCount]
//     }
//     isEmpty() {
//         return this.count - this.lowestCount === 0;
//     }
//     size(){
//         return this.count - this.lowestCount === 0;
//     }
//     clear() {
//         this.items = {};
//         this.count = 0;
//         this.lowestCount = 0;
//     }
// }
//6.创建toString方法
class Queue{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }
    dequeue() {
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount]
    }
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }
    size(){
        return this.count - this.lowestCount;
    }
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString(){
        if(this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for(let i=this.lowestCount+1;i<this.count;i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
//二.使用Queue类
// const queue = new Queue();
// queue.enqueue('john')
// queue.enqueue('jack')
// queue.enqueue('tom')
// console.log(queue.items)
// queue.dequeue()
// console.log(queue.items)

//循环队列击鼓传花游戏
function hotPotato (elementsList,num) {
    const queue = new Queue()
    const elimitatedList = []
    for(let i = 0;i < elementsList.length; i++) {
        queue.enqueue(elementsList[i])
    } 
    while (queue.size() > 1) {
        for (let j=0;j<num;j++) {
            queue.enqueue(queue.dequeue())
        }
        elimitatedList.push(queue.dequeue())
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()
    }
}
const names = ['J','C','H','N']
const result = hotPotato(names,2);
console.log(result.winner)




