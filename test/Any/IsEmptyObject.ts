import { Checking, type Test } from "../../src";
import type { IsEmptyObject } from "../../src/Any/IsEmptyObject";
import type { EmptyObject } from "../../src/Misc/EmptyObject";

type Test1 = IsEmptyObject<{}>;

type Test1Expect = true;

Checking<Test1, Test1Expect, Test.Pass>;

type Test2 = IsEmptyObject<{ a?: never }>;

type Test2Expect = false;

Checking<Test2, Test2Expect, Test.Pass>;

type Test3 = IsEmptyObject<EmptyObject>;

type Test3Expect = true;

Checking<Test3, Test3Expect, Test.Pass>;
