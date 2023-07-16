import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { _Extends } from "../../src/Any/_Extends";

type Test1 = _Extends<1, number>;

type Test1Expected = true;

TypeChecking<Test1, Test1Expected, Test.Pass>;

type Test2 = _Extends<1, string | number>;

type Test2Expected = true;

TypeChecking<Test2, Test2Expected, Test.Pass>;

type Test3 = _Extends<1 | string, number>;

type Test3Expected = false;

TypeChecking<Test3, Test3Expected, Test.Pass>;
