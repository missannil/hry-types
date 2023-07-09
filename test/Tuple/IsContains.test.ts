import type { Test } from "../../src";
import { TypeChecking } from "../../src";

import type { IsContains } from "../../src/Tuple/IsContains";

// 测试元组中 类型不互为父子类型的情况
type TestTuple = [1, "1", true, undefined, null];

type Test1 = IsContains<TestTuple, 1, "extends->">; // default extends->

type Test1Expected = true;

TypeChecking<Test1, Test1Expected, Test.Pass>;

type Test2 = IsContains<TestTuple, number, "extends->">;

type Test2Expected = true;

TypeChecking<Test2, Test2Expected, Test.Pass>;

type Test3 = IsContains<TestTuple, 1, "<-extends">;

type Test3Expected = true;

TypeChecking<Test3, Test3Expected, Test.Pass>;

type Test4 = IsContains<TestTuple, number, "<-extends">;

type Test4Expected = false;

TypeChecking<Test4, Test4Expected, Test.Pass>;

type Test5 = IsContains<TestTuple, 1, "equals">;

type Test5Expected = true;

TypeChecking<Test5, Test5Expected, Test.Pass>;

// 对于 元组中可能存在互为父子类型(如 never、any、unknown、{})的情况,应使用 "equals" 模式
type TestTuple1 = [never, any, object, {}, [], { a: string }];

type Test6 = IsContains<TestTuple1, never, "equals">;

type Test6Expected = true;

TypeChecking<Test6, Test6Expected, Test.Pass>;

type Test7 = IsContains<TestTuple1, any, "equals">;

type Test7Expected = true;

TypeChecking<Test7, Test7Expected, Test.Pass>;

type Test8 = IsContains<TestTuple1, object, "equals">;

type Test8Expected = true;

TypeChecking<Test8, Test8Expected, Test.Pass>;

type Test9 = IsContains<TestTuple1, {}, "equals">;

type Test9Expected = true;

TypeChecking<Test9, Test9Expected, Test.Pass>;

type Test10 = IsContains<TestTuple1, [], "equals">;

type Test10Expected = true;

TypeChecking<Test10, Test10Expected, Test.Pass>;
