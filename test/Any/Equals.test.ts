// test for src\Any\Equals.ts
import type { Test } from "../../src";
import { Checking } from "../../src";
import type { Equals } from "../../src/Any/Equals";

type Test1 = Equals<1, 1>;

type Test1expect = true;

Checking<Test1, Test1expect, Test.Pass>;

type Test2 = Equals<1, 2>;

type Test2expect = false;

Checking<Test2, Test2expect, Test.Pass>;

// 判断交叉类型失败
type Test3 = Equals<{ a: number } & { b: string }, { a: number; b: string }>;

type Test3expect = false;

Checking<Test3, Test3expect, Test.Pass>;

type Test4 = Equals<1 | 2, 2 | 1>;

type Test4expect = true;

Checking<Test4, Test4expect, Test.Pass>;
