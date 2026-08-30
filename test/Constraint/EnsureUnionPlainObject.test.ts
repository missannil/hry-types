import type { Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { EnsureUnionPlainObject } from "../../src/Constraint/_index";

// ============================================================
// 联合的纯对象
// ============================================================
type Actual1 = EnsureUnionPlainObject<{ a: 1 } | { b: 2 }>;

type Expected1 = object;

Checking<Actual1, Expected1, Test.Pass>;

// ============================================================
// 非联合对象不满足约束
// ============================================================
type Actual2 = EnsureUnionPlainObject<{ a: 1 }>;

type Expected2 = "只能是联合的纯对象";

Checking<Actual2, Expected2, Test.Pass>;

// ============================================================
// 包含非纯对象的联合类型不满足约束
// ============================================================
type Actual3 = EnsureUnionPlainObject<string | { a: 1 }>;

type Expected3 = "只能是联合的纯对象";

Checking<Actual3, Expected3, Test.Pass>;
