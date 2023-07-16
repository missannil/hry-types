import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { IfExtends } from "../../src/Any/IfExtends";

type Test1 = IfExtends<1, 1>;

type Test1Expected = unknown;

TypeChecking<Test1, Test1Expected, Test.Pass>;

type Test2 = IfExtends<1, 1, true>;

type Test2Expected = true;

TypeChecking<Test2, Test2Expected, Test.Pass>;

type Test3 = IfExtends<1, 2, true>;

type Test3Expected = 1;

TypeChecking<Test3, Test3Expected, Test.Pass>;

type Test4 = IfExtends<1, 2, true, false>;

type Test4Expected = false;

TypeChecking<Test4, Test4Expected, Test.Pass>;

// 不会对联合类型做分发判断
type Test5 = IfExtends<1 | 2, 1, true, false>;

type Test5Expected = false;

TypeChecking<Test5, Test5Expected, Test.Pass>;
