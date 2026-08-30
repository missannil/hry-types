import { type Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { IsAnyOrNever } from "../../src/Any/IsAnyOrNever";

// ============================================================
// any 类型
// ============================================================
type Test1 = IsAnyOrNever<any>;

Checking<Test1, true, Test.Pass>;

// ============================================================
// never 类型
// ============================================================
type Test2 = IsAnyOrNever<never>;

Checking<Test2, true, Test.Pass>;

// ============================================================
// unknown 类型
// ============================================================
type Test3 = IsAnyOrNever<unknown>;

Checking<Test3, false, Test.Pass>;

// ============================================================
// 普通类型
// ============================================================
type Test4 = IsAnyOrNever<string>;

Checking<Test4, false, Test.Pass>;
