
function LinkedList(){
    this.head = null;
}
function Node(val){
    this.next = null;
    this.val = val;
}
LinkedList.prototype.push = function(val){

    if(!this.head){
        this.head = new Node(val);
    }
    else{
        var current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = new Node(val);
    }
}

LinkedList.prototype.remove = function (val) {
    var current = this.head;
    if (current.val === val) {
        this.head = current.next;
    }
    else {
        var prev = current;
        while (current.next) {
            if (current.val === val) {
                prev.next = current.next;
                break;
            }
            prev = current;
            current = current.next;
        }
        if (current.val === val) {
            prev.next = null;
        }
    }

}

function reversesll(sll){

    if(!sll.head || !sll.head.next) return sll;

    var nodes=[],
        current = sll.head;
    //storing all the nodes in an array
    while(current){
        nodes.push(current);
        current = current.next;
    }

    var reversedLL = new LinkedList();

    reversedLL.head = nodes.pop();
    current = reversedLL.head;

    var node = nodes.pop();
    //make sure to make next of the newly inserted node to be null
    //other wise the last node of your SLL will retain its old next.
    while(node){
        node.next = null;
        current.next = node;

        current = current.next;
        node = nodes.pop();
    }
    return reversedLL;
}
LinkedList.prototype.count = function(){
    var count = 0;
    if(!this.head) {
        return count;
    }
    var current = this.head;
    while (current){
        current = current.next;
        count = count + 1;
    }
    return count;
}
function kthFromEnd(sll, k){
    if(k <=0){
        return;
    }
    var kthNode;
    var current = sll.head;
    var i = 1;
    while(current){
        if(i === k){
            kthNode = sll.head;
        }
        else {
            if(i-k >0){
                kthNode = kthNode.next;
            }
        }
        i ++;
        current = current.next;
    }

    return kthNode;
}

function linkedListloop(sll){
    var slowpointer,fastpointer;
    slowpointer = sll.head;
    fastpointer = sll.head;
    while(slowpointer && fastpointer && fastpointer.next){
        slowpointer = slowpointer.next;
        fastpointer = fastpointer.next.next;

        if(slowpointer === fastpointer){
            return true;
        }
    }
    return false;

}



var sll = new LinkedList();

//push node
sll.push(2);
sll.push(3);
sll.push(4);





console.log(sll);
//console.log(reversesll(sll));
console.log(sll.count());
console.log(kthFromEnd(sll, 1));
console.log(kthFromEnd(sll, 2));
sll.head.next.next.next = sll.head.next.next
console.log(linkedListloop(sll));
