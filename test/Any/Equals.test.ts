// test for src\Any\Equals.ts
import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { Equals } from "../../src/Any/Equals";

type Test1 = Equals<1, 1>;

type Test1expect = true;

TypeChecking<Test1, Test1expect, Test.Pass>;

type Test2 = Equals<1, 2>;

type Test2expect = false;

TypeChecking<Test2, Test2expect, Test.Pass>;

type Test3 = Equals<{ a: number }, { a: number }>;

type Test3expect = true;

TypeChecking<Test3, Test3expect, Test.Pass>;

type Test4 = Equals<{ a: number }, { b: number }>;

type Test4expect = false;

TypeChecking<Test4, Test4expect, Test.Pass>;

// 判断交叉类型失败
type Test5 = Equals<{ a: number } & { b: string }, { a: number; b: string }>;

type Test5expect = false;

TypeChecking<Test5, Test5expect, Test.Pass>;

type Test6 = Equals<never, never>;

type Test6expect = true;

TypeChecking<Test6, Test6expect, Test.Pass>;

type Test7 = Equals<never, unknown>;

type Test7expect = false;

TypeChecking<Test7, Test7expect, Test.Pass>;

type Test8 = Equals<unknown, unknown>;

type Test8expect = true;

TypeChecking<Test8, Test8expect, Test.Pass>;

type Test9 = Equals<unknown, any>;

type Test9expect = false;

TypeChecking<Test9, Test9expect, Test.Pass>;

type Test10 = Equals<any, any>;

type Test10expect = true;

TypeChecking<Test10, Test10expect, Test.Pass>;

type Test11 = Equals<any, {}>;

type Test11expect = false;

TypeChecking<Test11, Test11expect, Test.Pass>;
