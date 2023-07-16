import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { IsNonArrNonFuncObject } from "../../src/Any/IsNonArrNonFuncObject";

type Test1 = IsNonArrNonFuncObject<{ a: number }>;

type Test1Expect = true;

TypeChecking<Test1, Test1Expect, Test.Pass>;

type Test2 = IsNonArrNonFuncObject<() => any>;

type Test2Expect = false;

TypeChecking<Test2, Test2Expect, Test.Pass>;

type Test3 = IsNonArrNonFuncObject<unknown[]>;

type Test3Expect = false;

TypeChecking<Test3, Test3Expect, Test.Pass>;
