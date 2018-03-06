var a = 5;
function fn() {
    console.log(a); 
}
fn();   //5

var b = 5;
function fn1(){
    var b = 10;
    console.log(b);
}
fn1();  //10

var c = 5;
function fn2(){
    let c = 10;
    console.log(c);
}
fn2();  //10

var d = 5;
function fn3(){
    console.log(d);
    let d = 10;         //let不允许与其同名的变量进入其作用域
}
fn3();  //ReferenceError: d is not defined