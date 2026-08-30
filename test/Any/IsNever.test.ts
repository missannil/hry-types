import type { Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { IsNever } from "../../src/Any/_index";

// ============================================================
// never 类型
// ============================================================
type Test1 = IsNever<never>;

type Test1Expect = true;

Checking<Test1, Test1Expect, Test.Pass>;

// ============================================================
// 非 never 类型
// ============================================================
type Test2 = IsNever<undefined>;

type Test2Expect = false;

Checking<Test2, Test2Expect, Test.Pass>;
