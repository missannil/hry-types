import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { Equals } from "../../src/Any/Equals";

type Test1 = Equals<1, 1>;

TypeChecking<Test1, true, Test.Pass>;

type Test2 = Equals<1, 2>;

TypeChecking<Test2, false, Test.Pass>;

type Test3 = Equals<{ a: number }, { a: number }>;

TypeChecking<Test3, true, Test.Pass>;

type Test4 = Equals<{ a: number }, { b: number }>;

TypeChecking<Test4, false, Test.Pass>;

// 不支持对象交叉类型计算
type Test5 = Equals<{ a: number } & { b: string }, { a: number; b: string }>;

TypeChecking<Test5, false, Test.Pass>;

type Test6 = Equals<never, never>;

TypeChecking<Test6, true, Test.Pass>;

type Test7 = Equals<never, unknown>;

TypeChecking<Test7, false, Test.Pass>;

type Test8 = Equals<unknown, unknown>;

TypeChecking<Test8, true, Test.Pass>;

type Test9 = Equals<unknown, any>;

TypeChecking<Test9, false, Test.Pass>;

type Test10 = Equals<any, any>;

TypeChecking<Test10, true, Test.Pass>;

type Test11 = Equals<any, {}>;

TypeChecking<Test11, false, Test.Pass>;
