import { Checking, type Test } from "../../src";
import type { NonReadonlyDeep } from "../../src/Object/NonReadonlyDeep";

type Obj1 = { readonly num: 123; readonly str?: string; readonly union: boolean; readonly fn: () => string };

type Test1 = NonReadonlyDeep<Obj1>;

type Test1Expected = { num: 123; str?: string; union: boolean; fn: () => string };

Checking<Test1, Test1Expected, Test.Pass>;

type Obj2 = { readonly obj: { readonly a: string; readonly b?: number } };

type Test2 = NonReadonlyDeep<Obj2>;

type Test2Expected = { obj: { a: string; b?: number } };

Checking<Test2, Test2Expected, Test.Pass>;

type Arr = readonly [1, 2, 3];

type Test3 = NonReadonlyDeep<Arr>;

type Test3Expected = [1, 2, 3];

Checking<Test3, Test3Expected, Test.Pass>;

type Arr1 = readonly [1, readonly [1, 2, 3], 3];

type Test4 = NonReadonlyDeep<Arr1>;

type Test4Expected = [1, [1, 2, 3], 3];

Checking<Test4, Test4Expected, Test.Pass>;
