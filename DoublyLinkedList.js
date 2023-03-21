class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value){
    var node = new Node(value);
    if(this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop(){
    if (this.tail != null) {
      var value = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return value;
      }
      this.tail = this.tail.previous;
      this.tail.next = null;
      this.length--;
      value.previous = null;
      return value;
    } else {
      return undefined;
    }
  }

  shift(){
    if (this.length > 0) {
      var value = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return value;
      }
      this.head = this.head.next;
      this.head.previous = null;
      this.length--;
      value.next = null;
      return value;
    }
    return undefined;
  }

  unshift(value) {
    var node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index){
    if (index < 0 || index >= this.length) {return null;}
    if (index <= this.length/2) {
      var val = this.head;
      for (var i = 0; i < this.length/2 + 1; i++) {
        if (i === index) {
          return val;
        }
        val = val.next;
      }
    } else {
      var val = this.tail;
      for (var i = this.length - 1; i >= this.length/2; i--) {
        if (index === i) {
          return val;
        }
        val = val.previous;
      }
    }
  }

  set(index, newValue){
    if (index < 0 || index >= this.length) {return null;}
    if (index <= this.length/2) {
      var val = this.head;
      for (var i = 0; i < this.length/2 + 1; i++) {
        if (i === index) {
          val.value = newValue;
          return val;
        }
        val = val.next;
      }
    } else {
      var val = this.tail;
      for (var i = this.length - 1; i >= this.length/2; i--) {
        if (index === i) {
          val.value = newValue;
          return val;
        }
        val = val.previous;
      }
    }
  }


}


var list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list.set(1,6));
console.log(list)