import { type Test } from "../../src";
import { Checking } from "../../src/_internal/Checking";
import type { RequiredKeys } from "../../src/Object/_index";

type Obj1 = { a: string; b?: number };

type Obj2 = { c: string; d?: number };

type Test1 = RequiredKeys<Obj1>;

type test1Expect = "a";

Checking<test1Expect, Test1, Test.Pass>;

// @ts-expect-error 不支持联合对象
RequiredKeys<Obj2 | Obj1>;

type Test3 = RequiredKeys<{ a?: string; b?: number }>;

type test3Expect = never;

Checking<test3Expect, Test3, Test.Pass>;
