console.log('welcome to 04_grial_mode.js');

// 首先这是我们推荐使用的模式 
// 是对 共享原型的 改进方案（解决了共享原型的 缺点）

var Parent4 = function () {
    this.money = 1000000;
    this.smoke= true;
    this.hobbies = '皮球';
}
Parent4.prototype.lastName = 'wang';
Parent4.prototype.honest = true;
var Son4 = function (name) {
    this.name = name;
}


var inherit = function (Origin, Target) {
    var F = function () {};// 临时构造函数（使用的目的在于自身没有属性成员，干净）
    F.prototype = Origin.prototype;
    Target.prototype = new F(); // 这样的目的是不继承父亲，只继承祖上的东西（跟共享原型的目的一样）
    Target.prototype.constructor = Target;
    Target.prototype.uber = Origin.prototype;// 知道自己的祖宗是谁
};

// YUI 中的高级写法
var parent4_0 = new Parent4;

var inherit = (function(){
    // 使用立即执行函数声明一个函数
    var F = function () {};
    return function (Origin, Target) {
        F.prototype = Origin.prototype;
        Target.prototype = new F;
        Target.prototype.constructor = Target;
        Target.prototype.uber = Origin.prototype;
    }
}());


inherit(Parent4, Son4);
var son4 = new Son4('小明');
Son4.prototype.honest = false;

var parent4_1  = new Parent4;

console.log('son4.honest--',son4.honest);
console.log('parent4_0.honest--',parent4_0.honest);
console.log('parent4_1.honest--',parent4_1.honest);



