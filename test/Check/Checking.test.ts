import type { Test } from "../../src";
import { Checking } from "../../src/Check/Checking";
import type { ComputeIntersection } from "../../src/Object/ComputeIntersection";

// number
Checking<1, 1, Test.Pass>;

Checking<1, 0, Test.Fail>;

Checking<1 | 2, 2 | 1, Test.Pass>;

// string
Checking<"hello", "hello", Test.Pass>;

Checking<"hello", "world", Test.pass>;

// boolean
Checking<true, true, Test.Pass>;

Checking<true, false, Test.Fail>;

// object
Checking<{ num: number }, { num: number }, Test.Pass>;

Checking<{ num: 1 }, { num: number }, Test.Fail>;

// intersection object
Checking<ComputeIntersection<{ num: number } & { str: string }>, { num: number; str: string }, Test.Pass>;

Checking<ComputeIntersection<{ num: number } & { num: string }>, { num: never }, Test.Pass>;

// ⚠️下面并不符合预期,[issue](https://github.com/microsoft/TypeScript/issues/54903)
Checking<ComputeIntersection<{ num: number } & { num: string } & { num: boolean }>, never, Test.Pass>;

// union object
Checking<{ num: number } | { str: string }, { str: string } | { num: number }, Test.Pass>;

// array
Checking<number[], number[], Test.Pass>;

Checking<number[], string[], Test.Fail>;

// function
Checking<() => void, () => void, Test.Pass>;

Checking<() => void, (num: number) => void, Test.Fail>;

// tuple
Checking<[number, string], [number, string], Test.Pass>;

Checking<[number, string], [string, number], Test.Fail>;

// any
Checking<any, any, Test.Pass>;

Checking<any, unknown, Test.Fail>;

// unknown
Checking<unknown, unknown, Test.Pass>;

Checking<unknown, any, Test.Fail>;

// never
Checking<never, never, Test.Pass>;

Checking<never, any, Test.Fail>;

// void

Checking<void, void, Test.Pass>;

Checking<void, any, Test.Fail>;
