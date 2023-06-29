import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { Is } from "../../src/Any/Is";

type Test1 = Is<1, number>; // => true

TypeChecking<Test1, true, Test.Pass>;

type Test2 = Is<"hello", string>; // => true

TypeChecking<Test2, true, Test.Pass>;

type Test3 = Is<true, boolean>; // => true

TypeChecking<Test3, true, Test.Pass>;

type Test4 = Is<1, string>; // => false

TypeChecking<Test4, false, Test.Pass>;

type Test5 = Is<"hello", number>; // => false

TypeChecking<Test5, false, Test.Pass>;

type Test6 = Is<true, string>; // => false

TypeChecking<Test6, false, Test.Pass>;

type Test7 = Is<{ a: number }, { a: number; b: string }>; // => false

TypeChecking<Test7, false, Test.Pass>;

type Test8 = Is<{ a: number; b: string }, { a: number }>; // => true

TypeChecking<Test8, true, Test.Pass>;

type Test9 = Is<{ a: number; b: string }, { a: number; b: string; c?: boolean }, "extends->">; // => true

TypeChecking<Test9, true, Test.Pass>;

type Test10 = Is<{ a: number; b: string; c?: boolean }, { a: number; b: string }, "<-extends">; // => true

TypeChecking<Test10, true, Test.Pass>;

type Test11 = Is<{ a: number; b: string }, { a: number; b: string; c?: boolean }, "equals">; // => false

TypeChecking<Test11, false, Test.Pass>;

type Test12 = Is<{ a: number; b: string; c?: boolean }, { a: number; b: string; c?: boolean }, "equals">; // => true

TypeChecking<Test12, true, Test.Pass>;
