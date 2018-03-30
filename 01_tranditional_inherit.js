console.log('welcom to 01_tranditional_inherit.js');

// 祖上和父亲的东西都会别继承下来： 全继承
// 也可以添加自己的特性（各种模式都是可以添加自己特性的）
var Parent1 = function () {
    this.age = 48;
    this.smoke= true;
    this.hobbies = '皮球';
}
Parent1.prototype.lastName = 'wang';
Parent1.prototype.honest = true;
var Son1 = function () {
    this.name = '小明';
}

Son1.prototype = new Parent1();

var son1 = new Son1();

console.log('son1.honest--',son1.honest);
console.log('son1.age--',son1.age);
console.log('son1.name--',son1.name);
