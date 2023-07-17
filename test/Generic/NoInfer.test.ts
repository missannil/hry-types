import { Checking, type Test } from "../../src";
import type { NoInfer } from "../../src/Generic/NoInfer";

const fn = <A>(a0: A, a1: A): A => {
  a0;

  a1;

  return {} as any;
};

const test = fn("a", "b");

type TestExpect = "a" | "b";

Checking<typeof test, TestExpect, Test.Pass>;

const fn0 = <A extends string>(a0: A, a1: NoInfer<A>): void => {
  a0;

  a1;
};

// @ts-expect-error  类型“"b"”的参数不能赋给类型“"a"”的参数
fn0("a", "b");

// 也可使用多泛型来处理这种情况，但多了泛型。根据情况使用
const fn1 = <A extends string, B extends A>(a0: A, a1: B): void => {
  a0;

  a1;
};

// @ts-expect-error  类型“"b"”的参数不能赋给类型“"a"”的参数
fn1("a", "b"); //
