import type { Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { IfSomeExtends } from "../../src/Any/_index";

// ============================================================
// 默认返回 unknown
// ============================================================
type Test1 = IfSomeExtends<1, 1>;

type Test1Expected = unknown;

Checking<Test1, Test1Expected, Test.Pass>;

// ============================================================
// 存在满足约束的类型时返回 Then
// ============================================================
type Test2 = IfSomeExtends<1, 1, true>;

type Test2Expected = true;

Checking<Test2, Test2Expected, Test.Pass>;

// ============================================================
// 不满足时返回默认的原类型
// ============================================================
type Test3 = IfSomeExtends<1, 2, true>;

type Test3Expected = 1;

Checking<Test3, Test3Expected, Test.Pass>;

// ============================================================
// 不满足时返回 Else
// ============================================================
type Test4 = IfSomeExtends<1, 2, true, false>;

type Test4Expected = false;

Checking<Test4, Test4Expected, Test.Pass>;

// ============================================================
// 联合类型中存在满足约束的成员
// ============================================================
type Test5 = IfSomeExtends<1 | 2, 1, true, false>;

type Test5Expected = true;

Checking<Test5, Test5Expected, Test.Pass>;
