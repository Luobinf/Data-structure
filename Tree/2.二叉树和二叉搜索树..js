
// 一。什么是二叉树：二叉树中的节点最多只能有两个子节点，一个是左侧子节点，一个是右侧子节点。

// 二。二叉搜索树：是二叉树中的一种，但是左侧节点存储比父节点小的值，在右侧节点存储比父节点大
//的值。

//注：二叉搜索树具有如下性质：
// 1.如果节点的左子树不空，则左子树上所有结点的值均小于等于它的根结点的值；
// 2.如果节点的右子树不空，则右子树上所有结点的值均大于等于它的根结点的值；
// 3.任意节点的左、右子树也分别为二叉搜索树


//三。创建BinarySearchTree类  树中的节点称为键

//1.先创建Node类来表示二叉搜索树中的每一个节点，代码如下：
class Node {
    constructor (key) {
        this.key = key  //节点值
        this.left = null    //左侧子节点引用
        this.right = null   //右侧子节点引用
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null
    }

    //向二叉搜索树中插入一个键
    insert(key) {
        if (this.root == null) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }

    //node为根节点，key为新节点
    insertNode (node, key) {
        if (key < node.key) {
            if (node.left == null) {
                node.left = new Node(key)
            } else {
                this.insertNode (node.left, key)
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key)
            } else {
                this.insertNode(node.right, key)
            }
        }
    }
}


const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
console.log(tree)