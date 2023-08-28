import { Checking, type Test } from "../../src";
import type { ReadonlyDeep } from "../../src/Object/ReadonlyDeep";

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

// 联合对象

type Test2 = ReadonlyDeep<
  | Test1
  | string[]
  | [Test1, string[], () => number]
  | (() => number)
  | RegExp
  | Date
>;

type Test2Expected =
  | Test1Expected
  | readonly string[]
  | readonly [Test1Expected, readonly string[], () => number]
  | (() => number)
  | RegExp
  | Date;

Checking<Test2, Test2Expected, Test.Pass>;
