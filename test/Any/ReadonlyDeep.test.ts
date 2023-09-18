import { Checking, type Test } from "../../src";
import type { BuiltIns } from "../../src/_internal/BuiltIns";
import type { ReadonlyDeep } from "../../src/Any/_api";

type Obj = {
  num: number;
  str?: string;
  bigInt: bigint;
  bool: boolean;
  fun: (...arg: any[]) => any;
  arr: string[];
  tuple: [number, string, { a: number }];
};

// 非联合对象
type Test1 = ReadonlyDeep<Obj & { obj: Obj }>;

type Test1Expected = {
  readonly num: number;
  readonly str?: string;
  readonly bigInt: bigint;
  readonly bool: boolean;
  readonly fun: (...arg: any[]) => any;
  readonly arr: readonly string[];
  readonly tuple: readonly [number, string, { readonly a: number }];
  readonly obj: {
    readonly num: number;
    readonly str?: string;
    readonly bigInt: bigint;
    readonly bool: boolean;
    readonly fun: (...arg: any[]) => any;
    readonly arr: readonly string[];
    readonly tuple: readonly [number, string, { readonly a: number }];
  };
};

Checking<Test1, Test1Expected, Test.Pass>;

// 联合类型

type Test2 = ReadonlyDeep<
  | string[]
  | unknown[]
  | [Test1, string[], () => number]
  | (() => number)
  | BuiltIns
>;

type Test2Expected =
  | readonly string[]
  | readonly unknown[]
  | readonly [Test1Expected, readonly string[], () => number]
  | (() => number)
  | BuiltIns;

Checking<Test2, Test2Expected, Test.Pass>;

// unknown

type Test3 = { a: readonly ReadonlyDeep<unknown>[] };

type Test3Expected = { a: readonly unknown[] };

Checking<Test3, Test3Expected, Test.Pass>;
