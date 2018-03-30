console.log('welcome to 03_share_prototype.js');

// 只继承祖上的（父亲原型属性上的东西）： 共享原型
// 添加些自己的特性
// 下面这种方式我们一般是不建议使用的

// 使用共享原型缺点： 
// 1. 新构建的父亲对象我们不想改变其原型属性上的东西
// 2. 已经存在的父亲对象的上的原型属性东西会发生改变（一般对我们已有项目）

var Parent3 = function () {
    this.money = 1000000;
    this.smoke= true;
    this.hobbies = '皮球';
}
Parent3.prototype.lastName = 'wang';
Parent3.prototype.honest = true;
var Son3 = function (name) {
    this.name = name;
}
var parent3 = new Parent3;
Son3.prototype = Parent3.prototype;

var son3 = new Son3('小明');
console.log('son3.name---', son3.name);
console.log('son3.somke---', son3.somke);
console.log('son3.lastName---', son3.lastName);

// 但是有一天 儿子想要 改变祖上的留下的东西，比如说 诚实，父亲不想改变

Son3.prototype.honest = false;

console.log('son3.honest---', son3.honest);
console.log('parent3.honest---', son3.honest); // 显然父亲的也被改变了

