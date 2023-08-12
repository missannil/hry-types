import { Checking, type Test } from "../../src";
import type { ExcludeEqual } from "../../src/Union/ExcludeEqual";

type Test1 = ExcludeEqual<{ a: string } | {}, {}>;

type Test1Expect = { a: string };

Checking<Test1, Test1Expect, Test.Pass>;

type Test2 = ExcludeEqual<{ a?: string; b: number } | { b: number }, { b: number }>;

type Test2Expect = { a?: string; b: number };

Checking<Test2, Test2Expect, Test.Pass>;
