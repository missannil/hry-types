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

// 不支持联合类型计算
type Test6 = Equals<{ a: number } | { b: string }, { a?: number; b?: number }>;

TypeChecking<Test6, false, Test.Pass>;

type Test7 = Equals<never, never>;

TypeChecking<Test7, true, Test.Pass>;

type Test8 = Equals<never, unknown>;

TypeChecking<Test8, false, Test.Pass>;

type Test9 = Equals<unknown, unknown>;

TypeChecking<Test9, true, Test.Pass>;

type Test10 = Equals<unknown, any>;

TypeChecking<Test10, false, Test.Pass>;

type Test11 = Equals<any, any>;

TypeChecking<Test11, true, Test.Pass>;

type Test12 = Equals<any, {}>;

TypeChecking<Test12, false, Test.Pass>;
