import type { Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { Is } from "../../src/Any/_index";

// ============================================================
// 默认：allExtends-> 匹配策略
// ============================================================
type Actual1 = Is<1, number>;

type Expected1 = true;

Checking<Actual1, Expected1, Test.Pass>;

type Actual2 = Is<1, number>;

type Expected2 = Is<1, number, "allExtends->">;

Checking<Actual2, Expected2, Test.Pass>;

// ============================================================
// someExtends-> 匹配策略
// ============================================================
type Actual3 = Is<1 | "a", number, "someExtends->">;

type Expected3 = true;

Checking<Actual3, Expected3, Test.Pass>;

// ============================================================
// allExtends-> 匹配策略
// ============================================================
type Actual4 = Is<1 | "a", number, "allExtends->">;

type Expected4 = false;

Checking<Actual4, Expected4, Test.Pass>;

// ============================================================
// <-someExtends 匹配策略
// ============================================================
type Actual5 = Is<number, 1 | "a", "<-someExtends">;

type Expected5 = true;

Checking<Actual5, Expected5, Test.Pass>;

// ============================================================
// <-allExtends 匹配策略
// ============================================================
type Actual6 = Is<number, 1 | "a", "<-allExtends">;

type Expected6 = false;

Checking<Actual6, Expected6, Test.Pass>;

// ============================================================
// equal 匹配策略：类型相等
// ============================================================
type Actual7 = Is<1, 1, "equal">;

type Expected7 = true;

Checking<Actual7, Expected7, Test.Pass>;

// ============================================================
// equal 匹配策略：类型不相等
// ============================================================
type Actual8 = Is<1, number, "equal">;

type Expected8 = false;

Checking<Actual8, Expected8, Test.Pass>;

// ============================================================
// 联合匹配策略参数校验
// ============================================================
// @ts-expect-error 不允许匹配策略为联合类型
Is<1 | 2, number, "allExtends->" | "<-allExtends">;
