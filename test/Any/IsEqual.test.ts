import type { Test } from "../../src/";
import { Checking } from "../../src/_internal/Checking";
import type { IsEqual } from "../../src/Any/_index";

// ============================================================
// 基本类型相等
// ============================================================
type Test1 = IsEqual<1, 1>;

type Test1Expect = true;

Checking<Test1, Test1Expect, Test.Pass>;

// ============================================================
// 基本类型不相等
// ============================================================
type Test2 = IsEqual<1, 2>;

type Test2Expect = false;

Checking<Test2, Test2Expect, Test.Pass>;

// ============================================================
// 交叉类型与普通对象不相等
// ============================================================
type Test3 = IsEqual<{ a: number } & { b: string }, { a: number; b: string }>;

type Test3Expect = false;

Checking<Test3, Test3Expect, Test.Pass>;

// ============================================================
// 联合类型成员顺序不影响相等判断
// ============================================================
type Test4 = IsEqual<1 | 2, 2 | 1>;

type Test4Expect = true;

Checking<Test4, Test4Expect, Test.Pass>;
