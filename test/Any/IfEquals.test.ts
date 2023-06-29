import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { IfEquals } from "../../src/Any/IfEquals";
import type { Or } from "../../src/List/Or";
import type { ComputeIntersection } from "../../src/Object/ComputeIntersection";
import type { ComputeUnion } from "../../src/Object/ComputeUnion";

type Test1 = IfEquals<1, 1>; // => unknown

TypeChecking<Test1, unknown, Test.Pass>;

type Test2 = IfEquals<1, 2>; // => 1

TypeChecking<Test2, 1, Test.Pass>;

type Test3 = IfEquals<"a", "a">; // => unknown

TypeChecking<Test3, unknown, Test.Pass>;

type Test4 = IfEquals<"a", "b">; // => "a"

TypeChecking<Test4, "a", Test.Pass>;

type Test5 = IfEquals<{}, {}>; // => unknown

TypeChecking<Test5, unknown, Test.Pass>;

type Test6 = IfEquals<{}, { a: number }>; // => {}

TypeChecking<Test6, {}, Test.Pass>;

type Test7 = IfEquals<never, never>; // => unknown

TypeChecking<Test7, unknown, Test.Pass>;

type Test8 = IfEquals<never, unknown>; // => never

TypeChecking<Test8, never, Test.Pass>;

type Test9 = IfEquals<1 | 2, 2 | 3>; // => 1 | 2

TypeChecking<Test9, 1 | 2, Test.Pass>;

type Test10 = IfEquals<1 | 2, 2 | 1>; // => unknown

TypeChecking<Test10, unknown, Test.Pass>;

type Test11 = IfEquals<1, 1, "Then">; // => "Then"

TypeChecking<Test11, "Then", Test.Pass>;

type Test12 = IfEquals<1, 2, "Then">; // => 1

TypeChecking<Test12, 1, Test.Pass>;

type Test13 = IfEquals<1, 2, "Then", "Else">; // => "Else"

TypeChecking<Test13, "Else", Test.Pass>;

type Test14 = IfEquals<1, Or<[1, 2]>, "Then", "Else">; // => "Then"

TypeChecking<Test14, "Then", Test.Pass>;

type Test15 = IfEquals<1, Or<[2, 3, 4]>, "Then", "Else">; // => "Else"

TypeChecking<Test15, "Else", Test.Pass>;

type Test16 = IfEquals<never, never, "Then", "Else">; // => "Then"

TypeChecking<Test16, "Then", Test.Pass>;

// 交叉对象不会计算
type Test17 = IfEquals<{ a: number } & { b: number }, { a: number; b: number }, "Then", "Else">; // => "Else"

TypeChecking<Test17, "Else", Test.Pass>;

// 预先计算交叉对象
type Test18 = IfEquals<ComputeIntersection<{ a: number } & { b: number }>, { a: number; b: number }, "Then", "Else">; // => "Then"

TypeChecking<Test18, "Then", Test.Pass>;

// 联合对象不会计算
type Test19 = IfEquals<{ a: number } | { b: number }, { a?: number; b?: number }, "Then", "Else">; // => "Else"

TypeChecking<Test19, "Else", Test.Pass>;

// 预先计算联合对象
type Test20 = IfEquals<ComputeUnion<{ a: number } | { b: number }>, { a?: number; b?: number }, "Then", "Else">; // => "Then"

TypeChecking<Test20, "Then", Test.Pass>;
