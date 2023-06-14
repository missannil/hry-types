import { type AnyFunction, type O, type Test, TypeChecking } from "../src";
import { type Filter } from "../src/Object/Filter";

// -------------------IsPureObject-------------------

TypeChecking<O.IsPureObject<{}>, true, Test.Pass>;
TypeChecking<O.IsPureObject<{ a: number }>, true, Test.Pass>;
TypeChecking<O.IsPureObject<{ a: number } & { b: string }>, true, Test.Pass>;
TypeChecking<O.IsPureObject<[]>, true, Test.Fail>;
TypeChecking<O.IsPureObject<() => any>, true, Test.Fail>;
TypeChecking<O.IsPureObject<never>, true, Test.Fail>;
TypeChecking<O.IsPureObject<unknown>, true, Test.Fail>;
TypeChecking<O.IsPureObject<any>, true, Test.Fail>;

// -------------------Filter-------------------

type obj = { t: true; f: false; b: boolean };

// 过滤obj中类型为true子类型的key,t会被去掉
TypeChecking<Filter<obj, true, "extends->">, { f: false; b: boolean }, Test.Pass>;

// 过滤obj中类型为boolean子类型的key,都会被去掉
TypeChecking<Filter<obj, boolean, "extends->">, {}, Test.Pass>;

// 过滤obj中类型为true父类型的key ,t和b 会被去掉
TypeChecking<Filter<obj, true, "<-extends">, { f: false }, Test.Pass>;

// 过滤obj中类型为boolean父类型的key,b会被去掉
TypeChecking<Filter<obj, boolean, "<-extends">, { t: true; f: false }, Test.Pass>;

// 过滤obj中类型与boolean相等的key , b会被去掉
TypeChecking<Filter<obj, boolean, "equals">, { t: true; f: false }, Test.Pass>;

// -------------------FilterKeys-------------------

// 过滤obj中类型与boolean相等的key , b会被去掉

TypeChecking<O.FilterKeys<obj, true, "extends->">, "b" | "f", Test.Pass>;
TypeChecking<O.FilterKeys<obj, false, "equals">, "t" | "b", Test.Pass>;
TypeChecking<O.FilterKeys<obj, boolean, "equals">, "t" | "f", Test.Pass>;

// -------------------MergeIntersection-------------------

TypeChecking<O.MergeIntersection<{ name: string } & { age: number }>, { name: string; age: number }, Test.Pass>;

// -------------------NonReadonly-------------------

TypeChecking<
  O.NonReadonly<{ readonly a: number; readonly b: { readonly c: number } }>,
  { a: number; b: { c: number } },
  Test.Pass
>;

// -------------------ReturnTypeOfProperty-------------------

TypeChecking<O.ReturnTypeOfProperty<{ fun: () => number; num: number }>, { fun: number; num: number }, Test.Pass>;

// -------------------SelectKeys-------------------

TypeChecking<O.SelectKeys<{ fun: () => number; num: number }, AnyFunction>, "fun", Test.Pass>;

TypeChecking<O.SelectKeys<{ fun: () => number; num: number }, string>, never, Test.Pass>;

// -------------------Select-------------------

TypeChecking<O.Select<{ fun: () => number; num: number }, AnyFunction>, { fun: () => number }, Test.Pass>;
TypeChecking<O.Select<{ fun: () => number; num: number }, number>, { num: number }, Test.Pass>;

TypeChecking<O.Select<{ fun: () => number; num: number }, string>, {}, Test.Pass>;
