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

