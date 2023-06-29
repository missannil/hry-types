import { type Test, TypeChecking } from "../../src";
import type { ReturnTypeInObject } from "../../src/Object/ReturnTypeInObject";

type TestObj = { num: 123; str?: string; union: boolean; fn: () => string };

type TestResult = ReturnTypeInObject<TestObj>;

TypeChecking<TestResult, { num: 123; str?: string; union: boolean; fn: string }, Test.Pass>;
