import type { Test } from "../../src";
import { Checking } from "../../src";
import type { Extends } from "../../src/Any/Extends";

type Test1 = Extends<1, number>;

type Test1Expected = true;

Checking<Test1, Test1Expected, Test.Pass>;

type Test2 = Extends<1, string | number>;

type Test2Expected = true;

Checking<Test2, Test2Expected, Test.Pass>;

type Test3 = Extends<1 | string, number>;

type Test3Expected = false;

Checking<Test3, Test3Expected, Test.Pass>;
