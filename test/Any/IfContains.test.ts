import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { IfContains } from "../../src/Any/IfContains";

type Test1 = IfContains<1, 1>;

type Test1Expected = unknown;

TypeChecking<Test1, Test1Expected, Test.Pass>;

type Test2 = IfContains<1, 1, true>;

type Test2Expected = true;

TypeChecking<Test2, Test2Expected, Test.Pass>;

type Test3 = IfContains<1, 2, true>;

type Test3Expected = 1;

TypeChecking<Test3, Test3Expected, Test.Pass>;

type Test4 = IfContains<1, 2, true, false>;

type Test4Expected = false;

TypeChecking<Test4, Test4Expected, Test.Pass>;

// 会对联合类型做分发判断
type Test5 = IfContains<1 | 2, 1, true, false>;

type Test5Expected = true;

TypeChecking<Test5, Test5Expected, Test.Pass>;
