import type { Test } from "../../src";
import { TypeChecking } from "../../src/Check/TypeChecking";
import type { ComputeIntersection } from "../../src/Object/ComputeIntersection";

// number
TypeChecking<1, 1, Test.Pass>;

TypeChecking<1, 0, Test.Fail>;

TypeChecking<1 | 2, 2 | 1, Test.Pass>;

// string
TypeChecking<"hello", "hello", Test.Pass>;

TypeChecking<"hello", "world", Test.Fail>;

// boolean
TypeChecking<true, true, Test.Pass>;

TypeChecking<true, false, Test.Fail>;

// object
TypeChecking<{ num: number }, { num: number }, Test.Pass>;

TypeChecking<{ num: 1 }, { num: number }, Test.Fail>;

// intersection object
TypeChecking<ComputeIntersection<{ num: number } & { str: string }>, { num: number; str: string }, Test.Pass>;

TypeChecking<ComputeIntersection<{ num: number } & { num: string }>, { num: never }, Test.Pass>;

// ⚠️下面并不符合预期,[issue](https://github.com/microsoft/TypeScript/issues/54903)
TypeChecking<ComputeIntersection<{ num: number } & { num: string } & { num: boolean }>, never, Test.Pass>;

// union object
TypeChecking<{ num: number } | { str: string }, { str: string } | { num: number }, Test.Pass>;

// array
TypeChecking<number[], number[], Test.Pass>;

TypeChecking<number[], string[], Test.Fail>;

// function
TypeChecking<() => void, () => void, Test.Pass>;

TypeChecking<() => void, (num: number) => void, Test.Fail>;

// tuple
TypeChecking<[number, string], [number, string], Test.Pass>;

TypeChecking<[number, string], [string, number], Test.Fail>;

// any
TypeChecking<any, any, Test.Pass>;

TypeChecking<any, unknown, Test.Fail>;

// unknown
TypeChecking<unknown, unknown, Test.Pass>;

TypeChecking<unknown, any, Test.Fail>;

// never
TypeChecking<never, never, Test.Pass>;

TypeChecking<never, any, Test.Fail>;

// void

TypeChecking<void, void, Test.Pass>;

TypeChecking<void, any, Test.Fail>;
