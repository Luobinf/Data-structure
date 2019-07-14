
//一.首先我们需要创建一个基于数组的栈
// class Stack{
//     constructor() {
//         this.items = []
//     }
// }
//ps栈是一种后进先出的数据结构，被用在内存中保存变量，方法调用等，也被用于浏览器历史纪录栈。
//1.向栈添加元素。push
//push方法负责往栈里面添加新元素，该方法只添加元素到栈顶，也就是栈的末尾。push方法写法如下：
// class Stack{
//     constructor() {
//         this.items = []
//     }
//     push(element){
//         this.items.push(element)
//     }
// }
//2.从栈中移除元素
// class Stack{
//     constructor() {
//         this.items = []
//     }
//     push(element){
//         this.items.push(element)
//     }
//     pop(){
//         this.items.pop()
//     }
// }
//3.添加peek方法，用于查看栈顶的元素是什么。返回栈顶的元素。
// class Stack{
//     constructor() {
//         this.items = []
//     }
//     push(element){
//         this.items.push(element)
//     }
//     pop(){
//         this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
// }

//4.添加isEmpty方法。检查栈是否为空。
// class Stack{
//     constructor() {
//         this.items = []
//     }
//     push(element){
//         this.items.push(element)
//     }
//     pop(){
//         this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
// }

//5.size()返回栈里面元素的个数。
// class Stack{
//     constructor() {
//         this.items = []
//     }
//     push(element){
//         this.items.push(element)
//     }
//     pop(){
//         this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
//     size(){
//         return this.items.length
//     }
// }

//6.清空栈中的元素。clear()。也可以使用pop()方法不断清空栈中的元素进行实现。
class Stack{
    constructor() {
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
    clear(){
        this.items = []
    }
}

// const stack = new Stack()
// console.log(stack.isEmpty()) //true
//二.实现十进制转换成二进制

function decimlToBinary(decNumber) {
    let number = decNumber;
    let rem;
    let finallyBinaryValue = '';
    let stack = new Stack();
    while(number > 0){
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while(!stack.isEmpty()){
        finallyBinaryValue += stack.pop().toString()
    }
    return finallyBinaryValue;
}
console.log(decimlToBinary(10));
