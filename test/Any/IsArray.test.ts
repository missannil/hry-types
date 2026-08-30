import type { IsArray, Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";

// ============================================================
// 可变数组
// ============================================================
type Test1Actual = IsArray<string[]>;

type Test1Expected = true;

Checking<Test1Actual, Test1Expected, Test.Pass>;

type Test2Actual = IsArray<number[]>;

type Test2Expected = true;

Checking<Test2Actual, Test2Expected, Test.Pass>;

// ============================================================
// 数组联合类型
// ============================================================
type Test3Actual = IsArray<string[] | number[]>;

type Test3Expected = true;

Checking<Test3Actual, Test3Expected, Test.Pass>;

// ============================================================
// 数组与非数组的联合类型
// ============================================================
type Test4Actual = IsArray<string[] | number>;

type Test4Expected = false;

Checking<Test4Actual, Test4Expected, Test.Pass>;

type Test5Actual = IsArray<string | number>;

type Test5Expected = false;

Checking<Test5Actual, Test5Expected, Test.Pass>;

// ============================================================
// 非数组类型
// ============================================================
type Test6Actual = IsArray<string>;

type Test6Expected = false;

Checking<Test6Actual, Test6Expected, Test.Pass>;

// ============================================================
// any 和 never 类型
// ============================================================
type Test7Actual = IsArray<any>;

type Test7Expected = false;

Checking<Test7Actual, Test7Expected, Test.Pass>;

type Test8Actual = IsArray<never>;

type Test8Expected = false;

Checking<Test8Actual, Test8Expected, Test.Pass>;

// ============================================================
// 只读数组
// ============================================================
type Test9Actual = IsArray<readonly string[]>;

type Test9Expected = true;

Checking<Test9Actual, Test9Expected, Test.Pass>;

type Test10Actual = IsArray<readonly string[] | readonly number[]>;

type Test10Expected = true;

Checking<Test10Actual, Test10Expected, Test.Pass>;

type Test11Actual = IsArray<readonly string[] | string>;

type Test11Expected = false;

Checking<Test11Actual, Test11Expected, Test.Pass>;
