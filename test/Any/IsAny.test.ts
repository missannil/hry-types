import { type IsAny, type Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";

// ============================================================
// any 类型
// ============================================================
type Test1 = IsAny<any>;

Checking<Test1, true, Test.Pass>;

// ============================================================
// unknown 类型
// ============================================================
type Test2 = IsAny<unknown>;

Checking<Test2, false, Test.Pass>;

// ============================================================
// never 类型
// ============================================================
type Test3 = IsAny<never>;

Checking<Test3, false, Test.Pass>;

// ============================================================
// 普通类型
// ============================================================
type Test4 = IsAny<string>;

Checking<Test4, false, Test.Pass>;
