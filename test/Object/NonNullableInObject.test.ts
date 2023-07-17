import { Checking, type Test } from "../../src";
import type { NonNullableInObject } from "../../src/Object/NonNullableInObject";

type Obj1 = { a: number | undefined; b?: string; c: null; d: boolean };

type Test1 = NonNullableInObject<Obj1>;

type Test1Expected = { a: number; b?: string; d: boolean };

Checking<Test1, Test1Expected, Test.Pass>;

type Obj2 = { a: undefined; b: null };

type Test2 = NonNullableInObject<Obj2>;

type Test2Expected = {};

Checking<Test2, Test2Expected, Test.Pass>;

type Obj3 = { a: undefined | null };

type Test3 = NonNullableInObject<Obj3>;

type Test3Expected = {};

Checking<Test3, Test3Expected, Test.Pass>;

type Obj4 = { a: never };

type Test4 = NonNullableInObject<Obj4>;

type Test4Expected = {};

Checking<Test4, Test4Expected, Test.Pass>;
