/* eslint-disable @typescript-eslint/no-unused-vars */
import { Checking } from "../../src/_internal/Checking";
import type { EnsurePlainObject } from "../../src/Constraint/_index";
import { type Test } from "../../src/index";

// ============================================================
// 普通对象满足约束
// ============================================================
type Foo<T extends object> = T; // 约束为对象类型，但包含了非纯对象类型

// 不报错，函数类型也是对象类型
type Test0 = Foo<() => void>;

// 约束为纯对象类型
type Foo1<T extends EnsurePlainObject<T>> = T;

// 正确使用纯对象类型
type Test1 = Foo1<{ a: 1 }>; // { a: 1 }

// ============================================================
// 数组、函数和基础类型不满足约束
// ============================================================
// @ts-expect-error  类型“unknown[]”不满足约束“"只能是纯对象"”
type test2 = Foo1<unknown[]>;

// @ts-expect-error  类型“() => void”不满足约束“"只能是纯对象"”
type test3 = Foo1<() => void>;

// @ts-expect-error  类型“null”不满足约束“"只能是纯对象"”
type test4 = Foo1<null>;

// @ts-expect-error  类型“undefined”不满足约束“"只能是纯对象"”
type test5 = Foo1<undefined>;

// @ts-expect-error  类型“string”不满足约束“"只能是纯对象"”
type test6 = Foo1<string>;

// @ts-expect-error  类型“number”不满足约束“"只能是纯对象"”
type test7 = Foo1<number>;

// @ts-expect-error  类型“symbol”不满足约束“"只能是纯对象"”
type test8 = Foo1<symbol>;

// @ts-expect-error  类型“bigint”不满足约束“"只能是纯对象"”
type test9 = Foo1<bigint>;

// @ts-expect-error  类型“boolean”不满足约束“"只能是纯对象"”
type test10 = Foo1<boolean>;

// @ts-expect-error  类型“Map<any, any>”不满足约束“"只能是纯对象"”
type test11 = Foo1<Map<any, any>>;

// @ts-expect-error  类型“Set<any>”不满足约束“"只能是纯对象"”
type test12 = Foo1<Set<any>>;

// @ts-expect-error  类型“Date”不满足约束“"只能是纯对象"”
type test13 = Foo1<Date>;

// @ts-expect-error  类型“RegExp”不满足约束“"只能是纯对象"”
type test14 = Foo1<RegExp>;

type Test15 = Foo1<never>;

// never  这里是正常的，因为 never 是所有类型的子类型，即使验证返回的是 Error，好比 never extends Error ? never : Error，所以结果还是 never。
Checking<Test15, never, Test.Pass>;
