import type { Test } from "../../src";
import { Checking } from "../../src";
import type { IntersectOf } from "../../src/Union/IntersectOf";

type Test1 = IntersectOf<string | number>;

type Test1Expect = string & number;

Checking<Test1, Test1Expect, Test.Pass>();

type Test2 = IntersectOf<{ a: string } | { b: number }>;

type Test2Expect = { a: string } & { b: number };

Checking<Test2, Test2Expect, Test.Pass>();
