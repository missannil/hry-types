import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { Is } from "../../src/Any/Is";

type Test1 = Is<1, number, "extends->">;

type Test1Expected = true;

TypeChecking<Test1, Test1Expected, Test.Pass>;

type Test2 = Is<1, number, "<-extends">;

type Test2Expected = false;

TypeChecking<Test2, Test2Expected, Test.Pass>;

type Test3 = Is<number, 1, "extends->">; // 等价于 Test2

type Test3Expected = false;

TypeChecking<Test3, Test3Expected, Test.Pass>;

type Test4 = Is<number, 1, "equals">;

type Test4Expected = false;

TypeChecking<Test4, Test4Expected, Test.Pass>;

type Test5 = Is<never, never, "extends->">;

type Test5Expected = true;

TypeChecking<Test5, Test5Expected, Test.Pass>;

type Test6 = Is<never, never, "<-extends">;

type Test6Expected = true;

TypeChecking<Test6, Test6Expected, Test.Pass>;

type Test7 = Is<never, never, "equals">;

type Test7Expected = true;

TypeChecking<Test7, Test7Expected, Test.Pass>;

type Test8 = Is<1 | 2, 1, "extends->">;

type Test8Expected = false;

TypeChecking<Test8, Test8Expected, Test.Pass>;

type Test9 = Is<1 | 2, 1, "<-extends">;

type Test9Expected = true;

TypeChecking<Test9, Test9Expected, Test.Pass>;

type Test10 = Is<1, 1 | 2, "extends->">; // 等价于 Test9

type Test10Expected = true;

TypeChecking<Test10, Test10Expected, Test.Pass>;

type Test11 = Is<1, 1 | 2, "<-extends">;

type Test11Expected = false;

TypeChecking<Test11, Test11Expected, Test.Pass>;

type Test12 = Is<1 | 2, 1 | 2, "extends->">;

type Test12Expected = true;

TypeChecking<Test12, Test12Expected, Test.Pass>;
