import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { _IfEquals } from "../../src/_internal/_IfEquals";
import type { ComputeIntersection } from "../../src/Object/ComputeIntersection";
import type { ComputeUnion } from "../../src/Object/ComputeUnion";

type Test1 = _IfEquals<1, 1>; // => unknown

TypeChecking<Test1, unknown, Test.Pass>;

type Test2 = _IfEquals<1, 2>; // => 1

TypeChecking<Test2, 1, Test.Pass>;

type Test5 = _IfEquals<{}, {}>; // => unknown

TypeChecking<Test5, unknown, Test.Pass>;

type Test7 = _IfEquals<never, never>; // => unknown

TypeChecking<Test7, unknown, Test.Pass>;

type Test8 = _IfEquals<never, unknown>; // => never

TypeChecking<Test8, never, Test.Pass>;

type Test9 = _IfEquals<1 | 2, 2 | 3>; // => 1 | 2

TypeChecking<Test9, 1 | 2, Test.Pass>;

type Test10 = _IfEquals<1 | 2, 2 | 1>; // => unknown

TypeChecking<Test10, unknown, Test.Pass>;

type Test11 = _IfEquals<1, 1, "Then">; // => "Then"

TypeChecking<Test11, "Then", Test.Pass>;

type Test12 = _IfEquals<1, 2, "Then">; // => 1

TypeChecking<Test12, 1, Test.Pass>;

type Test13 = _IfEquals<1, 2, "Then", "Else">; // => "Else"

TypeChecking<Test13, "Else", Test.Pass>;

type Test14 = _IfEquals<{}, {} | null, "Then", "Else">; // => "Else"

TypeChecking<Test14, "Else", Test.Pass>;

// ⚠️对象交叉类型不符合预期,可通过ComputeIntersection 如: Test16⚠️
type Test15 = _IfEquals<{ a: 1 } & { b: 2 }, { a: 1; b: 2 }, "Then", "Else">; // => "Else" 不符合预期 "Then"

TypeChecking<Test15, "Then", Test.Fail>;

type Test16 = _IfEquals<ComputeIntersection<{ a: 1 } & { b: 2 }>, { a: 1; b: 2 }, "Then", "Else">; // => "Then"

TypeChecking<Test16, "Then", Test.Pass>;

// ⚠️联合对象不符合预期,可通过ComputeIntersection 如: Test18⚠️
type Test17 = _IfEquals<{ a: 1 } | { b: 2 }, { a?: 1; b?: 2 }, "Then", "Else">; // =>  "Else" 不符合预期 "Then"

TypeChecking<Test17, "Then", Test.Fail>;

type Test18 = _IfEquals<ComputeUnion<{ a: 1 } | { b: 2 }>, { a?: 1; b?: 2 }, "Then", "Else">; // =>  "Then"

TypeChecking<Test18, "Then", Test.Pass>;
