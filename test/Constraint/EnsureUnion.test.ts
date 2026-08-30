import type { Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { EnsureUnion } from "../../src/Constraint/_index";

// ============================================================
// 联合类型返回 Constraint
// ============================================================
type Actual1 = EnsureUnion<1 | 2, string>;

type Expected1 = string;

Checking<Actual1, Expected1, Test.Pass>;

// ============================================================
// 非联合类型返回默认错误信息
// ============================================================
type Actual2 = EnsureUnion<1, string>;

type Expected2 = "只能是联合类型";

Checking<Actual2, Expected2, Test.Pass>;

// ============================================================
// 非联合类型返回自定义错误信息
// ============================================================
type Actual3 = EnsureUnion<1, string, "必须是联合类型">;

type Expected3 = "必须是联合类型";

Checking<Actual3, Expected3, Test.Pass>;
