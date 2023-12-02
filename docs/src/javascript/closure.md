# 闭包

## 一、概念

- 闭包的机制：函数嵌套函数，内部函数可以引用外部函数的参数和变量。参数和变量不会被**垃圾回收机制**收回。
- 闭包是可以访问另一个函数作用域中的变量的函数

## 二、闭包的作用

1. 可以在函数的外部访问到函数内部的局部变量

2. 函数内部的变量始终保存在内存中，不会随着函数的结束而销毁

   - ```javascript
     function createCounter() {
       var count = 0;
       return function() {
         return ++count;
       };
     }
     var counter = createCounter();
     console.log(counter()); // 输出：1
     console.log(counter()); // 输出：2
     console.log(counter()); // 输出：3
     ```

## 三、闭包的类型

1. 普通闭包

   - 普通闭包是指一个函数内部定义了另一个函数，并且内部函数引用了外部函数的变量。这种情况下，内部函数会捕获外部函数的变量，并可以在外部函数执行完毕后继续使用。

   - ```javascript
     function outer() {
       var outer = '执行了outer';
       function innerFunc() {
         console.log(outer);
       }
       return innerFunc();
     }
     
     var closureFunction = outer();
     closureFunction(); // 输出：执行了outer
     ```

2. 立即调用函数表达式闭包

   - 通过将函数定义包裹在括号内并立即调用它，你可以创建一个在执行后仍然具有访问外部作用域的函数。

   - ```javascript
     function outer() {
       var outer = '执行了outer';
       function innerFunc() {
         console.log(outer);
       }
       return innerFunc();
     }
     outer(); // 输出：执行了outer
     ```
