import type { Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { IsPlainObject } from "../../src/Any/_index";

// ============================================================
// 普通对象
// ============================================================
type Test1Actual = IsPlainObject<{ a: number }>;

type Test1Expected = true;

Checking<Test1Actual, Test1Expected, Test.Pass>;

// ============================================================
// 内置对象类型
// ============================================================
type Test2Actual = IsPlainObject<Date>;

type Test2Expected = false;

Checking<Test2Actual, Test2Expected, Test.Pass>;

type Test3Actual = IsPlainObject<RegExp>;

type Test3Expected = false;

Checking<Test3Actual, Test3Expected, Test.Pass>;

// ============================================================
// 函数类型
// ============================================================
type Test4Actual = IsPlainObject<() => any>;

type Test4Expected = false;

Checking<Test4Actual, Test4Expected, Test.Pass>;

// ============================================================
// 数组和元组类型
// ============================================================
type Test5Actual = IsPlainObject<unknown[]>;

type Test5Expected = false;

Checking<Test5Actual, Test5Expected, Test.Pass>;

type Test6Actual = IsPlainObject<readonly [1, 2, 3]>;

type Test6Expected = false;

Checking<Test6Actual, Test6Expected, Test.Pass>;

type Test7Actual = IsPlainObject<Set<[1, 2, 3]>>;

type Test7Expected = false;

Checking<Test7Actual, Test7Expected, Test.Pass>;

type Test8Actual = IsPlainObject<Map<"key", "value">>;

type Test8Expected = false;

Checking<Test8Actual, Test8Expected, Test.Pass>;

// ============================================================
// 普通对象联合类型
// ============================================================
type Test9Actual = IsPlainObject<{ a: number } | { b: string }>;

type Test9Expected = true;

Checking<Test9Actual, Test9Expected, Test.Pass>;

// ============================================================
// 普通对象与内置对象的联合类型
// ============================================================
type Test10Actual = IsPlainObject<{ a: number } | Date>;

type Test10Expected = false;

Checking<Test10Actual, Test10Expected, Test.Pass>;

// ============================================================
// 普通对象交叉类型
// ============================================================
type Test11Actual = IsPlainObject<{ a: number } & { b: string }>;

type Test11Expected = true;

Checking<Test11Actual, Test11Expected, Test.Pass>;

type Test12Actual = IsPlainObject<{ a: number } & Date>;

type Test12Expected = false;

Checking<Test12Actual, Test12Expected, Test.Pass>;
