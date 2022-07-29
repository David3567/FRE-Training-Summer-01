function component(obj) {
    return function (target) {
        target.prototype.bind(obj);
    };
}
function foo() {
    console.log(this.name);
}
//# sourceMappingURL=index.js.map