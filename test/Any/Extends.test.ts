import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { Extends } from "../../src/Any/Extends";

type Test1 = Extends<1, number>;

TypeChecking<Test1, true, Test.Pass>;

type Test2 = Extends<number, 1>;

TypeChecking<Test2, false, Test.Pass>;

type Test3 = Extends<never, number>;

TypeChecking<Test3, false, Test.Pass>;

type Test4 = Extends<number, never>;

TypeChecking<Test4, false, Test.Pass>;

type Test5 = Extends<1 | 2, number>;

TypeChecking<Test5, true, Test.Pass>;

type Test6 = Extends<number, 1 | 2>;

TypeChecking<Test6, false, Test.Pass>;

type Test7 = Extends<boolean, true>;

TypeChecking<Test7, boolean, Test.Pass>;
