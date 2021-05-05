const $ = function(selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this 
    }

    const elements = document.querySelectorAll(selector);
    Object.assign(this, elements);
    this.length = elements.length;
    return this;
}

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;