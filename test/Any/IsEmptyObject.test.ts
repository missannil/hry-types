import { type Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { IsEmptyObject } from "../../src/Any/_index";

// ============================================================
// 空对象
// ============================================================
type Test1 = IsEmptyObject<{}>;

type Test1Expect = true;

Checking<Test1, Test1Expect, Test.Pass>;

// ============================================================
// 带可选属性的对象
// ============================================================
type Test2 = IsEmptyObject<{ a?: never }>;

type Test2Expect = false;

Checking<Test2, Test2Expect, Test.Pass>;

// ============================================================
// 对象联合类型
// ============================================================
type Test3 = IsEmptyObject<{} | { a: number }>;

type Test3Expect = false;

Checking<Test3, Test3Expect, Test.Pass>;

// ============================================================
// 对象交叉类型
// ============================================================
type Test4 = IsEmptyObject<{} & { a: number }>;

type Test4Expect = false;

Checking<Test4, Test4Expect, Test.Pass>;
