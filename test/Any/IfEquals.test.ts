import type { Test } from "../../src";

import type { IfEquals } from "../../src/Any/_index";

import { Checking } from "../../src/_internal/Checking";

// ============================================================
// 相等时返回默认的 Then
// ============================================================
type Test1Actual = IfEquals<1, 1>;

type Test1Expected = unknown;

Checking<Test1Actual, Test1Expected, Test.Pass>;

// ============================================================
// 不相等时返回默认的 Else
// ============================================================
type Test2Actual = IfEquals<1, 2>;

type Test2Expected = 1;

Checking<Test2Actual, Test2Expected, Test.Pass>;

// ============================================================
// 相等时返回自定义 Then
// ============================================================
type Test3Actual = IfEquals<1, 1, "Then", "Else">;

type Test3Expected = "Then";

Checking<Test3Actual, Test3Expected, Test.Pass>;

// ============================================================
// 不相等时返回自定义 Else
// ============================================================
type Test4Actual = IfEquals<1, 2, "Then", "Else">;

type Test4Expected = "Else";

Checking<Test4Actual, Test4Expected, Test.Pass>;

// ============================================================
// never 与 never 相等
// ============================================================
type Test5Actual = IfEquals<never, never, "Then", "Else">;

type Test5Expected = "Then";

Checking<Test5Actual, Test5Expected, Test.Pass>;

// ============================================================
// 联合类型成员顺序不影响相等判断
// ============================================================
type Test6Actual = IfEquals<1 | 2, 2 | 1, "Then", "Else">;

type Test6Expected = "Then";

Checking<Test6Actual, Test6Expected, Test.Pass>;

// 交叉对象不会计算
// ============================================================
// 交叉对象与普通对象不视为相等
// ============================================================
type Test7Actual = IfEquals<
  { a: number } & { b: number },
  { a: number; b: number },
  "Then",
  "Else"
>;

type Test7Expected = "Else";

Checking<Test7Actual, Test7Expected, Test.Pass>;
