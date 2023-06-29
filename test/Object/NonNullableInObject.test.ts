import { type Test, TypeChecking } from "../../src";
import type { NonNullableInObject } from "../../src/Object/NonNullableInObject";

type Obj1 = { a: number | undefined; b?: string; c: null; d: boolean };

type Obj2 = { a: undefined; b: null };

type Obj3 = { a: undefined | null };

type Obj4 = { a: never };

type Obj5 = {};

TypeChecking<NonNullableInObject<Obj1>, { a: number; b?: string; d: boolean }, Test.Pass>;

TypeChecking<NonNullableInObject<Obj2>, {}, Test.Pass>;

TypeChecking<NonNullableInObject<Obj3>, {}, Test.Pass>;

TypeChecking<NonNullableInObject<Obj4>, {}, Test.Pass>;

TypeChecking<NonNullableInObject<Obj5>, {}, Test.Pass>;
