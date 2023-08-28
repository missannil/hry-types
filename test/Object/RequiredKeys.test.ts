import { Checking, type Test } from "../../src";
import type { RequiredKeys } from "../../src/Object/_api";

type Obj1 = { a: string; b?: number };

type Obj2 = { c: string; d?: number };

type Test1 = RequiredKeys<Obj1>;

type test1Expect = "a";

Checking<test1Expect, Test1, Test.Pass>;

type Test2 = RequiredKeys<Obj2 | Obj1>;

type test2Expect = "a" | "c";

Checking<test2Expect, Test2, Test.Pass>;

type Test3 = RequiredKeys<{ a?: string; b?: number }>;

type test3Expect = never;

Checking<test3Expect, Test3, Test.Pass>;
