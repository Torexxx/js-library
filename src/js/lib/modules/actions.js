import $ from '../core';

$.prototype.html = function(content) {
    
    for (let i = 0; i < this.length; i ++ ) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    } 
    return this;
}

$.prototype.eq = function(i) {
    return Object.assign(Object.create(this), {0: this[i], length: 1});
}

// alternative method

// $.prototype.eq = function(i) {
//     const swap = this[i];
//     const objLength = Object.keys(this).length; 
//     for (let i = 0; i < objLength; i ++ ) {
//           delete this[i];
//     }
//     this[0] = swap;
//     this.length = 1

//     return this
// }