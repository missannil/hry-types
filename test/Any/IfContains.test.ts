import type { Test } from "../../src";
import { Checking } from "../../src";
import type { IfContains } from "../../src/Any/IfContains";

type Test1 = IfContains<1, 1>;

type Test1Expected = unknown;

Checking<Test1, Test1Expected, Test.Pass>;

type Test2 = IfContains<1, 1, true>;

type Test2Expected = true;

Checking<Test2, Test2Expected, Test.Pass>;

type Test3 = IfContains<1, 2, true>;

type Test3Expected = 1;

Checking<Test3, Test3Expected, Test.Pass>;

type Test4 = IfContains<1, 2, true, false>;

type Test4Expected = false;

Checking<Test4, Test4Expected, Test.Pass>;

// 会对联合类型做分发判断
type Test5 = IfContains<1 | 2, 1, true, false>;

type Test5Expected = true;

Checking<Test5, Test5Expected, Test.Pass>;
