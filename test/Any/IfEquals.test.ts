import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { IfEquals } from "../../src/Any/IfEquals";
import type { ComputeIntersection } from "../../src/Object/ComputeIntersection";

type Test1 = IfEquals<1, 1>;

type Test1Expect = unknown;

TypeChecking<Test1, Test1Expect, Test.Pass>;

type Test2 = IfEquals<1, 2>;

type Test2Expect = 1;

TypeChecking<Test2, Test2Expect, Test.Pass>;

type Test3 = IfEquals<{}, {}>;

type Test3Expect = unknown;

TypeChecking<Test3, Test3Expect, Test.Pass>;

type Test4 = IfEquals<never, never>;

type Test4Expect = unknown;

TypeChecking<Test4, Test4Expect, Test.Pass>;

type Test5 = IfEquals<1 | 2, 2 | 1>;

type Test5Expect = unknown;

TypeChecking<Test5, Test5Expect, Test.Pass>;

type Test6 = IfEquals<1, 1, "Then">;

TypeChecking<Test6, "Then", Test.Pass>;

type Test7 = IfEquals<1, 2, "Then">;

TypeChecking<Test7, 1, Test.Pass>;

type Test8 = IfEquals<1, 2, "Then", "Else">;

TypeChecking<Test8, "Else", Test.Pass>;

type Test9 = IfEquals<never, never, "Then", "Else">;

TypeChecking<Test9, "Then", Test.Pass>;

// 交叉对象不会计算
type Test10 = IfEquals<{ a: number } & { b: number }, { a: number; b: number }, "Then", "Else">;

TypeChecking<Test10, "Else", Test.Pass>;

// 预先计算交叉对象
type Test11 = IfEquals<ComputeIntersection<{ a: number } & { b: number }>, { a: number; b: number }, "Then", "Else">;

TypeChecking<Test11, "Then", Test.Pass>;

// 联合对象不会计算
type Test12 = IfEquals<{ a: number } | { b: number }, { a?: number; b?: number }, "Then", "Else">;

TypeChecking<Test12, "Else", Test.Pass>;
