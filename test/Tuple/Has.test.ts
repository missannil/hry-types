import type { Test } from "../../src";
import { Checking } from "../../src";

import type { Has } from "../../src/Tuple/Has";

// 测试元组中 类型不互为父子类型的情况
type TestTuple = [1, "1", true, undefined, null];

type Test1 = Has<TestTuple, 1, "extends->">; // default extends->

type Test1Expected = true;

Checking<Test1, Test1Expected, Test.Pass>;

type Test2 = Has<TestTuple, number, "extends->">;

type Test2Expected = true;

Checking<Test2, Test2Expected, Test.Pass>;

type Test3 = Has<TestTuple, 1, "<-extends">;

type Test3Expected = true;

Checking<Test3, Test3Expected, Test.Pass>;

type Test4 = Has<TestTuple, number, "<-extends">;

type Test4Expected = false;

Checking<Test4, Test4Expected, Test.Pass>;

type Test5 = Has<TestTuple, 1, "equals">;

type Test5Expected = true;

Checking<Test5, Test5Expected, Test.Pass>;

// 对于 元组中可能存在互为父子类型(如 never、any、unknown、{})的情况,应使用 "equals" 模式
type TestTuple1 = [never, any, {}, [], { a: string }];

type Test6 = Has<TestTuple1, never, "equals">;

type Test6Expected = true;

Checking<Test6, Test6Expected, Test.Pass>;

type Test7 = Has<TestTuple1, any, "equals">;

type Test7Expected = true;

Checking<Test7, Test7Expected, Test.Pass>;

type Test8 = Has<TestTuple1, object, "equals">;

type Test8Expected = false;

Checking<Test8, Test8Expected, Test.Pass>;

type Test9 = Has<TestTuple1, {}, "equals">;

type Test9Expected = true;

Checking<Test9, Test9Expected, Test.Pass>;

type Test10 = Has<TestTuple1, string[], "equals">;

type Test10Expected = false;

Checking<Test10, Test10Expected, Test.Pass>;
