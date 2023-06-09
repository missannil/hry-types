import { type Test, TypeChecking } from "../../src";
import type { NonReadonly } from "../../src/Object/NonReadonly";

type Obj1 = { readonly num: 123; readonly str?: string; readonly union: boolean; readonly fn: () => string };

type TestObj1 = NonReadonly<Obj1>;

type TestObj1Expected = { num: 123; str?: string; union: boolean; fn: () => string };

TypeChecking<TestObj1, TestObj1Expected, Test.Pass>;

type Arr = readonly [1, 2, 3];

type TestArr = NonReadonly<Arr>;

type TestArrExpected = [1, 2, 3];

TypeChecking<TestArr, TestArrExpected, Test.Pass>;

type Arr1 = readonly [1, readonly [1, 2, 3], 3];

type TestArr1 = NonReadonly<Arr1>;

type TestArr1Expected = [1, [1, 2, 3], 3];

// Fail 因为不是深度去除readonly
TypeChecking<TestArr1, TestArr1Expected, Test.Fail>;
