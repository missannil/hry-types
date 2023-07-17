import type { Test } from "../../src";
import { Checking } from "../../src";
import type { IsNonArrNonFuncObject } from "../../src/Any/IsNonArrNonFuncObject";

type Test1 = IsNonArrNonFuncObject<{ a: number }>;

type Test1Expect = true;

Checking<Test1, Test1Expect, Test.Pass>;

type Test2 = IsNonArrNonFuncObject<() => any>;

type Test2Expect = false;

Checking<Test2, Test2Expect, Test.Pass>;

type Test3 = IsNonArrNonFuncObject<unknown[]>;

type Test3Expect = false;

Checking<Test3, Test3Expect, Test.Pass>;
