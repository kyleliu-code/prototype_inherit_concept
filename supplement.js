console.log('welcome to supplement.js');


// 原型继承注意点
// 系统在访问实例成员的时候，实例上没有 的成员，系统会遍历其原型链（应该说实例中存放着的是原型对象的指针）
// 所以说改变原型对象中的成员，实例访问 的时候会发生变化


// 那么我们在创建实例对象后，其已经保存了原型对象的引用了
// 我们去改变 构造函数的原型属性的时候，实例对象的原型对象还是之前的，因为其保存了原型对象的引用
// 应该这么说： 构造函数只负责创建实例，创建的时候F.prototype 就是赋值给了实例的指针变量（指向原型对象），创建后与实例就没有关系了
// 只不过一般情况下，构造函数的原型属性prototype 和实例的属性成员（指针）是指向同一个堆地址（原型）
//  所以说我们只看 各自的指针一定是没有错的。


// 案例分析1：

function Factory () {}
function Other() {}

Factory.prototype.age = '10';
Other.prototype.age ='3';

var f1 = new Factory; // f1 已经保存了 原型对象的引用
console.log('f1.age---',f1.age);

Factory.prototype = Other.prototype;

var f2 = new Factory;

console.log('f2.age---',f2.age); // f2 也保存了原型对象的引用，只不过已经不同了

// 案例分析2： 使用非标准化的 instance.__proto__就非常明显了
// 非常明显这两个指针 指向的空间地址不同

console.log('f1.__proto__---',f1.__proto__);
console.log('f2.__proto__---',f2.__proto__);