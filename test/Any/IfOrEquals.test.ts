import { Checking, type Test } from "../../src";
import type { IfOrEquals } from "../../src/Any/IfOrEquals";

type Test1 = IfOrEquals<1, [1, 2, 3]>;

type Test1Expect = unknown;

Checking<Test1, Test1Expect, Test.Pass>;

type Test2 = IfOrEquals<1, [1, 2, 3], "Then">;

type Test2Expect = "Then";

Checking<Test2, Test2Expect, Test.Pass>;

type Test3 = IfOrEquals<1, [2, 3, number]>;

type Test3Expect = 1;

Checking<Test3, Test3Expect, Test.Pass>;

type Test4 = IfOrEquals<1, [2, 3, number], "Then", "Else">;

type Test4Expect = "Else";

Checking<Test4, Test4Expect, Test.Pass>;
