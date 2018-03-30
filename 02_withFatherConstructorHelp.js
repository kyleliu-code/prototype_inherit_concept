console.log('welcome to 02_withFatherConstructorHelp.js');

// 只继承父亲的东西： 只继承父亲的 
// 祖上的（父亲原型对象上的东西不继承）

var Parent2 = function () {
    this.money = 1000000;
    this.smoke= true;
    this.hobbies = '皮球';
}
Parent2.prototype.lastName = 'wang';
Parent2.prototype.honest = true;
var Son2 = function (name) {
    Parent2.apply(this);
    // 其实就算 父亲有名字， 也可以在实例中 顶替 掉
    this.name = '小明';
}

var son2 = new Son2();

console.log('son2.money--',son2.money);
console.log('son2.lastName--',son2.lastName); // undefined
console.log('son2.name--',son2.name);

