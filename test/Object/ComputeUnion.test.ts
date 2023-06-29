import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { ComputeUnion } from "../../src/Object/ComputeUnion";

type Test1 = ComputeUnion<{ a: number } | { b: string }>; // => { a?: number; b?: string }

TypeChecking<Test1, { a?: number; b?: string }, Test.Pass>;

type Test2 = ComputeUnion<{ a: number; b: boolean } | { b: string; c: symbol }>; // => { b: string | boolean; c?: symbol; a?: number }

TypeChecking<Test2, { b: string | boolean; c?: symbol; a?: number }, Test.Pass>;

type Test3 = ComputeUnion<{} | { a: number }>; // => {}

TypeChecking<Test3, {}, Test.Pass>;

type Test4 = ComputeUnion<{ a: number } | {}>; // =>  {}

TypeChecking<Test4, {}, Test.Pass>;

type Test5 = ComputeUnion<{} | {}>; // => {}

TypeChecking<Test5, {}, Test.Pass>;

type Test6 = ComputeUnion<never>; // => never

TypeChecking<Test6, never, Test.Pass>;
