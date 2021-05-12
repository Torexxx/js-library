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

    if (!this[0]) {
        return this;
    }
    
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
}

$.prototype.addAttribute = function(name, value) {
    for (let i = 0; i < this.length; i ++ ) { 
        this[i].setAttribute(name, value);
    }

    return this
}

$.prototype.deleteAttribute = function(name, value) {
    for (let i = 0; i < this.length; i ++ ) { 
        this[i].removeAttribute(name);
    }

    return this
}