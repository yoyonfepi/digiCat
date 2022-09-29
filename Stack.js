// create a constructor named Stack. Each Stack instance will have 
// two properties: _size and _storage

// 
// [this._storage] allows each Stack instance to have its own container for storing data,
// [this._size] reflects the number of times the data was pushed to the latest version of 
// the Stack. If a new instance of the Stack is created and data is pushed into storage, 
// then this._size will increase by 1. If data is pushed, again, into the stack,
// this._size will increase to 2. If data is removed from the stack, then this._size will 
// reduce to 1

function Stack() {
    this._size = 0;
    this._storage = {};
}

Stack.prototype.push = function(data) {
    // increases the size of our storage
    var size = this._size++;
 
    // assigns size as a key of storage
    // assigns data as the value of this key
    this._storage[size] = data;
};

Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;
 
    if (size) {
        deletedData = this._storage[size];
 
        delete this._storage[size];
        this._size--;
 
        return deletedData;
    }
};
