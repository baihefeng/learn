/**
 * Created by neo.white on 2016/11/24.
 */
/**
 * 练习新的变量命名规则
 * let:声明可变变量
 * const:声明不可变变量
 * */
'use strict';

var g = require('../../../library/getGlobal'),
    path = require('path');

console.log(__dirname);
//let
var _a$b = { a: 1, b: 2 },
    c = _a$b.a,
    d = _a$b.b;


console.log(c);
console.log(d);
{
  console.log(c + d);
}
/*
const a = [];
a.push(5);
console.log(a);
*/