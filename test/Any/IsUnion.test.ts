import type { Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { IsUnion } from "../../src/Any/_index";

// ============================================================
// 普通联合类型
// ============================================================
type Test1 = IsUnion<1 | 2>;

type Test1Expect = true;

Checking<Test1, Test1Expect, Test.Pass>;

// ============================================================
// boolean 联合类型
// ============================================================
type Test2 = IsUnion<boolean>;

type Test2Expect = true;

Checking<Test2, Test2Expect, Test.Pass>;

// ============================================================
// 非联合类型
// ============================================================
type Test3 = IsUnion<1>;

type Test3Expect = false;

Checking<Test3, Test3Expect, Test.Pass>;

type Test4 = IsUnion<string | number>;

type Test4Expect = true;

Checking<Test4, Test4Expect, Test.Pass>;

// ============================================================
// never 和 any 类型
// ============================================================
type Test5 = IsUnion<never>;

type Test5Expect = false;

Checking<Test5, Test5Expect, Test.Pass>;

type Test6 = IsUnion<any>;

type Test6Expect = false;

Checking<Test6, Test6Expect, Test.Pass>;
