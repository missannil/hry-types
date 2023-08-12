import type { Test } from "../../src";
import { Checking } from "../../src";
import type { IfEquals } from "../../src/Any/_api";
import type { Compute } from "../../src/Object/_api";

type Test1 = IfEquals<1, 1>;

type Test1Expect = unknown;

Checking<Test1, Test1Expect, Test.Pass>;

type Test2 = IfEquals<1, 2>;

type Test2Expect = 1;

Checking<Test2, Test2Expect, Test.Pass>;

type Test3 = IfEquals<{}, {}>;

type Test3Expect = unknown;

Checking<Test3, Test3Expect, Test.Pass>;

type Test4 = IfEquals<never, never>;

type Test4Expect = unknown;

Checking<Test4, Test4Expect, Test.Pass>;

type Test5 = IfEquals<1 | 2, 2 | 1>;

type Test5Expect = unknown;

Checking<Test5, Test5Expect, Test.Pass>;

type Test6 = IfEquals<1, 1, "Then">;

Checking<Test6, "Then", Test.Pass>;

type Test7 = IfEquals<1, 2, "Then">;

Checking<Test7, 1, Test.Pass>;

type Test8 = IfEquals<1, 2, "Then", "Else">;

Checking<Test8, "Else", Test.Pass>;

type Test9 = IfEquals<never, never, "Then", "Else">;

Checking<Test9, "Then", Test.Pass>;

// 交叉对象不会计算
type Test10 = IfEquals<{ a: number } & { b: number }, { a: number; b: number }, "Then", "Else">;

Checking<Test10, "Else", Test.Pass>;

// 预先计算交叉对象
type Test11 = IfEquals<Compute<{ a: number } & { b: number }>, { a: number; b: number }, "Then", "Else">;

Checking<Test11, "Then", Test.Pass>;

// 联合对象不会计算
type Test12 = IfEquals<{ a: number } | { b: number }, { a?: number; b?: number }, "Then", "Else">;

Checking<Test12, "Else", Test.Pass>;
