function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

function BinaryTree(){
    this.root = null;
}

BinaryTree.prototype.push = function(val){
    var currentNode;
    if(this.root === null){
        this.root = new Node(val);
    }
    else {
        currentNode = this.root;
        while(currentNode !== null){
            if(currentNode.value > val){
                if(!currentNode.left){
                    currentNode.left = new Node(val);
                    return;
                }
                currentNode = currentNode.left;

            }
            else if(currentNode.value < val){
                if(!currentNode.right){
                    currentNode.right = new Node(val);
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

}

var bt = new BinaryTree();
bt.push(5);
console.log(bt);
bt.push(3);
console.log(bt);
bt.push(8);
console.log(bt);


