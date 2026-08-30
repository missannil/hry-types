import type { Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { IfAllExtends } from "../../src/Any/_index";

// ============================================================
// 默认返回 unknown
// ============================================================
type Test1Actual = IfAllExtends<1, number>;

type Test1Expected = unknown;

Checking<Test1Actual, Test1Expected, Test.Pass>;

// ============================================================
// 全部满足时返回 Then
// ============================================================
type Test2Actual = IfAllExtends<1, number, true>;

type Test2Expected = true;

Checking<Test2Actual, Test2Expected, Test.Pass>;

// ============================================================
// 不满足时返回默认的原类型
// ============================================================
type Test3Actual = IfAllExtends<1, string, true>;

type Test3Expected = 1;

Checking<Test3Actual, Test3Expected, Test.Pass>;

// ============================================================
// 不满足时返回 Else
// ============================================================
type Test4Actual = IfAllExtends<1, string, true, false>;

type Test4Expected = false;

Checking<Test4Actual, Test4Expected, Test.Pass>;

// ============================================================
// 联合类型全部满足约束
// ============================================================
type Test5Actual = IfAllExtends<1 | 2, number, true, false>;

type Test5Expected = true;

Checking<Test5Actual, Test5Expected, Test.Pass>;

// ============================================================
// 联合类型部分不满足约束
// ============================================================
type Test6Actual = IfAllExtends<1 | string, number, true, false>;

type Test6Expected = false;

Checking<Test6Actual, Test6Expected, Test.Pass>;
