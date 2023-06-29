import { TypeChecking } from "../../src";
import type { Test } from "../../src";
import type { IntersectOf } from "../../src/Union/IntersectOf";

type Test1 = IntersectOf<"a" | "b">; // => never

type Test2 = IntersectOf<{ a: string } | { b: number }>; // => { a: string } & { b: number }

type Test3 = IntersectOf<{ a: string } & { b: number }>; // => { a: string, b: number }

type Test4 = IntersectOf<number>; // => number

TypeChecking<Test1, never, Test.Pass>();

TypeChecking<Test2, { a: string } & { b: number }, Test.Pass>();

TypeChecking<Test3, { a: string; b: number }, Test.Pass>();

TypeChecking<Test4, number, Test.Pass>();
