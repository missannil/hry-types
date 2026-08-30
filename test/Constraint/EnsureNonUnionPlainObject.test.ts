import type { Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { EnsureNonUnionPlainObject } from "../../src/Constraint/_index";

// ============================================================
// 非联合的纯对象
// ============================================================
type Actual1 = EnsureNonUnionPlainObject<{ a: 1 }>;

type Expected1 = object;

Checking<Actual1, Expected1, Test.Pass>;

// ============================================================
// 联合对象不满足非联合约束
// ============================================================
type Actual2 = EnsureNonUnionPlainObject<{ a: 1 } | { b: 2 }>;

type Expected2 = "只能是非联合的纯对象";

Checking<Actual2, Expected2, Test.Pass>;

// ============================================================
// 非纯对象不满足约束
// ============================================================
type Actual3 = EnsureNonUnionPlainObject<string>;

type Expected3 = "只能是非联合的纯对象";

Checking<Actual3, Expected3, Test.Pass>;
