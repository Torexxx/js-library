import $ from '../core';

$.prototype.addClass = function(...classNames) {
    for (let i = 0; i < this.length; i ++ ) {
        if (!this[i].classList) {
           continue;
        }
        this[i].classList.add(...classNames);
    }
    return this;

}

$.prototype.removeClass = function(...classNames) {
    for (let i = 0; i < this.length; i ++ ) {
        if (!this[i].classList) {
            continue;
         }
        this[i].classList.remove(...classNames);
    }
    return this;
}

$.prototype.toggleClass = function(...classNames) {
    
    for (let i = 0; i < this.length; i ++ ) {
        if (!this[i].classList) {
            continue;
         }
        if (this[i].classList.contains(...classNames)) {
            this[i].classList.remove(...classNames);
        } else {
            this[i].classList.add(...classNames);
        }
    }
    return this;
}

$.prototype.hasClass = function(classNames) {
    let res;
    for (let i = 0; i < this.length; i ++ ) {
        if (!this[i].classList) continue;
         
         res = this[i].classList.contains(classNames);
         console.info(res);
         
         if (res) break;
    }
    return res;


    // TODO add/remove attributes
}
