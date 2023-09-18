import { Checking, type Test } from "../../src";
import type { ReadonlyDeep } from "../../src/Any/ReadonlyDeep";
declare const uniqueSymbol: unique symbol;

type Obj = {
  fun: () => void; // 有参数时,整体会被计算
  date: Date;
  RegExp: RegExp;
  num: number;
  str: string;
  symbol: symbol;
  uniqueSymbol: typeof uniqueSymbol;
  null: null;
  undefined: undefined;
  bigInt: bigint;
  bool: boolean;
  unknown: unknown;
  arr: unknown[];
};

type Test1 = {
  data: ReadonlyDeep<{
    fun: () => void; // 有参数时,整体会被计算
    date: Date;
    RegExp: RegExp;
    num: number;
    str: string;
    symbol: symbol;
    uniqueSymbol: typeof uniqueSymbol;
    null: null;
    undefined: undefined;
    bigInt: bigint;
    bool: boolean;
    unknown: unknown;
    arr: unknown[];
    obj: Obj;
    tuple: [Date, number, string, null, undefined, bigint, unknown, unknown[]];
  }>;
};

type Test1Expected = {
  data: {
    readonly fun: ReadonlyDeep<() => void>;
    readonly date: Date;
    readonly RegExp: ReadonlyDeep<RegExp>;
    readonly num: number;
    readonly str: string;
    readonly symbol: symbol;
    readonly uniqueSymbol: typeof uniqueSymbol;
    readonly null: null;
    readonly undefined: undefined;
    readonly bigInt: bigint;
    readonly bool: boolean;
    readonly unknown: unknown;
    readonly arr: readonly unknown[];
    readonly obj: ReadonlyDeep<Obj>;
    readonly tuple: readonly [
      Date,
      number,
      string,
      null,
      undefined,
      bigint,
      unknown,
      readonly unknown[],
    ];
  };
};

Checking<Test1, Test1Expected, Test.Pass>;

// /**
//  * 检查给定类型是否为纯对象。
//  * 纯对象是指除了 `never` 以外的任何类型，并且不是以下类型之一：`Date`、`RegExp`、`Function`、`ReadonlyArray<any>`。
//  * @returns 若类型为纯对象则返回 `true`，否则返回 `false`。
//  */
// type IsPureObject<T> = IsNever<T> extends true ? false
//   : T extends Date | RegExp | Function | ReadonlyArray<any> ? false
//   : true;
