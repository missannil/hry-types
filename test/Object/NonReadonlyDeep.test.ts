import { Checking, type Test } from "../../src";
import type { NonReadonlyDeep } from "../../src/Object/NonReadonlyDeep";

type Obj1 = { readonly num: 123; readonly str?: string; readonly union: boolean; readonly fn: () => string };

type TestObj1 = NonReadonlyDeep<Obj1>;

type TestObj1Expected = { num: 123; str?: string; union: boolean; fn: () => string };

Checking<TestObj1, TestObj1Expected, Test.Pass>;

type Obj2 = { readonly obj: { readonly a: string; readonly b?: number } };

type TestObj2 = NonReadonlyDeep<Obj2>;

type TestObj2Expected = { obj: { a: string; b?: number } };

Checking<TestObj2, TestObj2Expected, Test.Pass>;

type Arr = readonly [1, 2, 3];

type TestArr = NonReadonlyDeep<Arr>;

type TestArrExpected = [1, 2, 3];

Checking<TestArr, TestArrExpected, Test.Pass>;

type Arr1 = readonly [1, readonly [1, 2, 3], 3];

type TestArr1 = NonReadonlyDeep<Arr1>;

type TestArr1Expected = [1, [1, 2, 3], 3];

Checking<TestArr1, TestArr1Expected, Test.Pass>;
