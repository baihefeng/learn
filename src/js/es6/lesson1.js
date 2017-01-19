/**
 * Created by neo.white on 2016/11/24.
 */
/**
 * 练习新的变量命名规则
 * let:声明可变变量
 * const:声明不可变变量
 * */
'use strict';
const g = require('../../../library/getGlobal'),
	path = require('path');

console.log(__dirname)
//let
let {a:c,b:d} = {a:1,b:2};

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

