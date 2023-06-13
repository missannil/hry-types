import { type A, type B, type Test, TypeChecking } from "../src";

// -------------------If-------------------

type IfExtend = B.If<A.Extends<"A", string>, true, false>;
type IfEqual = B.If<A.Equals<"A", "A">, true, false>;
type IfOther = B.If<(object extends string ? true : false), true, false>;

TypeChecking<IfExtend, true, Test.Pass>;

TypeChecking<IfEqual, true, Test.Pass>;

TypeChecking<IfOther, false, Test.Pass>;
