import type { Test } from "../../src";
import { TypeChecking } from "../../src/Check/TypeChecking";

// number
TypeChecking<1, 1, Test.Pass>();

TypeChecking<1, 0, Test.Fail>();

TypeChecking<1 | 2, 2 | 1, Test.Pass>();

// string
TypeChecking<"hello", "hello", Test.Pass>();

TypeChecking<"hello", "world", Test.Fail>();

// boolean
TypeChecking<true, true, Test.Pass>();

TypeChecking<true, false, Test.Fail>();

// object
TypeChecking<{ num: number }, { num: number }, Test.Pass>();

TypeChecking<{ num: 1 }, { num: number }, Test.Fail>();

// intersection object
TypeChecking<{ num: number } & { str: string }, { num: number; str: string }, Test.Pass>();

// union object
TypeChecking<{ num: number } | { str: string }, { num?: number; str?: string }, Test.Pass>();

// array
TypeChecking<number[], number[], Test.Pass>();

TypeChecking<number[], string[], Test.Fail>();

// function
TypeChecking<() => void, () => void, Test.Pass>();

TypeChecking<() => void, (num: number) => void, Test.Fail>();
