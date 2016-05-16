<<<<<<< HEAD

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
=======
function LinkedList() {
    this.head = null;
}

function Node(val) {
    this.val = val;
    this.next = null;
}

LinkedList.prototype.push = function(val) {
    var current = this.head;

    if (this.head === null) {
        this.head = new Node(val);
    } else {
        while (current.next) {
            current = current.next;
            console.log(current);
        }
        current.next = new Node(val);
    }
}

var nl = new LinkedList();
nl.push(3);
nl.push(4);
nl.push(5);
nl.push(6);


console.log(nl);
>>>>>>> a7351065e77dad06be46c1e2e53e776bbfd1207d

