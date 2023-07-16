import { type Test, TypeChecking } from "../../src";
import type { IfOrEquals } from "../../src/Any/IfOrEquals";

type Test1 = IfOrEquals<1, [1, 2, 3]>;

type Test1Expect = unknown;

TypeChecking<Test1, Test1Expect, Test.Pass>;

type Test2 = IfOrEquals<1, [1, 2, 3], "Then">;

type Test2Expect = "Then";

TypeChecking<Test2, Test2Expect, Test.Pass>;

type Test3 = IfOrEquals<1, [2, 3, number]>;

type Test3Expect = 1;

TypeChecking<Test3, Test3Expect, Test.Pass>;

type Test4 = IfOrEquals<1, [2, 3, number], "Then", "Else">;

type Test4Expect = "Else";

TypeChecking<Test4, Test4Expect, Test.Pass>;
