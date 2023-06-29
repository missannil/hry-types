import type { Test } from "../../src";
import { TypeChecking } from "../../src";
import type { Union } from "../../src/Object/Union";

type Test1 = Union<{ a: number }, { b: string }>; // => { a?: number; b?: string }

TypeChecking<Test1, { a?: number; b?: string }, Test.Pass>;

type Test2 = Union<{ a: number; b: boolean }, { b: string; c: symbol }>; // => { b: string | boolean; a?: number; c?: symbol }

TypeChecking<Test2, { b: string | boolean; a?: number; c?: symbol }, Test.Pass>;

type Test3 = Union<{}, { a: number }>; // => { a: number }

TypeChecking<Test3, {}, Test.Pass>;

type Test4 = Union<{ a: number }, {}>; // => { a: number }

TypeChecking<Test4, {}, Test.Pass>;

type Test5 = Union<{}, {}>; // => {}

TypeChecking<Test5, {}, Test.Pass>;

type Test6 = Union<never, never>; // => never

TypeChecking<Test6, never, Test.Pass>;

// 有一个参数不为对象(函数或数组)时，返回never
type Test7 = Union<[], { a: string }>; // => never

TypeChecking<Test7, never, Test.Pass>;
