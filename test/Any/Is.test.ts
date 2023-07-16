import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { Is } from "../../src/Any/Is";

// ----------  extends  ----------
type Test1 = Is<1, number>; // 默认值 "extends->"

type Test1Expected = true;

TypeChecking<Test1, Test1Expected, Test.Pass>;

type Test2 = Is<number, 1, "<-extends">; // 等同于 Test1

type Test2Expected = true;

TypeChecking<Test2, Test2Expected, Test.Pass>;

type Test3 = Is<1 | "str", number, "extends->">; // 不分发联合类型

type Test3Expected = false;

TypeChecking<Test3, Test3Expected, Test.Pass>;

type Test4 = Is<number, 1 | "str", "<-extends">; // 等同于 Test3

type Test4Expected = false;

TypeChecking<Test4, Test4Expected, Test.Pass>;

// ---------- contains ----------

type Test5 = Is<1 | "2", number, "contains->">;

type Test5Expected = true;

TypeChecking<Test5, Test5Expected, Test.Pass>;

type Test6 = Is<number, 1 | "2", "<-contains">; // 等同于 Test5

type Test6Expected = true;

TypeChecking<Test6, Test6Expected, Test.Pass>;

type Test7 = Is<number, 1, "contains->">;

type Test7Expected = false;

TypeChecking<Test7, Test7Expected, Test.Pass>;

type Test8 = Is<1, number, "<-contains">; // 等同于 Test7

type Test8Expected = false;

TypeChecking<Test8, Test8Expected, Test.Pass>;

// ---------- equals ----------
type Test9 = Is<1, 1, "equals">;

type Test9Expected = true;

TypeChecking<Test9, Test9Expected, Test.Pass>;

type Test10 = Is<number, 1, "equals">;

type Test10Expected = false;

TypeChecking<Test10, Test10Expected, Test.Pass>;
