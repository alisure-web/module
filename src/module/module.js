
/**
 * ES6模块主要有两个功能：export和import
 * */

import { bar, foo, func0, func1 } from "./export-1"
console.log(bar + "_" + foo);
func0();
func1();

import { myFunction, myObject } from "./export-2"
myFunction();
console.log(myObject);

import { square, diag, sqrt } from "./export-3"
console.log(square(12));
console.log(diag(3, 3));
console.log(sqrt(5));

import myObject4 from "./export-4"
console.log(myObject4.name);
console.log(myObject4.getName());

import myFunction5 from "./export-5"
console.log(myFunction5());

import { myFunction as myFunction6, myObject as myObject6} from "./export-6"
myFunction6();
console.log(myObject6);
