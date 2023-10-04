import { Checking, type Test } from "../../src";
import type { BuiltIns } from "../../src/_internal/BuiltIns";
import type { ReadonlyDeep } from "../../src/Any/_api";

type IsUnknown = ReadonlyDeep<unknown>;

Checking<IsUnknown, unknown, Test.Pass>;

type IsBuiltIns = ReadonlyDeep<BuiltIns>;

Checking<IsBuiltIns, BuiltIns, Test.Pass>;

type IsFunction = ReadonlyDeep<Function>;

Checking<IsFunction, Function, Test.Pass>;

type IsSet = ReadonlyDeep<Set<unknown>>;

Checking<IsSet, Set<unknown>, Test.Pass>;

type IsMap = ReadonlyDeep<Map<unknown, unknown>>;

Checking<IsMap, Map<unknown, unknown>, Test.Pass>;

type Obj = {
  num: number;
  str?: string;
  bigInt: bigint;
  bool: boolean;
  fun: (...arg: any[]) => any;
  arr: string[];
  tuple: [number, string[], { a: number }];
};

type TestObj = ReadonlyDeep<{ obj: Obj }>;

type TestObjExpected = {
  readonly obj: {
    readonly num: number;
    readonly str?: string;
    readonly bigInt: bigint;
    readonly bool: boolean;
    readonly fun: (...arg: any[]) => any;
    readonly arr: readonly string[];
    readonly tuple: readonly [number, readonly string[], { readonly a: number }];
  };
};

Checking<TestObj, TestObjExpected, Test.Pass>;

// 联合类型

type TestUnion = ReadonlyDeep<
  | string[]
  | unknown[]
  | [TestObj, string[], () => number]
  | (() => number)
  | BuiltIns
>;

type TestUnionExpected =
  | readonly string[]
  | readonly unknown[]
  | readonly [TestObjExpected, readonly string[], () => number]
  | (() => number)
  | BuiltIns;

Checking<TestUnion, TestUnionExpected, Test.Pass>;

const foo: ReadonlyDeep<{ a: { str: string } }> = {} as any;

type fooExpected = { readonly a: { readonly str: string } };

// 悬停在foo上提示为 `_ReadonlyDeep<{ a: { str: string } }>` 而非预期 `{ readonly a: { readonly str: string } }`
Checking<typeof foo, fooExpected, Test.Pass>;
