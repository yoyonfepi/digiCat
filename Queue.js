// A. Returns the correct size for the queue
// B. Maintain multiple rows of locks for queue


// _newestIndex which can tell us the largest number (key) assigned in the queue and property 
// _oldestIndex which can tell us the longest index number (key) in the queue

Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};

// next method is enqueue(data), purpose :
// Using _newestIndex as the key of this._storage and any data to add as the value of that key

Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};

// next step is dequeue(), purpose :
// Delete the oldest data in the queue and increase _oldestIndex (1)

// current value queue for this._oldestIndex. the second variable, deletedData, is assigned 
// the value contained in this._storage[oldestIndex]

Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
 
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
        
        // and then remove the oldest index in the queue. After it's deleted, increase 
        // this._oldestIndex by 1. Finally, restore the data that was just deleted
        return deletedData;
    }
};

// Whenever the values ​​of oldestIndex and newestIndex are not the same, 
// then we execute our previous logic

    


