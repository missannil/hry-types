import { Checking, type Test } from "../../src";
import type { OptionalKeys } from "../../src/Object/_api";

type Obj1 = { a: string; b?: number };

type Obj2 = { c: string; d?: number };

type Test1 = OptionalKeys<Obj1>;

type test1Expect = "b";

Checking<test1Expect, Test1, Test.Pass>;

type Test2 = OptionalKeys<Obj2 | Obj1>;

type test2Expect = "b" | "d";

Checking<test2Expect, Test2, Test.Pass>;

type Test3 = OptionalKeys<{ a: string; b: number }>;

type test3Expect = never;

Checking<test3Expect, Test3, Test.Pass>;
