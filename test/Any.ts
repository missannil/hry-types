import { type A, type Test, TypeChecking } from "..";

// -------------------Cast-------------------

TypeChecking<A.Cast<[0, 1, 2], any>, [0, 1, 2], Test.Pass>;
TypeChecking<A.Cast<{ a: string }, {}>, { a: string }, Test.Pass>;
TypeChecking<A.Cast<string, object>, object, Test.Pass>;
TypeChecking<A.Cast<any, string>, any, Test.Pass>;
TypeChecking<A.Cast<0, 42>, 42, Test.Pass>;

// -------------------Extends-------------------

TypeChecking<A.Extends<"A" | "B", "A">, true, Test.Fail>;
TypeChecking<A.Extends<"A" | "B", "A">, false, Test.Fail>;
TypeChecking<A.Extends<"A" | "B", "A">, boolean, Test.Pass>;

// -------------------And Contains -------------------

// TypeChecking<A.Contains<"A" | "B", "A">, true, Test.Fail>;
// TypeChecking<A.Contains<"A" | "B", "A">, false, Test.Pass>;
// TypeChecking<A.Contains<"A" | "B", "A">, boolean, Test.Fail>;

// -------------------Equals-------------------

TypeChecking<A.Equals<{}, {} | null>, false, Test.Pass>;
TypeChecking<A.Equals<[0, 1], any>, false, Test.Pass>;
TypeChecking<A.Equals<any, [0, 1]>, false, Test.Pass>;
TypeChecking<A.Equals<any, [0, 1]>, false, Test.Pass>;
TypeChecking<A.Equals<0, 0>, true, Test.Pass>;
TypeChecking<A.Equals<0, 1>, false, Test.Pass>;
TypeChecking<A.Equals<0, number>, false, Test.Pass>;
TypeChecking<A.Equals<any, string>, false, Test.Pass>;
TypeChecking<A.Equals<string, any>, false, Test.Pass>;
TypeChecking<A.Equals<{}, object>, false, Test.Pass>;
TypeChecking<A.Equals<{ a: any }, object>, false, Test.Pass>;
TypeChecking<A.Equals<object, { a: any }>, false, Test.Pass>;
TypeChecking<A.Equals<any[], Array<any>>, true, Test.Pass>;
TypeChecking<A.Equals<"a" | "b", "b" | "a">, true, Test.Pass>;
TypeChecking<A.Equals<"a", "a">, true, Test.Pass>;
TypeChecking<A.Equals<1 | 0, 0 | 1>, true, Test.Pass>;
TypeChecking<A.Equals<{ a: 1 } & { b: 2 }, { a: 1; b: 2 }>, true, Test.Fail>; // ⚠️对象交叉类型不符合预期⚠️

// -------------------IfEquals-------------------

TypeChecking<A.IfEquals<1, 1>, unknown, Test.Pass>;
TypeChecking<A.IfEquals<"A", 0>, "A", Test.Pass>;
TypeChecking<A.IfEquals<1, 1, true, false>, true, Test.Pass>;
TypeChecking<A.IfEquals<1, 0, true, false>, false, Test.Pass>;

// -------------------IfExtends-------------------

type D1 = A.IfExtends<1, 1>;
type E1 = A.IfExtends<"A", 0>;
type F1 = A.IfExtends<1, 1, true, false>;
type G1 = A.IfExtends<1, 0, true, false>;
TypeChecking<D1, unknown, Test.Pass>;
TypeChecking<E1, "A", Test.Pass>;
TypeChecking<F1, true, Test.Pass>;
TypeChecking<G1, false, Test.Pass>;

// -------------------Is-------------------

TypeChecking<A.Is<"xxxx", string, "extends->">, true, Test.Pass>;
TypeChecking<A.Is<string, "xxxx", "extends->">, false, Test.Pass>;

TypeChecking<A.Is<"xxxx", string, "<-extends">, false, Test.Pass>;
TypeChecking<A.Is<string, "xxxx", "<-extends">, true, Test.Pass>;

TypeChecking<A.Is<string, string | number, "extends->">, true, Test.Pass>;
TypeChecking<A.Is<string | number, string, "extends->">, boolean, Test.Pass>;

TypeChecking<A.Is<string, string | number, "<-extends">, boolean, Test.Pass>;
TypeChecking<A.Is<string | number, string, "<-extends">, true, Test.Pass>;

TypeChecking<A.Is<string, string | number, "<-extends">, boolean, Test.Pass>;

TypeChecking<A.Is<"xxxx", string, "equals">, false, Test.Pass>;
TypeChecking<A.Is<string, "xxxx", "equals">, false, Test.Pass>;

TypeChecking<A.Is<string, string | number, "equals">, false, Test.Pass>;
TypeChecking<A.Is<string | number, string, "equals">, false, Test.Pass>;

// -------------------IsNever-------------------

TypeChecking<A.IsNever<never>, true, Test.Pass>;
TypeChecking<A.IsNever<any>, false, Test.Pass>;
