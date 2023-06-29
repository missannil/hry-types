import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { IfExtends } from "../../src/Any/IfExtends";

type Test1 = IfExtends<string, string, true, false>; // => true

TypeChecking<Test1, true, Test.Pass>;

type Test2 = IfExtends<string, number, true, false>; // => false

TypeChecking<Test2, false, Test.Pass>;

type Test3 = IfExtends<number, number, true, false>; // => true

TypeChecking<Test3, true, Test.Pass>;

type Test4 = IfExtends<number, string, true, false>; // => false

TypeChecking<Test4, false, Test.Pass>;

type Test5 = IfExtends<{ a: number }, { a: number }, true, false>; // => true

TypeChecking<Test5, true, Test.Pass>;

type Test6 = IfExtends<{ a: number }, { a: string }, true, false>; // => false

TypeChecking<Test6, false, Test.Pass>;

type Test7 = IfExtends<{ a: number }, { a: number; b: string }, true, false>; // => false

TypeChecking<Test7, false, Test.Pass>;

type Test8 = IfExtends<{ a: number; b: string }, { a: number }, true, false>; // => true

TypeChecking<Test8, true, Test.Pass>;

type Test9 = IfExtends<{ a: number }, { a: number; b?: string }, true, false>; // => true

TypeChecking<Test9, true, Test.Pass>;

type Test10 = IfExtends<{ a: number; b?: string }, { a: number }, true, false>; // => true

TypeChecking<Test10, true, Test.Pass>;
