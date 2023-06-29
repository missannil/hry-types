import { type Test, TypeChecking } from "../../src";
import type { NonReadonly } from "../../src/Object/NonReadonly";

type TestObj = { readonly num: 123; readonly str?: string; readonly union: boolean; readonly fn: () => string };

type TestResult = NonReadonly<TestObj>;

TypeChecking<TestResult, { num: 123; str?: string; union: boolean; fn: () => string }, Test.Pass>;

type TestrecursiveObj = { readonly a: number; readonly b: { readonly c: number } };

type TestrecursiveObjResult = NonReadonly<TestrecursiveObj>;

TypeChecking<TestrecursiveObjResult, { a: number; b: { c: number } }, Test.Pass>;
