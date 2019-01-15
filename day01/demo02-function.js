/*
*
* 箭头函数：不具备 this arguments
* 如何更改this指向？
* call  apply bind
* var that=this;
*
* 如何判断this 指向的是谁？  看谁调用的 this就指向谁
*箭头函数只有一个参数的时候省滤小括号，如果函数体内有返回值（return）可以省略大括号和return
*
*
* 闭包：函数执行的一瞬间..,,,,(不销毁的作用域，叫闭包)，但执行后的结果必须是引用数据类型，被外界变量接受，此时这个函数不会被销毁（模块化）；
*
* */
/*
function a(b){
    return function(c){
        console.log(c);
    }
}
let a= b=>{
    return c=>{
        return b+c;
    }
}
let a= b=>c=> b+c;
console.log(a(1)(2));

*/

